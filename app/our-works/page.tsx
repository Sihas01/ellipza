"use client";

import { motion } from "framer-motion";
import {
  Utensils,
  Briefcase,
  Layers,
  ShoppingBag,
  Globe,
  Award,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Layers2,
  Sparkles
} from "lucide-react";
import Footer from "@/components/Footer";

// Icon mapping dictionary
const iconMap = {
  Utensils: Utensils,
  Briefcase: Briefcase,
  Layers: Layers,
  ShoppingBag: ShoppingBag,
  Globe: Globe,
  Award: Award,
  Wrench: Wrench
};

interface Project {
  title: string;
  badge: string;
  desc: string;
  features: string[];
  tech: string[];
  image: string;
  frame: "desktop" | "tablet" | "phone";
  icon: keyof typeof iconMap;
}

const products: Project[] = [
  {
    title: "Table Tap",
    badge: "Smart Restaurant ERP",
    desc: "A smart restaurant ERP featuring QR ordering, kitchen management, billing, inventory control, and operational automation.",
    features: [
      "Contactless QR-code menu browsing and ordering system",
      "Real-time kitchen display system (KDS) integration",
      "Automated stock control and inventory threshold warnings",
      "Dynamic tables layout and digital reservation scheduling"
    ],
    tech: ["Next.js", "TailwindCSS", "Node.js", "WebSockets", "MongoDB"],
    image: "/projects/table_tap_mockup.png",
    frame: "tablet",
    icon: "Utensils",
  },
  {
    title: "Procurement ERP",
    badge: "Enterprise Resource Planning",
    desc: "An enterprise-grade ERP system covering procurement, inventory, warehouse management, supplier management, approvals, finance, and reporting.",
    features: [
      "End-to-end supply chain tracking and vendor optimization",
      "Automated multi-level purchase order approval workflows",
      "Real-time warehouse stock alerts and smart replenishment flows",
      "Comprehensive financial auditing and balance sheets reporting"
    ],
    tech: ["React", "PostgreSQL", "NestJS", "TypeScript", "Docker"],
    image: "/projects/procurement_erp_mockup.png",
    frame: "desktop",
    icon: "Briefcase",
  },
  {
    title: "Ellipza POS System",
    badge: "Retail Point of Sale",
    desc: "A complete retail POS and inventory management system for sales, stock control, billing, and reporting.",
    features: [
      "Ultra-fast barcode scanning and offline-capable checkout",
      "Daily shift closing records and cashier shift management",
      "Automated tax billing and instant receipt generation",
      "Stock audit tracking with detailed loss & theft reports"
    ],
    tech: ["Electron", "React", "SQLite", "TailwindCSS", "Chart.js"],
    image: "/projects/ellipza_pos_mockup.png",
    frame: "desktop",
    icon: "Layers",
  }
];

const clientProjects: Project[] = [
  {
    title: "Lite Grocer Website",
    badge: "E-Commerce Platform",
    desc: "A modern grocery e-commerce platform enabling online product browsing, ordering, and customer engagement.",
    features: [
      "Vibrant and responsive storefront for browsing fresh products",
      "Optimized shopping cart, persistent sessions, and quick search",
      "Secure payment gateway integrations (Stripe, PayPal, etc.)",
      "Real-time order tracking notifications for customers"
    ],
    tech: ["Next.js", "TailwindCSS", "GraphQL", "Node.js", "Stripe"],
    image: "/projects/lite_grocer_web_mockup.png",
    frame: "desktop",
    icon: "ShoppingBag",
  },
  {
    title: "Bhaddeka Vihari",
    badge: "Monastery Platform",
    desc: "A digital platform for a Buddhist monastery providing information about meditation programs, events, and community activities.",
    features: [
      "Interactive events calendar with meditation session registrations",
      "Dhamma talks audio player and blog resource center",
      "Integrated volunteer coordinator and donation tracking system",
      "Mobile-friendly interface built for community engagement"
    ],
    tech: ["Next.js", "Framer Motion", "TailwindCSS", "Sanity CMS"],
    image: "/projects/bhaddeka_vihari_mockup.png",
    frame: "desktop",
    icon: "Globe",
  },
  {
    title: "Astron Limited",
    badge: "Corporate Website",
    desc: "A professional corporate website designed to strengthen digital presence and showcase business services.",
    features: [
      "Clean, high-performance landing page displaying business divisions",
      "Interactive contact and consultation booking tools",
      "Dynamic case studies portfolio and client testimonials slider",
      "Fully responsive layout with premium micro-interactions"
    ],
    tech: ["Gatsby", "TailwindCSS", "Framer Motion", "Netlify CMS"],
    image: "/projects/astron_mockup.png",
    frame: "desktop",
    icon: "Award",
  },
  {
    title: "Crystal Clear Facility Services",
    badge: "Service Booking Web App",
    desc: "An ongoing web development project focused on service bookings, customer inquiries, and business growth.",
    features: [
      "Interactive service selector and pricing estimator",
      "Live booking scheduler with custom date/time selections",
      "SMS reminders and email billing automation",
      "Admin backend dashboard for dispatch and booking management"
    ],
    tech: ["React", "Firebase", "Node.js", "TailwindCSS", "Twilio API"],
    image: "/projects/crystal_clear_mockup.png",
    frame: "desktop",
    icon: "Wrench",
  }
];

