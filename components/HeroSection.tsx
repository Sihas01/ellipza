"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import image from "../public/Group.png"

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-transparent overflow-hidden isolate font-sans">
      <div className="container mx-auto px-6 md:px-16 lg:px-20">

        {/* Header Content */}
        <div className="text-center max-w-5xl mx-auto mb-16 relative z-10">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex p-[1px] rounded-full bg-gradient-to-r from-[#7D43A2] to-[#5393DF] mb-8 shadow-sm"
          >
           
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-[#0f172a] mb-6 leading-[74px] letter-spacing-[-0.02em]"
          >
            The Most Powerful Way To <br />
            Ship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D43A2] to-[#5393DF]">Scalable Software</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#616161] mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Ellipza Technologies crafts high-quality, tailored IT solutions. We blend
            advanced software and AI with secure networking and digital marketing
            to turn complex ideas into impactful results.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0f172a] text-white font-medium hover:bg-gray-800 transition-all hover:gap-3 cursor-pointer" onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}>
              Get Started <ArrowRight size={18}  />
            </button>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto">



          {/* Re-doing the grid to match 5-column layout estimation */}
          <div className="flex flex-col gap-4">
            {/* Top Row: AI (1), Metrics (2), Security (1), Modern (1) */}
            {/* Top Row: AI (1), Metrics (2), Security (1), Modern (1) */}
            {/* Top Row: AI (1), Metrics (2), Security (1), Modern (1) */}
            <div className="grid grid-cols-5 md:grid-cols-5 gap-2 md:gap-4 h-auto md:h-64">
              <motion.div className="col-span-2 md:col-span-1 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px]">
                <img src="/hero-ai.jpg" alt="AI Solutions" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">AI Solutions</h3>
                  <p className="text-white text-[10px] font-normal md:text-xs leading-snug">Smart AI for real-world problems.</p>
                </div>
              </motion.div>

              <motion.div className="col-span-3 md:col-span-2 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px]">
                <img src="/hero-metrics.jpg" alt="Real Time Metrics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-lg mb-1">Real-Time Deployment Metrics</h3>
                    <p className="text-white font-normal text-[10px] md:text-xs leading-snug">Monitor systems in real time.</p>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full  flex items-center justify-center backdrop-blur-sm shrink-0 ml-2">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="37" height="37" rx="18.5" fill="white" fill-opacity="0.5" />
                      <path d="M13.8224 12.3705C13.7556 12.3024 13.6761 12.2481 13.5883 12.2108C13.5006 12.1734 13.4063 12.1537 13.311 12.1527C13.2156 12.1518 13.121 12.1697 13.0325 12.2053C12.944 12.241 12.8635 12.2937 12.7954 12.3605C12.0256 13.1263 11.4149 14.0368 10.9985 15.0396C10.5821 16.0424 10.3683 17.1177 10.3694 18.2035C10.3683 19.331 10.5988 20.4468 11.0468 21.4815C11.4947 22.5162 12.1505 23.4478 12.9734 24.2185C13.1119 24.3466 13.2949 24.4156 13.4835 24.4109C13.672 24.4063 13.8514 24.3283 13.9834 24.1935C14.2994 23.8775 14.2604 23.3745 13.9564 23.0835C13.2959 22.4541 12.7703 21.6969 12.4115 20.858C12.0527 20.0191 11.8683 19.1159 11.8694 18.2035C11.8694 16.3575 12.6104 14.6835 13.8124 13.4655C14.1024 13.1705 14.1324 12.6805 13.8224 12.3705ZM15.5834 14.1335C15.4517 13.998 15.2716 13.9202 15.0827 13.9172C14.8938 13.9143 14.7113 13.9863 14.5754 14.1175C14.0342 14.6514 13.6047 15.2876 13.3118 15.9891C13.0189 16.6906 12.8685 17.4434 12.8694 18.2035C12.8694 19.8955 13.5994 21.4165 14.7624 22.4685C14.8998 22.5897 15.0785 22.6533 15.2615 22.6462C15.4445 22.6391 15.6178 22.5619 15.7454 22.4305C16.0734 22.1025 16.0124 21.5865 15.7044 21.2965C15.2823 20.8996 14.9461 20.4203 14.7165 19.8883C14.4869 19.3563 14.3688 18.783 14.3694 18.2035C14.3694 17.0535 14.8264 16.0095 15.5694 15.2435C15.8554 14.9495 15.9024 14.4515 15.5834 14.1335ZM21.1554 14.1325C21.2871 13.997 21.4671 13.9192 21.6561 13.9162C21.845 13.9133 22.0275 13.9853 22.1634 14.1165C22.7047 14.6505 23.1343 15.2869 23.4272 15.9886C23.7201 16.6902 23.8704 17.4432 23.8694 18.2035C23.8694 19.8955 23.1394 21.4165 21.9764 22.4685C21.839 22.5897 21.6603 22.6533 21.4773 22.6462C21.2943 22.6391 21.121 22.5619 20.9934 22.4305C20.6654 22.1025 20.7264 21.5865 21.0344 21.2965C21.4564 20.8996 21.7926 20.4203 22.0223 19.8883C22.2519 19.3563 22.37 18.783 22.3694 18.2035C22.3694 17.0535 21.9124 16.0095 21.1694 15.2435C20.8834 14.9495 20.8364 14.4505 21.1554 14.1325ZM22.9164 12.3705C22.9831 12.3024 23.0627 12.2481 23.1504 12.2108C23.2382 12.1734 23.3324 12.1537 23.4278 12.1527C23.5232 12.1518 23.6178 12.1697 23.7063 12.2053C23.7947 12.241 23.8753 12.2937 23.9434 12.3605C24.7132 13.1263 25.3239 14.0368 25.7403 15.0396C26.1566 16.0424 26.3705 17.1177 26.3694 18.2035C26.3705 19.331 26.14 20.4468 25.692 21.4815C25.2441 22.5162 24.5883 23.4478 23.7654 24.2185C23.6269 24.3466 23.4439 24.4156 23.2553 24.4109C23.0667 24.4063 22.8874 24.3283 22.7554 24.1935C22.4394 23.8775 22.4784 23.3745 22.7834 23.0835C23.4437 22.454 23.9691 21.6968 24.3277 20.8578C24.6863 20.0189 24.8706 19.1159 24.8694 18.2035C24.8694 16.3575 24.1284 14.6835 22.9264 13.4655C22.6364 13.1705 22.6064 12.6805 22.9164 12.3705ZM18.3694 16.7035C17.9716 16.7035 17.59 16.8616 17.3087 17.1429C17.0274 17.4242 16.8694 17.8057 16.8694 18.2035C16.8694 18.6014 17.0274 18.9829 17.3087 19.2642C17.59 19.5455 17.9716 19.7035 18.3694 19.7035C18.7672 19.7035 19.1487 19.5455 19.43 19.2642C19.7114 18.9829 19.8694 18.6014 19.8694 18.2035C19.8694 17.8057 19.7114 17.4242 19.43 17.1429C19.1487 16.8616 18.7672 16.7035 18.3694 16.7035Z" fill="#FF0A0A" />
                    </svg>

                  </div>
                </div>
              </motion.div>

              <motion.div className="col-span-3 md:col-span-1 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px]">
                <img src="/hero-security.jpg" alt="Enterprise Security" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">Enterprise Security</h3>
                  <p className="text-white font-normal text-[10px] md:text-xs leading-snug">Security built from day one.</p>
                </div>
              </motion.div>

              <motion.div className="col-span-2 md:col-span-1 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px]">
                <img src="/hero-modern.jpg" alt="Modern Look" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">Modern Look</h3>
                  <p className="text-white font-normal text-[10px] md:text-xs leading-snug">Clean, modern user experiences.</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row: API (1), Marketing (2), Remote (2) */}
            {/* Bottom Row: API (1), Marketing (2), Remote (2) */}
            <div className="grid grid-cols-5 md:grid-cols-5 gap-2 md:gap-4 h-auto md:h-64">
              <motion.div className="col-span-3 md:col-span-2 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px] order-2 md:order-none">
                <img src="/hero-api.jpg" alt="200+ API Ready" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">200+ API Ready</h3>
                  <p className="text-white font-normal text-[10px] md:text-xs leading-snug">Easy integrations. Built to scale.</p>
                </div>
              </motion.div>

              <motion.div className="col-span-2 md:col-span-1 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px] order-1 md:order-none">
                <img src="/hero-marketing.jpg" alt="Best Marketing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">Best Marketing</h3>
                  <p className="text-white font-normal text-[10px] md:text-xs leading-snug">Data-driven growth strategies.</p>
                </div>
              </motion.div>

              <motion.div className="col-span-5 md:col-span-2 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px] order-3 md:order-none">
                <img src="/hero-remote.jpg" alt="Remote first Culture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-lg mb-1">Remote first Culture</h3>
                    <p className="text-white font-normal text-[10px] md:text-xs leading-snug">Global team. Faster delivery.</p>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0 ml-2">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="37" height="37" rx="18.5" fill="white" fill-opacity="0.5" />
                      <path d="M21.7513 17.4382C22.4227 17.4382 23.0665 17.7049 23.5413 18.1796C24.016 18.6543 24.2827 19.2982 24.2827 19.9696V25.0325C24.2827 25.4983 23.903 25.8763 23.4364 25.8763H13.3131C13.0893 25.8763 12.8747 25.7874 12.7165 25.6292C12.5582 25.4709 12.4693 25.2563 12.4693 25.0325V19.9696C12.4693 19.2982 12.736 18.6543 13.2108 18.1796C13.6855 17.7049 14.3294 17.4382 15.0008 17.4382H21.7513ZM20.0636 20.8134H16.6884C16.4733 20.8137 16.2665 20.896 16.1101 21.0436C15.9537 21.1913 15.8596 21.3931 15.847 21.6078C15.8344 21.8225 15.9042 22.0339 16.0422 22.1988C16.1803 22.3637 16.3761 22.4697 16.5897 22.4951L16.6884 22.501H20.0636C20.2787 22.5008 20.4856 22.4185 20.642 22.2708C20.7984 22.1232 20.8925 21.9214 20.9051 21.7067C20.9177 21.492 20.8478 21.2806 20.7098 21.1156C20.5717 20.9507 20.3759 20.8447 20.1624 20.8193L20.0636 20.8134ZM18.376 14.0629C19.2705 14.0629 20.1033 14.3422 20.7868 14.819C20.9704 14.947 21.0957 15.1427 21.135 15.363C21.1743 15.5834 21.1245 15.8103 20.9965 15.994C20.8685 16.1776 20.6728 16.3028 20.4524 16.3422C20.232 16.3815 20.0051 16.3317 19.8215 16.2037C19.3972 15.9086 18.8928 15.7505 18.376 15.7505C17.8368 15.7505 17.3398 15.9176 16.9306 16.2037C16.8398 16.2697 16.7368 16.3171 16.6275 16.3428C16.5183 16.3686 16.405 16.3723 16.2943 16.3538C16.1835 16.3352 16.0776 16.2947 15.9828 16.2347C15.8879 16.1747 15.8059 16.0964 15.7417 16.0043C15.6775 15.9123 15.6323 15.8083 15.6087 15.6985C15.5852 15.5888 15.5838 15.4754 15.6046 15.3651C15.6254 15.2548 15.668 15.1497 15.73 15.0561C15.7919 14.9625 15.8719 14.8821 15.9652 14.8198C16.6726 14.3271 17.514 14.063 18.376 14.0629ZM18.376 11.5315C19.9945 11.5315 21.4821 12.1019 22.6457 13.0529C22.8151 13.1957 22.9214 13.3995 22.9418 13.6201C22.9622 13.8407 22.895 14.0605 22.7548 14.232C22.6145 14.4035 22.4124 14.5129 22.1921 14.5367C21.9719 14.5605 21.7511 14.4967 21.5775 14.3591C20.6746 13.6197 19.543 13.2168 18.376 13.2191C17.1609 13.2191 16.0488 13.6461 15.1763 14.3582C15.0906 14.4296 14.9916 14.4833 14.8851 14.5161C14.7786 14.549 14.6666 14.5605 14.5556 14.5498C14.4446 14.5391 14.3368 14.5066 14.2385 14.454C14.1401 14.4015 14.0532 14.33 13.9827 14.2436C13.9121 14.1572 13.8594 14.0578 13.8276 13.9509C13.7957 13.8441 13.7854 13.7319 13.7971 13.6211C13.8088 13.5102 13.8424 13.4027 13.8959 13.3049C13.9494 13.2071 14.0218 13.1209 14.1088 13.0512C15.3127 12.0664 16.8207 11.5294 18.376 11.5315ZM18.376 9.00001C20.6115 8.99683 22.7725 9.80349 24.4591 11.2707C24.6237 11.4186 24.7235 11.6253 24.7372 11.8461C24.7509 12.067 24.6773 12.2844 24.5322 12.4515C24.3871 12.6186 24.1822 12.722 23.9616 12.7395C23.741 12.7569 23.5224 12.6871 23.3528 12.5449C21.9731 11.3442 20.205 10.6844 18.376 10.6876C16.5459 10.6841 14.7768 11.3453 13.3975 12.5482C13.2285 12.6951 13.0082 12.7687 12.7849 12.7531C12.5616 12.7374 12.3537 12.6337 12.2069 12.4647C12.0601 12.2957 11.9864 12.0754 12.0021 11.8521C12.0177 11.6288 12.1215 11.4209 12.2904 11.2741C13.9772 9.80507 16.1392 8.99716 18.376 9.00001Z" fill="#72FF77" />
                    </svg>

                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Background/Decoration */}
        <div className="absolute top-20 md:top-28 left-0 w-full -z-10 pointer-events-none">
          <img
            src={image.src}
            alt="Hero Wave"
            className="w-full h-[250px] md:h-auto object-cover md:object-contain opacity-100"
          />
        </div>

      </div>
    </section>
  );
}
