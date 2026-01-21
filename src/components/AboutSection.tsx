import React from "react";
import { ShieldCheck, Truck, Ban, CalendarDays, UtensilsCrossed, Leaf } from "lucide-react";

// I mapped the content from your text file into this clean data array
const features = [
  {
    icon: ShieldCheck,
    title: "Halal Certified",
    description: "Menu berganti setiap hari dan disusun secara seimbang agar tetap lezat, berkualitas, dan tidak membosankan.",
  },
  {
    icon: Truck, // Replaced abstract shape with Truck/Clock concept
    title: "A Convenient Catering Solution",
    description: "Setiap hidangan disiapkan secara praktis dengan alur layanan yang efisien, dari pemesanan, pengiriman, hingga siap dikonsumsi.",
  },
  {
    icon: Ban, // Replaced shape with "No" symbol or Leaf
    title: "No MSG Home-Style Meals",
    description: "Hidangan halal yang disiapkan tanpa MSG dengan cita rasa masakan rumahan yang dirancang untuk memenuhi kebutuhan individu, keluarga, hingga institusi.",
  },
  {
    icon: CalendarDays,
    title: "Daily Catering & Event Ready",
    description: "Tersedia untuk kebutuhan makan harian anak dan dewasa hingga berbagai acara keluarga maupun institusi.",
  },
  {
    icon: UtensilsCrossed,
    title: "Balanced & Thoughtful Menu",
    description: "Menu berganti setiap hari dan disusun secara seimbang agar tetap lezat, berkualitas, dan tidak membosankan.",
  },
  {
    icon: Leaf,
    title: "Fresh & Quality Ingredients",
    description: "Mengutamakan penggunaan bahan baku pilihan berkualitas dengan proses pengolahan yang higienis dan terstandar.",
  },
];

const AboutSection = () => {
  return (
    // Main Container: Background #FCFAF8 (from Figma)
    <section id="about" className="w-full py-20 md:py-28 bg-[#FCFAF8]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="w-full mb-12 flex flex-col items-start gap-4">
          
          {/* Badge: About Us */}
          <div className="inline-flex items-center px-3 py-1 bg-[#EE7C2B]/10 rounded-full">
            <span className="text-[#FF9500] text-sm font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-wider">
              About Us
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#32241B]/90 text-3xl md:text-4xl font-['Plus_Jakarta_Sans'] font-bold leading-tight">
            Quality Meals, Made to Feel Like Home.
          </h2>

          {/* Description */}
          <p className="text-[#32241B]/70 text-lg font-['Plus_Jakarta_Sans'] leading-relaxed w-full">
            Fameals Bandung merupakan penyedia layanan katering harian serta berbagai acara, yang menyajikan beragam pilihan menu tanpa MSG (monosodium glutamat) untuk memenuhi kebutuhan individu, keluarga, maupun institusi.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 rounded-xl transition-all duration-300
                bg-[#E9F2EB]/50 border border-[#3FA66A]/30 hover:shadow-lg hover:bg-[#E9F2EB]/80"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 mb-5 rounded-xl flex items-center justify-center bg-[#3FA66A]/20">
                <feature.icon className="w-5 h-5 text-[#44A178]" />
              </div>

              {/* Title */}
              <h3 className="text-[#32241B]/90 text-base font-['Plus_Jakarta_Sans'] font-semibold mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#6F8675] text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;