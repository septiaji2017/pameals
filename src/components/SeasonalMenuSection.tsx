import React from "react";
import { ArrowRight } from "lucide-react";
// Replace these with your real images
// import lebaranImg from "@/assets/lebaran.jpg";
// import frozenImg from "@/assets/frozen.jpg";

const seasonalItems = [
  {
    title: "Menu Spesial Lebaran",
    description: "Paket menu khas Lebaran yang dihadirkan secara terbatas menjelang Hari Raya Idul Fitri dan Hari Raya Idul Adha. Disiapkan dengan cita rasa masakan rumahan yang hangat.",
    image: "https://placehold.co/720x428", // Replace with real image
    link: "https://pameals.lovable.app/#products"
  },
  {
    title: "Menu Frozen Food",
    description: "Pilihan menu frozen food praktis yang diproduksi dan dibuka secara berkala setiap bulan. Cocok sebagai stok makanan di rumah, dengan kualitas rasa yang tetap terjaga.",
    image: "https://placehold.co/720x428", // Replace with real image
    link: "https://pameals.lovable.app/#products"
  },
];

const SeasonalMenuSection = () => {
  return (
    <section id="seasonal" className="w-full py-20 bg-[#F2EEE9]/30">
      <div className="container mx-auto px-4 md:px-8 flex flex-col gap-14">
        
        {/* 1. Header Section */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="inline-flex items-center px-3 py-1 bg-[#EE7C2B]/10 rounded-full">
            <span className="text-[#FF9500] text-sm font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-wider">
              Special & Seasonal Menu
            </span>
          </div>

          <h2 className="text-[#32241B]/90 text-3xl md:text-4xl font-['Plus_Jakarta_Sans'] font-bold leading-tight">
            Harga Terjangkau, Kualitas Terjamin.
          </h2>

          <p className="text-[#32241B]/90 text-lg font-['Plus_Jakarta_Sans'] font-normal leading-relaxed w-full">
            Dalam kategori ini, Fameals Bandung menghadirkan paket khusus yang tersedia pada 
            waktu tertentu, dibuat untuk momen spesial dan program pilihan di luar menu reguler.
          </p>
        </div>

        {/* 2. New Card Layout (Side by Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {seasonalItems.map((item, index) => (
            <div 
              key={index}
              className="relative w-full h-[500px] lg:h-[428px] rounded-[18px] overflow-hidden shadow-md group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Gradient Overlay (To make text readable) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#32241B]/90 via-[#32241B]/40 to-transparent" />

              {/* Content Wrapper (Aligns to bottom) */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                
                {/* Flex Container: Text Left, Button Right */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                  
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col gap-3 pr-0 md:pr-4">
                    <h3 className="text-[#FDFDFC] text-2xl font-['Plus_Jakarta_Sans'] font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#FDFDFC]/90 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed line-clamp-4 md:line-clamp-none">
                      {item.description}
                    </p>
                  </div>

                  {/* Glassmorphism Button */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:300ms] shrink-0 w-full md:w-auto">
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group/btn 
                          flex items-center justify-center gap-2
                          px-8 py-4 w-full md:w-auto
                          rounded-full border border-[#FCFAF8]/20
                          bg-[#FCFAF8]/10 backdrop-blur-sm
                          text-[#FCFAF8] font-semibold text-base font-['Plus_Jakarta_Sans']
                          hover:bg-[#FCFAF8]/20 transition-all duration-300
                        "
                      >
                        {/* 
                          1. Added 'gap-2' to parent <a> above to keep spacing clean.
                          2. Changed 'group-hover' to 'group-hover/btn' below.
                          This ensures it only triggers when you hover THIS button.
                        */}
                        <span className="transition-transform duration-300 translate-x-3 group-hover/btn:translate-x-0">
                          Lihat Menu
                        </span>
                        
                        <span className="opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100">
                          <ArrowRight size={18} />
                        </span>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeasonalMenuSection;