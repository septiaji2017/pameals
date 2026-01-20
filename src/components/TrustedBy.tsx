import React from "react";

const clients = [
  { name: "PT. Hartadinata Abadi", logo: "https://placehold.co/21x21" },
  { name: "Tiny Wonder Daycare", logo: "https://placehold.co/21x21" },
  { name: "Daycare Biofarma", logo: "https://placehold.co/32x21" },
  { name: "Telkom Indonesia", logo: "https://placehold.co/32x21" },
  { name: "Growing Tree Preschool", logo: "https://placehold.co/47x21" },
  { name: "PT. Business Consulting", logo: "https://placehold.co/47x21" },
];

const TrustedBy = () => {
  // 1. Duplicate the array to create the infinite loop effect
  const allClients = [...clients, ...clients, ...clients]; 

  return (
    <div id="trusted" className="w-full">
      {/* 2. Inject CSS for the animation locally so you don't need to touch config files */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); } /* Move 1/3 because we tripled the list */
          }
        `}
      </style>

      {/* Container matching Figma */}
      <div className="w-full bg-[#FCFAF8] rounded-2xl shadow-[0px_4px_20px_-4px_rgba(66,48,36,0.08)] overflow-hidden py-10 flex flex-col items-start gap-8">
        
        {/* Title Section */}
        <div className="w-full flex flex-col items-center justify-start px-8">
          <div className="text-center text-[#32241B]/90 text-xl font-bold font-['Plus_Jakarta_Sans'] leading-7">
            Trusted By
          </div>
        </div>

        {/* 
           SCROLL WRAPPER 
           - mask-image: Creates the fade-out effect on left/right edges
        */}
        <div 
          className="w-full overflow-hidden flex"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          {/* 
             MOVING TRACK 
             - animation: scrollLeft
             - duration: 25s (Change to 2.5s here if you really want it fast!)
          */}
          <div 
            className="flex items-center gap-8 md:gap-12 pl-8"
            style={{
              width: "max-content",
              animation: "scrollLeft 25s linear infinite" // <--- EDIT SPEED HERE
            }}
          >
            {allClients.map((client, index) => (
              <div key={index} className="flex items-center justify-start gap-2 shrink-0">
                {/* Logo Image */}
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-[21px] w-auto object-contain" 
                />
                
                {/* Client Name Text */}
                <div className="text-[#32241B]/90 text-[14.7px] font-semibold font-['Plus_Jakarta_Sans'] leading-[21px]">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;