function DeviceMockup({ project }: { project: Project }) {
  if (project.frame === "desktop") {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 overflow-hidden relative group max-w-2xl mx-auto w-full aspect-video">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
    );
  }

  if (project.frame === "tablet") {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 overflow-hidden relative group max-w-lg mx-auto w-full aspect-[4/3]">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className={`w-full h-full ${project.title === "Table Tap" ? "object-contain p-6" : "object-cover"} group-hover:scale-105 transition-transform duration-500 ease-out`}
        />
      </div>
    );
  }

  // phone frame
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 overflow-hidden relative group max-w-[340px] mx-auto w-full aspect-[9/19]">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const IconComponent = iconMap[project.icon] || Layers2;
  const isImageLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 md:py-14"
    >
      {/* Image Block */}
      <div className={`lg:col-span-6 flex justify-center w-full ${isImageLeft ? "" : "lg:order-last"}`}>
        <DeviceMockup project={project} />
      </div>

      {/* Content Block */}
      <div className="lg:col-span-6 space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#59257A]/10 text-[#59257A] flex items-center justify-center shrink-0">
            <IconComponent size={18} />
          </div>
          <span className="text-xs md:text-sm font-bold text-[#59257A] uppercase tracking-wider">
            {project.badge}
          </span>
        </div>

        <h3 className="text-2xl md:text-3.5xl font-bold text-[#0f172a] leading-tight">
          {project.title}
        </h3>

        <p className="text-[#616161] font-medium text-sm md:text-[15px] leading-relaxed text-justify">
          {project.desc}
        </p>

        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Deliverables</h4>
          <ul className="space-y-2">
            {project.features.map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-500 font-medium">
                <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurWorks() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] pt-20 font-sans overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-10 md:py-14 bg-gradient-to-b from-[#59257A]/5 via-transparent to-transparent">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex p-[1px] rounded-full bg-gradient-to-r from-[#7D43A2] to-[#5393DF] mb-6 shadow-sm animate-pulse"
          >
            <span className="px-4 py-1.5 rounded-full bg-[#F7F9FC] text-[#7D43A2] font-bold tracking-widest text-[11px] uppercase">
              Our Works
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 leading-tight"
          >
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D43A2] to-[#5393DF]">Digital Solutions</span> <br className="hidden md:block" />
            That Propel Business Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#616161] text-sm md:text-base lg:text-[17px] font-medium leading-relaxed max-w-2.5xl mx-auto"
          >
            We blend industry-leading technical architecture with user-focused design to deliver software products that optimize operations and create seamless digital experiences.
          </motion.p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-8 md:py-12 relative bg-white border-y border-slate-100 overflow-hidden">
        {/* Background Wave */}
        <div className="absolute top-0 left-0 w-full pointer-events-none opacity-100 z-0">
          <img src="/services-wave.png" alt="" className="w-full h-auto opacity-60" />
        </div>
        <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          <div className="border-b border-gray-100 pb-8 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-[#59257A]" />
              <h2 className="text-xs font-bold text-[#59257A] uppercase tracking-widest">
                Our Proprietary Products
              </h2>
            </div>
            <h2 className="text-2.5xl md:text-4xl font-bold text-[#0f172a]">
              Tailored Enterprise Software
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">
              Ready-to-deploy, high-performance systems designed to automate and streamline your operations.
            </p>
          </div>

          <div>
            {products.map((project, idx) => (
              <ProjectRow key={project.title} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT PROJECTS SECTION */}
      <section className="py-8 md:py-14 relative bg-[#F7F9FC] overflow-hidden">
        {/* Background Wave */}
        <div className="absolute top-0 left-0 w-full pointer-events-none opacity-100 z-0">
          <img src="/contact-wave.png" alt="" className="w-full h-auto opacity-70" />
        </div>
        <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          <div className="border-b border-gray-200/50 pb-8 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Award size={18} className="text-[#3b82f6]" />
              <h2 className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest">
                Successfully Delivered
              </h2>
            </div>
            <h2 className="text-2.5xl md:text-4xl font-bold text-[#0f172a]">
              Client Case Studies
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">
              Bespoke digital platforms designed and launched successfully to accelerate business growth.
            </p>
          </div>

          <div>
            {clientProjects.map((project, idx) => (
              <ProjectRow key={project.title} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
