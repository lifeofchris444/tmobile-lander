"use client";

import { Smartphone, Signal, Headphones, Wifi, Tablet, Battery, Sparkles, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Smartphone,
    secondaryIcon: Tablet,
    title: "Phones & Devices",
    description:
      "Get access to the latest smartphones, tablets, and tech devices.",
  },
  {
    icon: Signal,
    secondaryIcon: Zap,
    title: "Plans & Coverage",
    description:
      "Save on flexible plans with strong nationwide coverage.",
  },
  {
    icon: Headphones,
    secondaryIcon: Battery,
    title: "Accessories & Upgrades",
    description:
      "Shop cases, chargers, headphones, and must-have add-ons.",
  },
  {
    icon: Wifi,
    secondaryIcon: Sparkles,
    title: "Everyday Connectivity",
    description:
      "Stay connected with reliable service, hotspots, and more.",
  },
];

export function Features() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="features" ref={sectionRef} className="py-12 sm:py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-10 sm:mb-12 transition-all duration-700 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-sm font-semibold text-[#e20074] uppercase tracking-widest">
            Unlock Rewards
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mt-3 max-w-2xl mx-auto text-balance">
            What You Can Do With Your $1000 T-Mobile Reward
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-background border border-border/60 rounded-3xl overflow-hidden hover:border-[#e20074]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#e20074]/10 touch-card ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: sectionVisible ? `${150 + index * 100}ms` : "0ms",
                transitionProperty: "opacity, transform, border-color, box-shadow",
                transitionDuration: "600ms, 600ms, 500ms, 500ms",
              }}
            >
              {/* Icon composition area - consistent soft magenta tint for all cards */}
              <div className="relative h-48 bg-[#e20074]/[0.06] overflow-hidden">
                {/* Main icon with subtle float */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-background border border-[#e20074]/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-[#e20074]/40 transition-all duration-500 animate-float-slow">
                    <feature.icon className="w-10 h-10 text-[#e20074]" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Secondary decorative icons with floating - all magenta */}
                <div className="absolute top-6 right-8 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="w-10 h-10 bg-[#e20074]/10 rounded-xl flex items-center justify-center rotate-12">
                    <feature.secondaryIcon className="w-5 h-5 text-[#e20074]" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-8 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="w-8 h-8 bg-[#e20074]/10 rounded-lg flex items-center justify-center -rotate-6">
                    <Sparkles className="w-4 h-4 text-[#e20074]" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Decorative circles - subtle magenta tint */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#e20074]/[0.08] rounded-full" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#e20074]/[0.05] rounded-full" />
              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-8 pt-8 sm:pt-10">
                <div className="w-14 h-14 bg-[#e20074]/10 border border-[#e20074]/20 rounded-2xl flex items-center justify-center mb-6 -mt-14 relative z-10 shadow-lg group-hover:bg-[#e20074] group-hover:border-[#e20074] transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-[#e20074] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
