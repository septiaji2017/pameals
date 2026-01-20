import React from "react";
import { ArrowRight } from "lucide-react";
// Import your image here. 
import careImage from "@/assets/fameals-care.jpg";

const CareProgramSection = () => {
  return (
    // Background: #F2EEE9 with 30% opacity
    <section id="care" className="w-full py-20 bg-[#F2EEE9]/30">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-start gap-6">
          
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-[#EE7C2B]/10 rounded-full">
            <span className="text-[#FF9500] text-sm font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-wider">
              Fameals Care Program
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#32241B]/90 text-3xl md:text-4xl font-['Plus_Jakarta_Sans'] font-bold leading-tight">
            Sharing Meals, Spreading Care.
          </h2>

          {/* Description */}
          <div className="text-[#32241B]/90 text-lg font-['Plus_Jakarta_Sans'] font-normal leading-relaxed space-y-4">
            <p>
              Setiap hari Jumat, Fameals Bandung menghadirkan paket nasi bagi yang membutuhkan, 
              sebagai pengingat untuk selalu peduli dan berbagi kebaikan. Paket tersedia mulai 
              Rp25.000/pax. Info selanjutnya dapat menghubungi Admin Fameals Bandung.
            </p>
            <p>
              Terima kasih atas kepedulian dan kepercayaannya untuk turut berbagi kebaikan 
              bersama Fameals Bandung.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in [animation-delay:300ms]">
            <a 
              href="https://wa.me/6281323966051" // Direct to WhatsApp
              target="_blank" 
              rel="noopener noreferrer"
              //gap-2 px-6 py-3
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:opacity-90 transition-all"
            >
              <span className="transition-transform duration-300 translate-x-3 group-hover:translate-x-0">
                Order Paket
              </span>
              <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowRight size={18} />
              </span>
            </a>
          </div>

        </div>

        {/* Right Column: Image */}
        <div className="flex-1 w-full h-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[644px] h-[300px] md:h-[428px] rounded-[32px] overflow-hidden shadow-lg">
             <img 
               src={careImage} // ⚠️ Replace with your real image variable
               alt="Fameals Care Program"
               className="w-full h-full object-cover"
             />
             {/* Optional: Gradient Overlay if image is too bright */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#32241B]/20 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareProgramSection;