import React from "react";
import { X, ArrowRight } from "lucide-react";

// Define the shape of a single menu item
export interface MenuItem {
  name: string;
  description: string;
  image: string; 
}

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: MenuItem[];
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, title, items }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#32241B]/60 backdrop-blur-sm animate-fade-in">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-[#FCFAF8]">
          <h2 className="text-2xl md:text-3xl font-bold font-['Plus_Jakarta_Sans'] text-[#32241B]">
            {title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} className="text-[#32241B]" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 bg-[#FCFAF8]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[14px] border border-[#e5e7eb] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Image */}
                <div className="h-[220px] w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-[#32241B]/90 text-lg font-bold font-['Plus_Jakarta_Sans'] capitalize leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[#32241B]/70 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Order Button (Matches component3 style) */}
                  <a
                    href={`https://wa.me/6281323966051?text=Halo Fameals, saya ingin pesan menu ${title}: ${item.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-2 w-full flex items-center justify-center gap-2
                      py-2.5 px-6 rounded-full
                      bg-[#ff9500]/90 hover:bg-[#ff9500] 
                      text-[#fcfaf8] text-sm font-semibold font-['Plus_Jakarta_Sans']
                      transition-all duration-300 group
                    "
                  >
                    <span>Order</span>
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;