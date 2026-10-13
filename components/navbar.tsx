"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/public/logo.png";
import logoMobile from "@/public/logoMobile.png";
import { useRouter, usePathname } from "next/navigation";


interface NavItem {
  name: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: "Home", id: "home" },
  { name: "Solution", id: "solution" },
  { name: "Why Us", id: "why-us" },
  { name: "Our Works", id: "our-works" },
  { name: "Pricing", id: "pricing" },
  { name: "Resources", id: "resources" },
  { name: "Contact Us", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle hash scrolling when navigating to home page with hash
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname === "/") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const timer = setTimeout(() => {
          const section = document.getElementById(hash);
          if (section) {
            const navbarHeight = 64;
            window.scrollTo({
              top: section.offsetTop - navbarHeight,
              behavior: "smooth",
            });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  // Track active section on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (pathname === "/our-works") {
      setActiveSection("our-works");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = navItems.length - 1; i >= 0; i--) {
        if (navItems[i].id === "our-works") continue;
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Scroll to section
  const scrollToSection = (id: string) => {
    if (id === "our-works") {
      router.push("/our-works");
      setIsMenuOpen(false);
      return;
    }

    if (pathname !== "/") {
      router.push(`/#${id}`);
      setIsMenuOpen(false);
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    const navbarHeight = 64; // h-16 navbar height
    const targetPosition = section.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setIsMenuOpen(false); // Close mobile menu immediately 
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm py-2 border-b border-gray-100 font-sans">
        <div className="relative mx-auto flex h-16 items-center px-4 md:px-8 lg:px-16 xl:px-24">
          {/* Desktop Logo */}
          <div className="hidden md:flex items-center z-10 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={logo.src} alt="Ellipza Logo" className="h-[44px] lg:h-[48px] w-auto" />
          </div>

          {/* Center Nav (Desktop) */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-0.5 lg:gap-1 bg-white p-1 rounded-full border border-gray-100 shadow-sm">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-2.5 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all cursor-pointer duration-300 ${
                      isActive ? "text-white bg-[#0f172a] shadow-md" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Button (Desktop) */}
          <div className="hidden md:block ml-auto z-10">
            <button className="px-5 lg:px-6 py-2 rounded-full bg-[#59257A] text-white text-xs lg:text-sm font-medium hover:bg-[#4a1f66] transition-colors shadow-sm cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </button>
          </div>

          {/* MOBILE NAVBAR */}
          <div className="md:hidden flex items-center justify-between w-full z-10">
            {/* Hamburger Left */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo Center */}
            <img src={logoMobile.src} alt="Ellipza Logo" className="h-[44px] mx-auto" />

            {/* Placeholder for right */}
            <div className="w-6" />
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 bg-white shadow-xl z-40 overflow-hidden md:hidden border-b border-gray-100"
          >
            <div className="flex flex-col px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeSection === item.id
                    ? "bg-gray-100 text-[#59257A]"
                    : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-2">
                <button className="w-full px-4 py-3 rounded-lg bg-[#59257A] text-white text-sm font-medium shadow-sm cursor-pointer"
                  onClick={() => scrollToSection("contact")}>
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
