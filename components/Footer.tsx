"use client";

import { Facebook, Instagram, Send, Twitter } from "lucide-react";
import logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-10 gap-x-4 md:gap-12 mb-10">
          {/* Brand Column (Span 2 mobile, 5 desktop) */}
          <div className="col-span-2 md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* Logo Icon (Infinity Loop approx) */}
              <img
                src={logo.src}
                alt="Ellipza Logo"
                className="h-[72px] w-auto"
              />
            </div>

            <p className="text-[#848484] text-[16px]  font-medium leading-relaxed ">
              The first free end-to-end analytics service for the site, designed
              to work with enterprises of various levels and business segments.
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">
                  More about us
                </span>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
              </div>

              <div className="flex flex-wrap gap-3 max-w-[200px]">
                {/* Top Row */}
                <div className="flex gap-3 w-full">
                  <div
                    className="w-8 h-8 rounded-full bg-gray-300/50 flex items-center justify-center text-gray-600 hover:bg-gray-400/50 transition-colors cursor-pointer"
                    onClick={() =>
                      (window.location.href =
                        "https://www.facebook.com/share/1C9vkqFKVS/")
                    }
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="20" fill="#D0D0D0" />
                      <path
                        d="M29 20C29 15.05 24.95 11 20 11C15.05 11 11 15.05 11 20C11 24.5 14.2625 28.2125 18.5375 28.8875V22.5875H16.2875V20H18.5375V17.975C18.5375 15.725 19.8875 14.4875 21.9125 14.4875C22.925 14.4875 23.9375 14.7125 23.9375 14.7125V16.9625H22.8125C21.6875 16.9625 21.35 17.6375 21.35 18.3125V20H23.825L23.375 22.5875H21.2375V29C25.7375 28.325 29 24.5 29 20Z"
                        fill="#0C1518"
                      />
                    </svg>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full bg-gray-300/50 flex items-center justify-center text-gray-600 hover:bg-gray-400/50 transition-colors cursor-pointer"
                    onClick={() =>
                      (window.location.href =
                        "https://www.linkedin.com/company/ellipza-technologies/")
                    }
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="20" fill="#D0D0D0" />
                      <path
                        d="M15.5 17H12.5V27H15.5V17ZM14 12.5C13.0335 12.5 12.25 13.2835 12.25 14.25C12.25 15.2165 13.0335 16 14 16C14.9665 16 15.75 15.2165 15.75 14.25C15.75 13.2835 14.9665 12.5 14 12.5ZM27.5 21.5C27.5 18.9625 26.0375 17 23.5 17C22.2125 17 21.35 17.7 21 18.35V17H18V27H21V21.75C21 20.375 21.2875 19.25 22.9875 19.25C24.6625 19.25 24.6875 20.8125 24.6875 21.8375V27H27.5V21.5Z"
                        fill="#0C1518"
                      />
                    </svg>
                  </div>
                </div>
                {/* Bottom Row */}
              </div>
            </div>
          </div>

          {/* Spacer (Hidden on mobile) */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Info Column (Span 1 mobile, 2 desktop) */}
          <div className="col-span-1 md:col-span-2 pt-2">
            <h4 className="text-[#0f172a] font-bold uppercase mb-6 tracking-wide text-[16px]">
              INFO
            </h4>
            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Services",
                "Why Ellipza ?",
                "Our Works",
                "Pricing",
                "Contact Us",
              ].map((item) => {
                const hrefs: { [key: string]: string } = {
                  Home: "/#home",
                  "About Us": "/#about",
                  Services: "/#solution",
                  "Why Ellipza ?": "/#why-us",
                  "Our Works": "/our-works",
                  Pricing: "/#pricing",
                  "Contact Us": "/#contact",
                };
                return (
                  <li key={item}>
                    <a
                      href={hrefs[item] || "#"}
                      className="text-gray-400 text-[16px] font-semibold hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Column (Span 1 mobile, 3 desktop) */}
          <div className="col-span-1 md:col-span-3 pt-2 pl-4 md:pl-0">
            <h4 className="text-[#0f172a] font-bold uppercase mb-6 tracking-wide text-[16px]">
              CONTACT US
            </h4>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-gray-400 text-[16px] font-semibold">
                  +61 451 887 543
                </p>
                <p className="text-gray-400 text-[16px] font-semibold">
                  ellipza@gmail.com
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[#0f172a] font-bold uppercase mb-2 tracking-wide text-[16px]">
                  LOCATION
                </h4>
                <p className="text-gray-400 text-[16px] font-semibold leading-relaxed">
                  Jacqui Avenue,<br/> Schofields, NSW 2762
                  <br/>Australia
                  <br/>
                  <br/>
                  
                </p>
                <p className="text-gray-400 text-[16px] font-semibold leading-relaxed">
                  +94 717 083 004<br/>
                  40, Henry pamunuwa mw, <br/>Pamunuwa Road, Maharagama
                  <br />
                  Sri Lanka
                </p>
              </div>

              <div className="flex gap-3 pt-1">
                {/* Flags */}
                
                <div className="w-8 h-5 bg-[#00008B] rounded-sm shadow-sm relative overflow-hidden flex items-center justify-center select-none">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 72 36"
                    fill="none"
                    xmlns="http://w3.org"
                  >
                    {/* Flag Background Canvas */}
                    <rect width="72" height="36" fill="#00008B" />

                    {/* --- UNION JACK (Top Left Quarter) --- */}
                    <g id="union-jack">
                      {/* White Diagonals */}
                      <path
                        d="M0 0L36 18M0 18L36 0"
                        stroke="#FFFFFF"
                        strokeWidth="4"
                      />
                      {/* Red Diagonals */}
                      <path
                        d="M0 0L18 9M36 18L18 9M0 18L18 9M36 0L18 9"
                        stroke="#D52B1E"
                        strokeWidth="1.5"
                      />
                      {/* White Cross */}
                      <path
                        d="M18 0V18M0 9H36"
                        stroke="#FFFFFF"
                        strokeWidth="6"
                      />
                      {/* Red Cross */}
                      <path
                        d="M18 0V18M0 9H36"
                        stroke="#D52B1E"
                        strokeWidth="3.5"
                      />
                    </g>

                    {/* --- STARS --- */}
                    {/* Large 7-Pointed Commonwealth Star (Centred below Union Jack) */}
                    <path
                      d="M 18,23.5 L 19.1,25.6 L 21.5,24.7 L 20.2,27 L 22.2,29 L 19.8,29 L 18,31.5 L 16.2,29 L 13.8,29 L 15.8,27 L 14.5,24.7 L 16.9,25.6 Z"
                      fill="#FFFFFF"
                    />

                    {/* Southern Cross: Gamma Crucis (Top Star - 7 Points) */}
                    <path
                      d="M 54,6 L 54.4,7 L 55.4,6.6 L 54.9,7.7 L 55.7,8.5 L 54.6,8.5 L 54,9.5 L 53.4,8.5 L 52.3,8.5 L 53.1,7.7 L 52.6,6.6 L 53.6,7 L Z"
                      fill="#FFFFFF"
                    />

                    {/* Southern Cross: Delta Crucis (Right Star - 7 Points) */}
                    <path
                      d="M 64,15 L 64.4,16 L 65.4,15.6 L 64.9,16.7 L 65.7,17.5 L 64.6,17.5 L 64,18.5 L 63.4,17.5 L 62.3,17.5 L 63.1,16.7 L 62.6,15.6 L 63.6,16 L Z"
                      fill="#FFFFFF"
                    />

                    {/* Southern Cross: Beta Crucis (Left Star - 7 Points) */}
                    <path
                      d="M 44,15 L 44.4,16 L 45.4,15.6 L 44.9,16.7 L 45.7,17.5 L 44.6,17.5 L 44,18.5 L 43.4,17.5 L 42.3,17.5 L 43.1,16.7 L 42.6,15.6 L 43.6,16 L Z"
                      fill="#FFFFFF"
                    />

                    {/* Southern Cross: Alpha Crucis (Bottom Star - 7 Points) */}
                    <path
                      d="M 54,27 L 54.4,28 L 55.4,27.6 L 54.9,28.7 L 55.7,29.5 L 54.6,29.5 L 54,30.5 L 53.4,29.5 L 52.3,29.5 L 53.1,28.7 L 52.6,27.6 L 53.6,28 L Z"
                      fill="#FFFFFF"
                    />

                    {/* Southern Cross: Epsilon Crucis (Small Star - 5 Points) */}
                    <polygon
                      points="57.5,20.5 57.8,21.3 58.6,21.3 58,21.8 58.2,22.6 57.5,22.1 56.8,22.6 57,21.8 56.4,21.3 57.2,21.3"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>
                <div className="w-8 h-5 bg-yellow-400 rounded-sm shadow-sm relative overflow-hidden flex items-center justify-center">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36 27C36 28.0609 35.5786 29.0783 34.8284 29.8284C34.0783 30.5786 33.0609 31 32 31H4C2.93913 31 1.92172 30.5786 1.17157 29.8284C0.421427 29.0783 0 28.0609 0 27V9C0 7.93913 0.421427 6.92172 1.17157 6.17157C1.92172 5.42143 2.93913 5 4 5H32C33.0609 5 34.0783 5.42143 34.8284 6.17157C35.5786 6.92172 36 7.93913 36 9V27Z"
                      fill="#FFB700"
                    />
                    <path
                      d="M32 6H10V30H32C33.654 30 35 28.654 35 27V9C35 7.346 33.654 6 32 6Z"
                      fill="#8D2129"
                    />
                    <path
                      d="M4 6C2.346 6 1 7.346 1 9V27C1 28.654 2.346 30 4 30H5V6H4Z"
                      fill="#005641"
                    />
                    <path d="M5 6H9V30H5V6Z" fill="#FF5B00" />
                    <path
                      d="M13.199 10.062C13.199 10.062 13.132 9.10302 13.164 8.30002C13.185 7.76802 12.887 7.12502 12.324 7.21802C11.761 7.31102 11.136 7.19702 11.136 7.19702C11.136 7.19702 11.261 7.56102 11.136 7.90502C11.011 8.24902 11.011 8.96702 11.855 9.06102C12.699 9.15602 13.043 9.59302 13.199 10.062ZM31.883 10.062C31.883 10.062 31.95 9.10302 31.918 8.30002C31.897 7.76802 32.195 7.12502 32.758 7.21802C33.321 7.31102 33.946 7.19702 33.946 7.19702C33.946 7.19702 33.821 7.56102 33.946 7.90502C34.071 8.24902 34.071 8.96702 33.227 9.06102C32.383 9.15602 32.039 9.59302 31.883 10.062ZM13.199 25.938C13.199 25.938 13.132 26.898 13.164 27.701C13.185 28.233 12.887 28.876 12.324 28.782C11.761 28.688 11.136 28.803 11.136 28.803C11.136 28.803 11.261 28.438 11.136 28.094C11.011 27.75 11.011 27.032 11.855 26.938C12.699 26.844 13.043 26.406 13.199 25.938ZM31.883 25.938C31.883 25.938 31.95 26.898 31.918 27.701C31.897 28.233 32.195 28.876 32.758 28.782C33.321 28.688 33.946 28.803 33.946 28.803C33.946 28.803 33.821 28.438 33.946 28.094C34.071 27.75 34.071 27.032 33.227 26.938C32.383 26.844 32.039 26.406 31.883 25.938ZM18.406 13.375C18.406 13.375 19 13.344 19.594 13.187C20.188 13.031 20 12.469 20 12.469C20 12.469 20.531 12.188 20.844 12.469C21.157 12.75 21.532 12.719 21.344 12.344C21.906 12.063 22.156 12.688 22.156 12.688C22.156 12.688 22.437 12.511 22.5 12.271C23 12.219 23.094 12.719 23.406 12.656C23.718 12.593 23.937 12.267 23.937 12.267C23.937 12.267 23.999 13.156 23.468 13.375C23.906 13.937 23.78 15.031 23.78 15.313L23.468 15.125C23.468 15.125 23.656 16 23.749 16.125C23.842 16.25 23.437 16.125 23.437 16.125C23.437 16.125 23.656 16.719 23.812 16.813C23.968 16.907 26.906 16.625 27.75 16.625C28.594 16.625 29.75 16.5 29.75 15.75C29.75 15 28.781 15.062 27.688 15.219C26.594 15.375 25.876 15.344 25.438 15.063C25 14.782 24.501 14.709 24.542 15.417C23.875 15.105 24.354 14.438 24.354 14.438C24.354 14.438 23.593 13.605 24.078 12.771C24.562 11.938 26.437 11.687 27.75 12.417C29.063 13.147 29.583 13.75 30.125 13.855C30.104 13.459 30.771 13.168 30.854 13.897C30.937 14.626 30.02 14.48 29.625 14.251C29.23 14.022 28.521 13.334 28.521 13.334C28.521 13.334 28.5 13.751 28.771 14.022C28.021 13.939 27.855 13.376 27.855 13.376C27.855 13.376 27.812 13.979 27.125 14C27.625 13.417 27.458 12.938 26.771 12.688C27.167 13.292 26.792 13.813 26.209 13.896C26.605 13.334 26.272 12.688 25.543 12.563C25.647 13.021 25.293 13.146 25.293 13.146C25.293 13.146 25.127 12.729 24.793 12.958C24.459 13.187 24.375 13.688 24.812 14C25.083 13.458 25.624 13.5 25.812 13.729C25.25 13.791 25.271 14.313 25.479 14.583C25.687 14.229 25.896 14.125 26.104 14.5C26.312 14.875 26.937 14.854 28.062 14.688C29.187 14.522 30.223 14.644 30.395 15.646C30.541 16.5 29.687 16.917 29.687 16.917C29.687 16.917 30.791 17.75 30.083 19.563C29.375 21.376 29.667 22.125 29.937 22.313C30.207 22.501 30.625 22.521 30.062 23.021C29.499 23.521 29.645 23.876 29.874 24.167C30.103 24.458 30.041 24.75 29.374 24.375C29.082 24.667 28.791 24.583 28.624 24.333C28.457 24.562 28.145 24.625 27.936 24.375C27.728 24.542 27.457 24.542 27.603 24.187C27.749 23.832 28.457 23.687 28.665 23.625C28.873 23.563 28.853 23.187 28.79 22.771C28.727 22.355 28.373 21.917 27.623 21.521C27.29 21.771 27.331 22.062 27.456 22.209C27.581 22.356 27.977 22.397 27.998 22.521C28.019 22.645 27.79 22.917 27.54 23.105C27.29 23.293 27.332 23.626 27.415 23.793C27.498 23.96 27.602 24.37 27.331 24.561C27.06 24.751 26.79 24.314 26.79 24.314C26.79 24.314 26.622 24.835 26.144 24.335C25.873 24.669 25.603 24.544 25.478 24.356C25.207 24.627 24.79 24.606 24.999 24.231C25.208 23.856 25.457 23.855 25.749 23.835C26.041 23.815 26.436 23.753 26.395 23.169C26.354 22.585 26.239 21.992 25.833 21.627C25.208 21.065 25.312 20.398 25.312 20.398C25.312 20.398 24.27 20.294 23.458 20.857C22.646 21.42 22.02 21.419 22.02 21.419C22.02 21.419 21.561 21.919 21.52 22.231C21.479 22.543 21.666 22.648 21.916 22.731C22.166 22.814 22.354 22.793 21.978 23.127C21.602 23.461 21.29 23.439 21.29 23.439C21.29 23.439 21.271 23.792 21.312 24C21.353 24.208 21.228 24.569 21.02 24.607C20.812 24.645 20.499 24.375 20.499 24.375C20.499 24.375 20.103 24.792 19.791 24.354C19.437 24.687 19.124 24.563 18.999 24.354C18.791 24.687 18.457 24.542 18.666 24.166C18.875 23.79 19.166 23.748 19.666 23.77C20.166 23.792 20.582 23.395 20.395 22.874C20.208 22.353 20.041 21.645 20.041 21.645C20.041 21.645 19.645 21.603 19.062 21.27C18.333 22.145 18.083 21.833 17.874 21.666C17.665 21.499 17.166 21.041 17.166 21.041C17.166 21.041 16.895 21.02 16.937 21.27C16.645 21.249 16.749 20.791 16.749 20.562C16.749 20.333 16.666 20.062 16.499 20.062C16.332 20.062 16.082 20.104 16.082 20.104C16.082 20.104 16.082 20.186 16.332 20.27C16.582 20.354 16.561 20.521 16.311 20.541C16.061 20.561 15.894 20.623 16.082 20.77C16.27 20.917 16.29 20.999 16.144 21.145C15.998 21.291 16.019 21.686 16.269 21.833C16.436 21.437 16.748 21.667 16.686 21.937C16.624 22.207 16.165 22.166 16.165 22.166L16.477 22.52L16.001 22.624C16.001 22.624 15.977 22.916 15.79 22.978C15.603 23.04 15.561 22.54 15.561 22.54L15.123 22.519L15.415 22.165C15.415 22.165 14.998 22.019 14.977 21.769C14.956 21.519 15.289 21.644 15.352 21.769C15.685 21.623 15.581 21.29 15.456 21.165C15.331 21.04 15.414 20.936 15.539 20.79C15.664 20.644 15.643 20.561 15.456 20.602C15.269 20.643 14.956 20.268 15.268 20.268C15.58 20.268 15.643 20.247 15.601 20.018C15.226 19.977 15.455 19.685 15.455 19.685C15.455 19.685 15.163 19.476 15.372 19.331C15.184 19.165 15.143 18.893 15.351 18.852C15.226 18.748 15.393 18.56 15.393 18.56C15.393 18.56 14.792 18.458 14.792 18C14.792 17.542 15.313 17.625 15.313 17.625C15.313 17.625 15.251 16.167 15.396 14.125C15.541 12.083 16.396 11.375 16.917 11.167C16.375 12.313 16.438 14.25 16.438 15.438C16.438 16.626 16.417 17.563 16.417 17.563C16.417 17.563 17 17.604 16.958 18C16.916 18.396 16.646 18.479 16.646 18.479L18 19.833C18 19.833 17.938 18.444 18.396 17.889C18.854 17.334 19.562 16.813 19.771 16.646C19.98 16.479 19.642 16.037 19.48 16.521C19.244 16.492 19.042 16.104 19.042 16.104C19.042 16.104 19.063 16.25 18.917 16.354C18.771 16.458 18.813 16 18.729 16.042C18.645 16.084 18.417 16.209 18.125 16.292C18.146 16.125 18.271 15.917 18.271 15.917C18.271 15.917 17.896 15.958 17.562 16C17.562 15.708 17.749 15.229 17.916 15.188C17.499 14.98 17.604 14.584 17.791 14.646C17.978 14.708 18.853 15.229 19.833 15.292C19.521 14.938 19.271 14.48 19.271 14.48L19.167 14.834L18.792 14.48L18.75 14.834C18.75 14.834 17.833 14.167 17.667 13.626C17.501 13.085 17.688 12.687 18 12.73C18.604 12.812 18.406 13.375 18.406 13.375Z"
                      fill="#FFB700"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Watermark (Block) */}
        <div className="w-full flex justify-center items-center opacity-[0.04] select-none pointer-events-none mt-10 mb-4">
          <h1 className="text-[15vw] md:text-[180px] lg:text-[282px] font-bold text-black tracking-tighter leading-none text-center nico">
            Ellipza
          </h1>
        </div>

        {/* Bottom Rights */}
        <div className="flex flex-row justify-between items-center pt-8 text-[9px] md:text-[12px] text-gray-500 font-semibold tracking-wider uppercase w-full">
          <span>ELLIPZA TECHNOLOGIES (PVT) LTD</span>
          <span className="hidden md:inline">ALL RIGHTS RESERVED</span>
          <span>© 2025 — COPYRIGHT</span>
        </div>
      </div>
    </footer>
  );
}
