import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import MenuModal, { MenuItem } from "./MenuModal";

// Images Assets
import seasonal1 from "@/assets/kupad.jpg";
import seasonal2 from "@/assets/seasonal-2.jpeg";
import OporAyam from "@/assets/opor-ayam.jpg"; 
import SambalGoreng from "@/assets/sambal-goreng.jpg"; 
import PrintilDaging from "@/assets/printil-daging.jpg"; 
import CabeHijau from "@/assets/ase-cabe-hijau.jpg"; 
import TelurPindang from "@/assets/telur-pindang.jpg";
import SayurLabu from "@/assets/sayur-labu-siam.jpg";
import Kupad from "@/assets/kupad.jpg";  
import Roulade from "@/assets/roulade.png"; 
import Mochi from "@/assets/mochi.jpg"; 
import AyamUngkep from "@/assets/ayam-ungkep.jpg"; 
import ChickFishKatsu from "@/assets/chicken-fish-katsu.jpg"; 
import Bacem from "@/assets/bacem.png"; 

const LEBARAN_MENU: MenuItem[] = [
  {
    name: "Opor Ayam",
    description: "Ayam Paha Utuh dan Ayam Dada Utuh dimasak dengan santan dan rempah pilihan. Rasanya gurih dengan kuah santan yang memiliki aroma rempah yang khas.",
    image: OporAyam,
  },
  {
    name: "Sambal Goreng Kentang Ati Sapi",
    description: "Kentang dan Hati Sapi dimasak dengan cabai merah tanjung tanpa biji serta rempah lainnya yang kaya rasa. Memiliki rasa gurih dengan sentuhan pedas yang ringan.",
    image: SambalGoreng,
  },
  {
    name: "Printil Daging Sapi",
    description: "Daging Sapi giling yang dimasak dengan cabe merah tanjung tanpa biji dan bumbu rempah lainnya serta memiliki tekstur empuk, rasa gurih dan sedikit pedas.",
    image: PrintilDaging,
  },
  {
    name: "Ase Cabe Hijau",
    description: "Cabai Hijau Tanjung dan Cabai Gendot yang dimasak dengan kuah santan serta rempah lainnya. Perpaduan rasa gurih dan sedikit pedas membuat semakin menggugah selera.",
    image: CabeHijau,
  },
  {
    name: "Telur Pindang",
    description: "Telur yang direbus dan dimasak dengan bumbu rempah yang membuat telur berwarna cokelat di luar, sementara rasanya gurih dan beraroma rempah yang khas.",
    image: TelurPindang,
  },
  {
    name: "Sayur Labu Siam Tempe",
    description: "Labu Siam dan Tempe yang dimasak dengan bumbu rempah dan santan. Cocok untuk sayur pelengkap menu Lebaran.",
    image: SayurLabu,
  },
  {
    name: "Ketupat",
    description: "Beras berkualitas yang dimasak dalam anyaman ketupat hingga matang sempurna, disiapkan sebagai pelengkap istimewa untuk hidangan Lebaran.",
    image: Kupad,
  },
];

const FROZEN_MENU: MenuItem[] = [
  {
    name: "Chicken Roulade",
    description: "Daging Fillet Ayam yang telah di bumbui lalu dibaluti dengan telur serta di gulung menggunakan Aluminium Foil. Sangat cocok dipadukan dengan nasi atau dijadikan cemilan.",
    image: Roulade,
  },
  {
    name: "Mochi Ice Cream",
    description: "Kenyalnya mochi di padukan dengan lembutnya ice cream berbagai varian rasa.",
    image: Mochi,
  },
  {
    name: "Ayam Ungkep",
    description: "Potongan ayam yang di masak dengan bumbu dan rempah Khas Fameals, memiliki dua varian yaitu Ayam Ungkep Bumbu Kuning dan Ayam Ungkep Bumbu Bakar Bacem.",
    image: AyamUngkep,
  },
  {
    name: "Chicken Katsu & Fish Katsu",
    description: "Potongan Fillet Dada Ayam dan Fillet Ikan Dori yang di balur dengan tepung roti serta di sajikan dengan saus Khas Fameals.",
    image: ChickFishKatsu,
  },
  {
    name: "Tahu & Tempe bacem",
    description: "Tahu dan Tempe yang dibumbui dengan berbagai rempah serta memiliki cita rasa manis dan gurih yang menggugah selera.",
    image: Bacem,
  },
];

const seasonalItems = [
  {
    id: "lebaran",
    title: "Menu Spesial Lebaran",
    description: "Paket menu khas Lebaran yang dihadirkan menjelang Hari Raya Idul Fitri dan Hari Raya Idul Adha. Disiapkan dengan cita rasa serta kualitas terbaik, cocok untuk dinikmati bersama keluarga dan kerabat di momen kebersamaan.",
    image: seasonal1, // Replace with real image
    link: "https://pameals.lovable.app/#products"
  },
  {
    id: "frozen",
    title: "Menu Frozen Food",
    description: "Pilihan menu frozen food yang praktis sebagai stok makanan di rumah, dengan kualitas rasa lezat dan mudah disajikan kapan saja.",
    image: seasonal2, // Replace with real image
    link: "https://pameals.lovable.app/#products"
  },
];

const SeasonalMenuSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalItems, setModalItems] = useState<MenuItem[]>([]);

  const handleOpenModal = (id: string, title: string) => {
    if (id === "lebaran") {
      setModalItems(LEBARAN_MENU);
    } else if (id === "frozen") {
      setModalItems(FROZEN_MENU);
    }
    setModalTitle(title);
    setIsModalOpen(true);
  };  

  return (
    <>
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
              Exclusively Prepared for Moments Together
            </h2>

            <p className="text-[#32241B]/90 text-lg font-['Plus_Jakarta_Sans'] font-normal leading-relaxed w-full">
              Dalam kategori ini, Fameals Bandung menghadirkan paket khusus yang tersedia pada 
              waktu tertentu, dibuat untuk momen spesial.
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
                          <button 
                            onClick={() => handleOpenModal(item.id, item.title)}
                            className="
                              group/btn 
                              flex items-center justify-center gap-2
                              px-8 py-4 w-full md:w-auto
                              rounded-full border border-[#FCFAF8]/20
                              bg-[#FCFAF8]/10 backdrop-blur-sm
                              text-[#FCFAF8] font-semibold text-base font-['Plus_Jakarta_Sans']
                              hover:bg-[#FCFAF8]/20 transition-all duration-300
                              cursor-pointer
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
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <MenuModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalTitle}
        items={modalItems}
      />      
    </>
  );
};

export default SeasonalMenuSection;