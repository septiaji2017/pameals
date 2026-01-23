import React from "react";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/our-product-1.jpg";
// Make sure to import your background image properly. 
// If you don't have one yet, use a placeholder or import it like: import bgImage from '@/assets/bg-pricing.jpg'

const PricingSection = () => {
  return (
    <section 
      id="prices" 
      className="w-full py-28 relative overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* 
        Background Layer with Gradient + Image Overlay 
        - Linear Gradient: rgba(50, 36, 27, 0.90) -> 0.70 -> 0.40
        - We use Tailwind's `bg-[url(...)]` utility for the image.
      */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(50, 36, 27, 0.90) 0%, rgba(50, 36, 27, 0.70) 50%, rgba(50, 36, 27, 0.40) 100%), url(${product1})` 
          // ⚠️ REPLACE 'https://placehold.co/1440x462' with your real imported image variable e.g. `url(${bgImage})`
        }}
      />

      <div className="container relative z-10 px-4 flex flex-col items-center gap-14">
        
        {/* Text Content */}
        <div className="max-w-[672px] flex flex-col items-center gap-3">
          
          {/* Badge: PRICE LIST */}
          <div className="inline-flex items-center px-3 py-1 bg-[#533100]/40 rounded-full mb-2 backdrop-blur-sm">
            <span className="text-[#FCFAF8] text-sm font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-[0.7px]">
              Price List
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#FCFAF8] text-4xl md:text-4xl font-['Plus_Jakarta_Sans'] font-bold leading-tight">
            Harga Terjangkau, Kualitas Terjamin
          </h2>

          {/* Subtitle */}
          <p className="text-[#FCFAF8] text-lg font-['Plus_Jakarta_Sans'] font-normal leading-relaxed mt-1">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in [animation-delay:300ms]">
          <a 
            href="https://drive.google.com/file/d/115F-7fRImaPNGjggatod3bw5oTohumG6/view?usp=drive_link"
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full
              bg-[#FCFAF8]/10 backdrop-blur-[2px] 
              border-2 border-[#FCFAF8]/70
              transition-all duration-300 hover:bg-[#EE7C2B]/20
              text-[#EE7C2B] font-[600]"
          >
              <span className="transition-transform duration-300 translate-x-3 group-hover:translate-x-0">
                Price List Fameals Bandung
              </span>
              <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowRight size={18} />
              </span>
          </a>
        </div>        


      </div>
    </section>
  );
};

export default PricingSection;