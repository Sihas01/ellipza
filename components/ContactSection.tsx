"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";

type SubmitState = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
    const [submitState, setSubmitState] = useState<SubmitState>("idle");
    const [feedback, setFeedback] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitState("sending");
        setFeedback("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(formData.entries())),
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "We couldn't send your message.");
            }

            form.reset();
            setSubmitState("success");
            setFeedback("Thanks! Your message has been sent. We'll be in touch soon.");
        } catch (error) {
            setSubmitState("error");
            setFeedback(error instanceof Error ? error.message : "We couldn't send your message. Please try again.");
        }
    }

    return (
        <section id="contact" className="py-5 md:py-24 bg-[#F6F6F6] relative overflow-hidden font-sans">
            {/* Background Wave */}
            <div className="absolute top-0 left-0 w-full pointer-events-none opacity-100 z-0">
                <img src="/contact-wave.png" alt="" className="w-full h-auto opacity-100" />
            </div>

            <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-16 ">

                    {/* Left Column: Info */}
                    <div className="lg:w-2/5">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="block text-[#59257A] font-bold tracking-widest text-[16px] mb-4 uppercase border-l-2 border-[#59257A] pl-3"
                        >
                            Contact Us
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        >


                            <svg width="227" height="21" viewBox="0 0 227 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden">
                                <g filter="url(#filter0_i_13_22058)">
                                    <path d="M9.33789 20.7402C3.5957 20.7402 0 16.8984 0 10.5273C0 4.16992 3.62305 0.328125 9.33789 0.328125C14.082 0.328125 17.6914 3.33594 18.0059 7.75195H13.9863C13.6035 5.33203 11.7441 3.74609 9.33789 3.74609C6.2207 3.74609 4.21094 6.35742 4.21094 10.5137C4.21094 14.7246 6.19336 17.3223 9.35156 17.3223C11.7988 17.3223 13.5625 15.8867 14 13.5488H18.0195C17.5547 17.9512 14.1777 20.7402 9.33789 20.7402ZM26.9609 20.7129C22.5312 20.7129 19.7012 17.8691 19.7012 13.0566C19.7012 8.3125 22.5723 5.42773 26.9609 5.42773C31.3496 5.42773 34.2207 8.29883 34.2207 13.0566C34.2207 17.8828 31.3906 20.7129 26.9609 20.7129ZM26.9609 17.6641C28.916 17.6641 30.1602 16.0098 30.1602 13.0703C30.1602 10.1582 28.9023 8.47656 26.9609 8.47656C25.0195 8.47656 23.748 10.1582 23.748 13.0703C23.748 16.0098 24.9922 17.6641 26.9609 17.6641ZM36.2852 20.3984V5.74219H40.1406V8.35352H40.2227C41.002 6.53516 42.5469 5.46875 44.8027 5.46875C48.0566 5.46875 49.8887 7.51953 49.8887 10.9512V20.3984H45.8965V11.7852C45.8965 9.87109 44.9941 8.77734 43.2031 8.77734C41.4121 8.77734 40.2773 10.0898 40.2773 11.9902V20.3984H36.2852ZM52.418 20.3984V5.74219H56.2734V8.35352H56.3555C57.1348 6.53516 58.6797 5.46875 60.9355 5.46875C64.1895 5.46875 66.0215 7.51953 66.0215 10.9512V20.3984H62.0293V11.7852C62.0293 9.87109 61.127 8.77734 59.3359 8.77734C57.5449 8.77734 56.4102 10.0898 56.4102 11.9902V20.3984H52.418ZM75.127 8.38086C73.377 8.38086 72.1191 9.70703 71.9824 11.5391H78.2031C78.1211 9.66602 76.9043 8.38086 75.127 8.38086ZM78.2578 15.9141H81.9219C81.4844 18.7852 78.8594 20.7129 75.2363 20.7129C70.7246 20.7129 68.0176 17.8281 68.0176 13.1387C68.0176 8.46289 70.752 5.42773 75.0859 5.42773C79.3516 5.42773 82.0449 8.3125 82.0449 12.7695V13.9863H71.9414V14.2324C71.9414 16.3242 73.2676 17.7598 75.3047 17.7598C76.7676 17.7598 77.8887 17.0352 78.2578 15.9141ZM97.4258 11.1973H93.7207C93.4883 9.65234 92.4629 8.55859 90.8223 8.55859C88.8535 8.55859 87.623 10.2266 87.623 13.0566C87.623 15.9414 88.8535 17.582 90.8359 17.582C92.4355 17.582 93.4746 16.625 93.7207 15.0254H97.4395C97.2344 18.4844 94.6504 20.7129 90.7949 20.7129C86.3789 20.7129 83.5762 17.8418 83.5762 13.0566C83.5762 8.35352 86.3789 5.42773 90.7676 5.42773C94.7324 5.42773 97.248 7.875 97.4258 11.1973ZM100.434 2.36523H104.426V5.74219H107.133V8.75H104.426V15.7637C104.426 16.8848 104.973 17.418 106.148 17.418C106.504 17.418 106.873 17.3906 107.119 17.3496V20.2891C106.709 20.3848 106.025 20.4531 105.219 20.4531C101.773 20.4531 100.434 19.3047 100.434 16.4473V8.75H98.3691V5.74219H100.434V2.36523ZM127.025 6.91797L123.279 20.3984H119.383L114.16 0.669922H118.439L121.543 14.957H121.652L125.344 0.669922H128.83L132.521 14.957H132.631L135.748 0.669922H140.027L134.791 20.3984H130.895L127.148 6.91797H127.025ZM141.982 20.3984V5.74219H145.975V20.3984H141.982ZM143.979 4.12891C142.775 4.12891 141.846 3.21289 141.846 2.06445C141.846 0.902344 142.775 0 143.979 0C145.182 0 146.111 0.902344 146.111 2.06445C146.111 3.21289 145.182 4.12891 143.979 4.12891ZM149.707 2.36523H153.699V5.74219H156.406V8.75H153.699V15.7637C153.699 16.8848 154.246 17.418 155.422 17.418C155.777 17.418 156.146 17.3906 156.393 17.3496V20.2891C155.982 20.3848 155.299 20.4531 154.492 20.4531C151.047 20.4531 149.707 19.3047 149.707 16.4473V8.75H147.643V5.74219H149.707V2.36523ZM158.689 20.3984V0.669922H162.613V8.35352H162.695C163.475 6.50781 165.074 5.46875 167.303 5.46875C170.557 5.46875 172.416 7.57422 172.416 10.9648V20.3984H168.424V11.8125C168.424 9.92578 167.494 8.77734 165.676 8.77734C163.789 8.77734 162.682 10.1035 162.682 12.0312V20.3984H158.689ZM189.766 0.328125C195.604 0.328125 199.281 4.25195 199.281 10.541C199.281 16.8164 195.604 20.7402 189.766 20.7402C183.914 20.7402 180.25 16.8164 180.25 10.541C180.25 4.25195 183.914 0.328125 189.766 0.328125ZM189.766 3.77344C186.539 3.77344 184.461 6.39844 184.461 10.541C184.461 14.6699 186.525 17.2812 189.766 17.2812C192.992 17.2812 195.057 14.6699 195.057 10.541C195.057 6.39844 192.992 3.77344 189.766 3.77344ZM215.141 5.74219V20.3984H211.285V17.7598H211.203C210.479 19.6055 209.029 20.6719 206.814 20.6719C203.643 20.6719 201.537 18.6074 201.537 15.1895V5.74219H205.529V14.3555C205.529 16.3105 206.5 17.3496 208.264 17.3496C210.041 17.3496 211.148 16.0781 211.148 14.1367V5.74219H215.141ZM217.738 20.3984V5.74219H221.594V8.38086H221.676C222.195 6.52148 223.439 5.50977 225.162 5.50977C225.627 5.50977 226.023 5.57812 226.297 5.66016V9.17383C225.969 9.03711 225.422 8.94141 224.848 8.94141C222.879 8.94141 221.73 10.1445 221.73 12.209V20.3984H217.738Z" fill="#D2D2D2" />
                                </g>
                                <defs>
                                    <filter id="filter0_i_13_22058" x="0" y="0" width="226.297" height="21.7402" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_13_22058" />
                                    </filter>
                                </defs>
                            </svg>


                            <svg width="340" height="32" viewBox="0 0 340 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-6 hidden md:block">
                                <g filter="url(#filter0_i_7_25224)">
                                    <path d="M14.0068 31.1104C5.39355 31.1104 0 25.3477 0 15.791C0 6.25488 5.43457 0.492188 14.0068 0.492188C21.123 0.492188 26.5371 5.00391 27.0088 11.6279H20.9795C20.4053 7.99805 17.6162 5.61914 14.0068 5.61914C9.33105 5.61914 6.31641 9.53613 6.31641 15.7705C6.31641 22.0869 9.29004 25.9834 14.0273 25.9834C17.6982 25.9834 20.3438 23.8301 21 20.3232H27.0293C26.332 26.9268 21.2666 31.1104 14.0068 31.1104ZM40.4414 31.0693C33.7969 31.0693 29.5518 26.8037 29.5518 19.585C29.5518 12.4688 33.8584 8.1416 40.4414 8.1416C47.0244 8.1416 51.3311 12.4482 51.3311 19.585C51.3311 26.8242 47.0859 31.0693 40.4414 31.0693ZM40.4414 26.4961C43.374 26.4961 45.2402 24.0146 45.2402 19.6055C45.2402 15.2373 43.3535 12.7148 40.4414 12.7148C37.5293 12.7148 35.6221 15.2373 35.6221 19.6055C35.6221 24.0146 37.4883 26.4961 40.4414 26.4961ZM54.4277 30.5977V8.61328H60.2109V12.5303H60.334C61.5029 9.80273 63.8203 8.20312 67.2041 8.20312C72.085 8.20312 74.833 11.2793 74.833 16.4268V30.5977H68.8447V17.6777C68.8447 14.8066 67.4912 13.166 64.8047 13.166C62.1182 13.166 60.416 15.1348 60.416 17.9854V30.5977H54.4277ZM78.627 30.5977V8.61328H84.4102V12.5303H84.5332C85.7021 9.80273 88.0195 8.20312 91.4033 8.20312C96.2842 8.20312 99.0322 11.2793 99.0322 16.4268V30.5977H93.0439V17.6777C93.0439 14.8066 91.6904 13.166 89.0039 13.166C86.3174 13.166 84.6152 15.1348 84.6152 17.9854V30.5977H78.627ZM112.69 12.5713C110.065 12.5713 108.179 14.5605 107.974 17.3086H117.305C117.182 14.499 115.356 12.5713 112.69 12.5713ZM117.387 23.8711H122.883C122.227 28.1777 118.289 31.0693 112.854 31.0693C106.087 31.0693 102.026 26.7422 102.026 19.708C102.026 12.6943 106.128 8.1416 112.629 8.1416C119.027 8.1416 123.067 12.4688 123.067 19.1543V20.9795H107.912V21.3486C107.912 24.4863 109.901 26.6396 112.957 26.6396C115.151 26.6396 116.833 25.5527 117.387 23.8711ZM146.139 16.7959H140.581C140.232 14.4785 138.694 12.8379 136.233 12.8379C133.28 12.8379 131.435 15.3398 131.435 19.585C131.435 23.9121 133.28 26.373 136.254 26.373C138.653 26.373 140.212 24.9375 140.581 22.5381H146.159C145.852 27.7266 141.976 31.0693 136.192 31.0693C129.568 31.0693 125.364 26.7627 125.364 19.585C125.364 12.5303 129.568 8.1416 136.151 8.1416C142.099 8.1416 145.872 11.8125 146.139 16.7959ZM150.65 3.54785H156.639V8.61328H160.699V13.125H156.639V23.6455C156.639 25.3271 157.459 26.127 159.223 26.127C159.756 26.127 160.31 26.0859 160.679 26.0244V30.4336C160.063 30.5771 159.038 30.6797 157.828 30.6797C152.66 30.6797 150.65 28.957 150.65 24.6709V13.125H147.554V8.61328H150.65V3.54785ZM190.538 10.377L184.919 30.5977H179.074L171.24 1.00488H177.659L182.314 22.4355H182.479L188.016 1.00488H193.245L198.782 22.4355H198.946L203.622 1.00488H210.041L202.187 30.5977H196.342L190.723 10.377H190.538ZM212.974 30.5977V8.61328H218.962V30.5977H212.974ZM215.968 6.19336C214.163 6.19336 212.769 4.81934 212.769 3.09668C212.769 1.35352 214.163 0 215.968 0C217.772 0 219.167 1.35352 219.167 3.09668C219.167 4.81934 217.772 6.19336 215.968 6.19336ZM224.561 3.54785H230.549V8.61328H234.609V13.125H230.549V23.6455C230.549 25.3271 231.369 26.127 233.133 26.127C233.666 26.127 234.22 26.0859 234.589 26.0244V30.4336C233.974 30.5771 232.948 30.6797 231.738 30.6797C226.57 30.6797 224.561 28.957 224.561 24.6709V13.125H221.464V8.61328H224.561V3.54785ZM238.034 30.5977V1.00488H243.92V12.5303H244.043C245.212 9.76172 247.611 8.20312 250.954 8.20312C255.835 8.20312 258.624 11.3613 258.624 16.4473V30.5977H252.636V17.7188C252.636 14.8887 251.241 13.166 248.514 13.166C245.684 13.166 244.022 15.1553 244.022 18.0469V30.5977H238.034ZM284.648 0.492188C293.405 0.492188 298.922 6.37793 298.922 15.8115C298.922 25.2246 293.405 31.1104 284.648 31.1104C275.871 31.1104 270.375 25.2246 270.375 15.8115C270.375 6.37793 275.871 0.492188 284.648 0.492188ZM284.648 5.66016C279.809 5.66016 276.691 9.59766 276.691 15.8115C276.691 22.0049 279.788 25.9219 284.648 25.9219C289.488 25.9219 292.585 22.0049 292.585 15.8115C292.585 9.59766 289.488 5.66016 284.648 5.66016ZM322.711 8.61328V30.5977H316.928V26.6396H316.805C315.718 29.4082 313.544 31.0078 310.222 31.0078C305.464 31.0078 302.306 27.9111 302.306 22.7842V8.61328H308.294V21.5332C308.294 24.4658 309.75 26.0244 312.396 26.0244C315.062 26.0244 316.723 24.1172 316.723 21.2051V8.61328H322.711ZM326.607 30.5977V8.61328H332.391V12.5713H332.514C333.293 9.78223 335.159 8.26465 337.743 8.26465C338.44 8.26465 339.035 8.36719 339.445 8.49023V13.7607C338.953 13.5557 338.133 13.4121 337.271 13.4121C334.318 13.4121 332.596 15.2168 332.596 18.3135V30.5977H326.607Z" fill="#D2D2D2" />
                                </g>
                                <defs>
                                    <filter id="filter0_i_7_25224" x="0" y="0" width="339.445" height="32.1104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7_25224" />
                                    </filter>
                                </defs>
                            </svg>

                            <span className="text-[#0f172a]">Next Gen </span>
                            <span className="inline-flex items-center justify-center rounded-lg align-middle mx-1 rotate-3">
                                <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_9_25359)">
                                        <g clip-path="url(#clip0_9_25359)">
                                            <path d="M28.9576 0.520942L5.41316 6.82966C4.41252 7.09778 3.81922 8.12541 4.08734 9.12605L10.3961 32.6705C10.6642 33.6711 11.6918 34.2644 12.6924 33.9963L36.2369 27.6876C37.2375 27.4195 37.8308 26.3918 37.5627 25.3912L31.254 1.84677C30.9859 0.846128 29.9582 0.252821 28.9576 0.520942Z" fill="#1D7612" />
                                            <path d="M27.5314 0.903103L5.29997 6.85998C4.85154 6.98364 4.46977 7.27878 4.23718 7.68163C4.0046 8.08448 3.93988 8.56267 4.05701 9.01286L9.99569 31.1763C10.2446 32.1142 11.2062 32.6694 12.144 32.4205L34.3573 26.4685C35.2952 26.2196 35.8504 25.258 35.6015 24.3201L29.6616 2.15213C29.4363 1.2298 28.5035 0.664457 27.5812 0.889758L27.5314 0.903103Z" fill="#41A834" />
                                            <path opacity="0.3" d="M12.2241 7.16427C12.0846 6.64357 11.6799 6.58216 9.6153 7.20815C7.8903 7.74316 7.08462 8.17742 6.73377 8.95083C6.38293 9.72424 6.59286 11.051 6.98271 12.5966C7.27389 13.6832 7.54686 14.702 8.11283 14.5503C8.88255 14.3441 8.40333 12.5556 8.77032 11.3896C9.46507 9.09249 12.4061 7.84343 12.2241 7.16427Z" fill="#FAFAFA" />
                                            <g clip-path="url(#clip1_9_25359)">
                                                <path d="M28.3345 21.2762C26.8088 21.8442 25.1776 22.0729 23.4409 21.9624C21.7042 21.8518 19.9983 21.4132 18.3231 20.6466C16.6479 19.88 15.2008 18.8761 13.9816 17.6351C12.7624 16.3941 11.8684 15.0106 11.2997 13.4845C11.2179 13.2648 11.223 13.0545 11.3149 12.8535C11.4069 12.6525 11.5627 12.5111 11.7824 12.4293L14.7484 11.325C14.9192 11.2614 15.0935 11.2627 15.271 11.3289C15.4485 11.3951 15.5789 11.5028 15.6622 11.6519L17.0925 14.0378C17.1897 14.224 17.2449 14.3911 17.2583 14.539C17.2717 14.6869 17.2477 14.8278 17.1864 14.9618L16.0785 17.4173C16.4907 17.778 16.9429 18.1063 17.435 18.4023C17.9271 18.6983 18.4476 18.9667 18.9965 19.2077C19.5157 19.4452 20.0431 19.6485 20.5786 19.8177C21.1141 19.9869 21.6637 20.1192 22.2273 20.2145L23.3076 17.8528C23.3765 17.702 23.4894 17.5663 23.6463 17.4456C23.8032 17.325 23.9712 17.2449 24.1505 17.2054L26.868 16.7773C27.057 16.7625 27.2304 16.7989 27.388 16.8864C27.5457 16.9739 27.654 17.0967 27.7129 17.2549L28.8171 20.2209C28.8989 20.4406 28.8939 20.651 28.8019 20.852C28.71 21.053 28.5542 21.1944 28.3345 21.2762Z" fill="white" />
                                            </g>
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_9_25359" x="-0.414307" y="0" width="42.5017" height="43.4976" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="5" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_25359" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_25359" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_9_25359">
                                            <rect x="3.58569" y="7.2915" width="28.1718" height="28.1657" rx="2" transform="rotate(-15 3.58569 7.2915)" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_9_25359">
                                            <rect width="18.7548" height="18.7548" fill="white" transform="translate(7.99841 11.3364) rotate(-20.4208)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </span>
                            <span className="text-[#0f172a]"> Tech</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#616161]  text-sm lg:text-base font-medium tracking-[0.02em] text-justify mb-10 leading-tight max-w-sm"
                        >
                            At Ellipza Technologies, our strength lies in the diversity and expertise of our team. We bring together a group of dedicated professionals with a shared passion for innovation and a commitment to delivering exceptional results.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                        >
                            <div className=" items-center gap-5 hidden md:flex">
                                <div className="flex items-center gap-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#1D1D1B" />
                                        <path d="M13 7.99999C15.103 7.99999 16 8.89699 16 11H18C18 7.77499 16.225 5.99999 13 5.99999V7.99999ZM16.422 13.443C16.2299 13.2683 15.9774 13.1752 15.7178 13.1832C15.4583 13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.71204 14.287C8.52004 13.094 8.15904 11.933 8.05204 11.361L10.511 8.96699C10.6975 8.78612 10.8062 8.53982 10.8142 8.2802C10.8222 8.02059 10.7289 7.76804 10.554 7.57599L6.85904 3.51299C6.68408 3.32035 6.44092 3.2035 6.18119 3.18725C5.92146 3.17101 5.66564 3.25665 5.46804 3.42599L3.29804 5.28699C3.12515 5.46051 3.02196 5.69145 3.00804 5.93599C2.99304 6.18599 2.70704 12.108 7.29904 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3086 20.9783 18.5394 20.8747 18.712 20.701L20.572 18.53C20.7415 18.3325 20.8273 18.0768 20.8113 17.817C20.7952 17.5573 20.6785 17.3141 20.486 17.139L16.422 13.443Z" fill="#1D1D1B" />
                                    </svg>

                                    <span className="text-[#1D1D1B] font-normal text-[16px]">+94 717 083 004</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#1D1D1B" />
                                    </svg>

                                    <span className="text-[#1D1D1B] font-normal text-[16px]">ellipza@gmail.com</span>
                                </div>
                            </div>

                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-4 mt-8 "
                        >
                            {['facebook', 'linkedin'].map((social) => (
                                <a
                                    key={social}
                                    href={social === 'facebook' ? 'https://www.facebook.com/share/1C9vkqFKVS/' : 'https://www.linkedin.com/company/ellipza-technologies/'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full text-white hidden md:flex items-center justify-center cursor-pointer transition-colors shadow-md"
                                >
                                    {social === 'facebook' && (
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="#8E24AA" />
                                            <path d="M24.5 15C24.5 10.05 20.45 6 15.5 6C10.55 6 6.5 10.05 6.5 15C6.5 19.5 9.7625 23.2125 14.0375 23.8875V17.5875H11.7875V15H14.0375V12.975C14.0375 10.725 15.3875 9.4875 17.4125 9.4875C18.425 9.4875 19.4375 9.7125 19.4375 9.7125V11.9625H18.3125C17.1875 11.9625 16.85 12.6375 16.85 13.3125V15H19.325L18.875 17.5875H16.7375V24C21.2375 23.325 24.5 19.5 24.5 15Z" fill="white" />
                                        </svg>
                                    )}
                                    {social === 'linkedin' && (
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="#8E24AA" />
                                            <path d="M11.25 13.125H8.75V21.25H11.25V13.125ZM10 8.75C9.17157 8.75 8.5 9.42157 8.5 10.25C8.5 11.0784 9.17157 11.75 10 11.75C10.8284 11.75 11.5 11.0784 11.5 10.25C11.5 9.42157 10.8284 8.75 10 8.75ZM21.5 16.75C21.5 14.6716 20.3113 13.125 18.375 13.125C17.3438 13.125 16.75 13.6719 16.5 14.0625V13.125H14V21.25H16.5V17C16.5 15.9688 16.6875 15.0625 17.9375 15.0625C19.1719 15.0625 19.1875 16.2188 19.1875 17.0625V21.25H21.5V16.75Z" fill="white" />
                                        </svg>
                                    )}
                                </a>
                            ))}

                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-3/5"
                    >
                        <form className="space-y-10" onSubmit={handleSubmit}>
                            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-[16px] font-bold text-gray-900 mb-2">First Name</label>
                                    <input type="text" name="firstName" placeholder="John" required maxLength={80} autoComplete="given-name" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-[16px] font-bold text-gray-900 mb-2">Last Name</label>
                                    <input type="text" name="lastName" placeholder="Doe" required maxLength={80} autoComplete="family-name" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-[16px] font-bold text-gray-900 mb-2">Email</label>
                                    <input type="email" name="email" placeholder="Email" required maxLength={254} autoComplete="email" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-[16px] font-bold text-gray-900 mb-2">Phone Number</label>
                                    <input type="tel" name="phone" placeholder="+94 717 083 004" maxLength={30} autoComplete="tel" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                            </div>

                            {/* Radio Group */}
                            <div>
                                <label className="block text-[16px] font-bold text-gray-900 mb-4">What service you want?</label>
                                <div className="flex flex-wrap gap-6 text-[16px]">
                                    {['Web Development', 'Mobile App', 'AI Solutions', 'Digital Marketing', 'Other'].map((service, idx) => (
                                        <label key={service} className="flex items-center gap-2 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input
                                                    type="radio"
                                                    name="service"
                                                    value={service}
                                                    defaultChecked={idx === 0}
                                                    className="peer sr-only"
                                                />
                                                <div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:bg-black peer-checked:border-black transition-all"></div>
                                                {/* Checkmark specific to image? Standard radio dot usually fine, but image shows 'tick'. */}
                                                <svg className="w-2.5 h-2.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <span className="text-gray-500 font-medium group-hover:text-black transition-colors peer-checked:text-black">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                <label className="block text-[16px] font-bold text-gray-900 mb-2">Message</label>
                                <textarea name="message" placeholder="Write your message.." rows={1} required maxLength={5000} className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 resize-none py-1"></textarea>
                            </div>

                            <div className="flex flex-col items-center gap-3 pt-4 md:items-end">
                                <button type="submit" disabled={submitState === "sending"} className="px-8 py-3 rounded-full bg-[#3b82f6] text-white font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0">
                                    {submitState === "sending" ? <LoaderCircle size={16} className="animate-spin" /> : <Send size={16} />}
                                    <span className="text-[16px]">{submitState === "sending" ? "Sending..." : "Send Message"}</span>
                                </button>
                                <p role="status" aria-live="polite" className={`min-h-5 text-sm ${submitState === "error" ? "text-red-600" : "text-green-700"}`}>
                                    {feedback}
                                </p>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
