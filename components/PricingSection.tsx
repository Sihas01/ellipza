"use client";

import { motion } from "framer-motion";
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShoppingCart, 
  Building2,
  Cpu
} from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  pricePrefix: string;
  badge?: string;
  popular?: boolean;
  description: string;
  icon: typeof Building2;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    id: "business",
    name: "Business Website",
    pricePrefix: "From",
    price: "A$1,299",
    badge: "Professional",
    description: "Perfect for growing companies needing rich content presentation, analytics, and dynamic management.",
    icon: Building2,
    features: [
      "Up to 10 pages",
      "Custom UI/UX design",
      "Responsive development",
      "Dynamic content management",
      "Contact & enquiry forms",
      "Gallery / portfolio",
      "Blog / news",
      "Google Analytics",
      "SEO-friendly structure",
      "Performance optimization",
      "SSL & security",
      "Admin management where required",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce Website",
    pricePrefix: "From",
    price: "A$2,499",
    popular: true,
    badge: "Most Popular",
    description: "A complete, high-converting digital storefront equipped with payment gateways, cart, and product inventory.",
    icon: ShoppingCart,
    features: [
      "Custom e-commerce design",
      "Product catalogue",
      "Categories & product management",
      "Shopping cart",
      "Checkout",
      "Payment gateway integration",
      "Order management",
      "Customer accounts",
      "Inventory management",
      "Discounts & coupons",
      "Product search & filtering",
      "Email notifications",
      "Admin panel",
      "SEO & analytics",
    ],
  },
  {
    id: "custom",
    name: "Custom Website",
    pricePrefix: "From",
    price: "A$3,999",
    badge: "Bespoke Enterprise",
    description: "For businesses requiring a completely customized website solution.",
    icon: Cpu,
    features: [
      "Bespoke UI/UX",
      "Custom functionality",
      "Custom admin dashboards",
      "Advanced API integrations",
      "Customer portals",
      "Booking systems",
      "Payment integrations",
      "CRM integrations",
      "Advanced database systems",
      "Custom business workflows",
      "Advanced security",
      "Performance optimization",
    ],
  },
];

export default function PricingSection() {

  const handleChoosePlan = (plan: PricingPlan) => {
    const subject = `Inquiry: ${plan.name} (${plan.pricePrefix} ${plan.price}) - Ellipza Technologies`;
    const body = `Hi Ellipza Technologies team,\n\nI am interested in the ${plan.name} (${plan.pricePrefix} ${plan.price}) plan.\n\nPlease get in touch with me to discuss further.\n\nThank you!`;

    const mailtoUrl = `mailto:ellipza@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section 
      id="pricing" 
      className="py-24 bg-gradient-to-b from-white via-[#F7F9FC] to-white relative overflow-hidden font-sans scroll-mt-20"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#59257A]/5 blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-1.5 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-[#59257A]" />
            <span className="text-[#59257A] text-sm font-semibold uppercase tracking-wider">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-tight">
            Choose the Right Plan <br className="hidden sm:block" />
            <span className="text-[#59257A]">for Your Business</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Three distinct packages designed for every stage of growth — from establishing your digital presence to building a custom enterprise platform.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-7 md:p-8 flex flex-col border transition-all duration-300 group ${
                  plan.popular
                    ? "border-[#59257A] bg-white shadow-xl shadow-purple-900/10 ring-1 ring-[#59257A]/20 scale-[1.02] md:scale-105"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-7 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                      plan.popular
                        ? "bg-[#59257A] text-white"
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Icon & Plan Name */}
                <div className="flex items-center gap-3 mb-4 mt-2">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      plan.popular
                        ? "bg-[#59257A] text-white"
                        : "bg-purple-50 text-[#59257A]"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {plan.pricePrefix}
                  </span>
                  <p className="text-4xl font-extrabold text-[#0f172a] leading-none mt-0.5 tracking-tight">
                    {plan.price}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-6 font-normal">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="flex-1 space-y-3 mb-8">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                    What&apos;s Included
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                            plan.popular
                              ? "bg-[#59257A] text-white"
                              : "bg-purple-100 text-[#59257A]"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Choose Plan Button — opens email client */}
                <button
                  onClick={() => handleChoosePlan(plan)}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                    plan.popular
                      ? "bg-[#59257A] hover:bg-[#4a1f66] text-white shadow-lg shadow-purple-900/20 hover:shadow-xl"
                      : "bg-[#0f172a] hover:bg-[#59257A] text-white"
                  }`}
                >
                  <span>Choose Plan</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner with Consultation Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-[#59257A] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl max-w-7xl mx-auto"
        >
          {/* Decorative Pattern */}
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-white/5 rounded-full pointer-events-none" />

          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
              Tailored Solutions
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Need a completely custom enterprise system?
            </h3>
            <p className="text-purple-100 text-sm md:text-base font-normal leading-relaxed opacity-90">
              Have specific architecture requirements, custom databases, or third-party CRM integrations? Our senior engineering team is ready to consult and formulate a tailored proposal for your business.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={() =>
                handleChoosePlan({
                  id: "custom-enterprise",
                  name: "Custom Enterprise Website",
                  pricePrefix: "From",
                  price: "A$3,999",
                  badge: "Bespoke",
                  description: "For businesses requiring a completely customized website solution.",
                  icon: Cpu,
                  features: [],
                })
              }
              className="px-8 py-4 bg-white text-[#59257A] hover:bg-gray-100 rounded-full font-bold text-sm transition-all shadow-md cursor-pointer hover:shadow-lg flex items-center gap-2"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
