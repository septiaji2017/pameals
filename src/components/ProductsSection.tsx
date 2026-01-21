import React from "react";
import { Leaf, FlameIcon } from "lucide-react"; 
import food3 from "@/assets/food-3.jpg";
import food4 from "@/assets/food-4.jpg";
import food5 from "@/assets/food-5.jpg";
import food6 from "@/assets/food-6.jpg";
import product1 from "@/assets/our-product-1.jpg";
import product2 from "@/assets/our-product-2.jpg";
import product3 from "@/assets/our-product-3.jpeg";
import product4 from "@/assets/our-product-4.jpg";

const products = [
  {
    image: product1,
    title: "Personal Meal Box Dewasa dan Anak",
    description: "Paket makanan lengkap dengan nasi yang disiapkan secara praktis untuk kebutuhan harian dewasa dan anak.",
    tag: "Best Seller", 
    specialBadge: null,
  },
  {
    image: product2,
    title: "Family Set",
    description: "Paket hidangan lauk dan sayur tanpa nasi yang cocok untuk dinikmati bersama keluarga di rumah.",
    tag: "Best Seller", 
    specialBadge: "Non MSG", 
  },
  {
    image: product3,
    title: "Event Package",
    description: "Paket hidangan untuk berbagai acara seperti pengajian, syukuran, seminar, dan kegiatan lainnya.",
    tag: null,
    specialBadge: null,
  },
  {
    image: product4,
    title: "Kids Event Package",
    description: "Paket khusus anak tersedia dalam dua pilihan, yaitu Bento Kids Characters dan Paket Nasi Kuning.",
    tag: null,
    specialBadge: null,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="w-full py-20 md:py-28 bg-[#F2EEE9]/30">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 mb-14 text-center">
          <div className="inline-flex items-center px-3 py-1 bg-[#EE7C2B]/10 rounded-full">
            <span className="text-[#FF9500] text-sm font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-wider">
              Our Product
            </span>
          </div>
          <h2 className="text-[#32241B]/90 text-3xl md:text-4xl font-['Plus_Jakarta_Sans'] font-bold leading-tight max-w-2xl">
            Thoughtfully Crafted for Everyday Moments.
          </h2>
          <p className="text-[#32241B]/90 text-lg font-['Plus_Jakarta_Sans'] font-normal leading-relaxed w-full">
            Fameals menghadirkan hidangan yang disiapkan dengan penuh perhatian sebagai solusi 
            praktis untuk menemani setiap momen, dengan cita rasa hangat layaknya masakan rumah.
          </p>
        </div>

        {/* 
           Product Cards Grid 
           FIX: Added 'items-start'. 
           This prevents non-hovered cards from stretching when a neighbor grows.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {products.map((product, index) => (
            <div
              key={index}
              className="group flex flex-col bg-[#FDFDFC] rounded-2xl overflow-hidden shadow-[0px_4px_20px_-4px_rgba(66,48,36,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {product.tag && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#FF9500] rounded-full">
                    <span className="text-[#FCFAF8] text-xs font-['Plus_Jakarta_Sans'] font-semibold flex items-center justify-center gap-2">
                      <FlameIcon size={16} />
                      {product.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-5 flex flex-col">
                
                {/* Title & Badge */}
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="flex-1 text-[#32241B]/90 text-lg font-['Plus_Jakarta_Sans'] font-bold leading-snug">
                    {product.title}
                  </h3>
                  
                  {product.specialBadge && (
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-[#3FA66A]/20 rounded-full shrink-0">
                      <Leaf size={12} className="text-[#44A178] fill-current" />
                      <span className="text-[#44A178] text-[10px] font-['Plus_Jakarta_Sans'] font-medium">
                        {product.specialBadge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#32241B]/70 text-sm font-['Plus_Jakarta_Sans'] font-normal leading-relaxed">
                  {product.description}
                </p>

                {/* The Order Button (Expands ONLY this card) */}
                <a
                  href={`https://wa.me/6281323966051?text=Halo Fameals, saya tertarik dengan ${product.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block w-full 
                    max-h-0 opacity-0 overflow-hidden
                    group-hover:mt-5 group-hover:max-h-14 group-hover:opacity-100
                    transition-all duration-300 ease-in-out
                  "
                >
                  <div className="w-full py-2.5 bg-[#FF9500]/90 hover:bg-[#FF9500] text-[#FCFAF8] rounded-full text-center text-sm font-['Plus_Jakarta_Sans'] font-semibold cursor-pointer">
                    Order
                  </div>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;