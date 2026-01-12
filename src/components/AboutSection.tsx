import { Check, ShieldCheck, Leaf, Flame, Droplets } from "lucide-react";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";

const features = [
  {
    icon: ShieldCheck,
    title: "Tanpa MSG",
    description: "Tidak menggunakan MSG (Monosodium Glutamat) dalam setiap masakan",
  },
  {
    icon: Leaf,
    title: "Bahan Segar",
    description: "Menggunakan bahan-bahan segar dan berkualitas terbaik",
  },
  {
    icon: Flame,
    title: "Tanpa Bahan Berbahaya",
    description: "Tidak menggunakan pengawet, pewarna, atau pemanis buatan",
  },
  {
    icon: Droplets,
    title: "Minyak Berkualitas",
    description: "Tidak menggunakan minyak jelantah (minyak berulang)",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-card animate-slide-in-left">
                  <img
                    src={food1}
                    alt="Fameals healthy food"
                    className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-secondary rounded-2xl p-6 animate-slide-in-left [animation-delay:100ms]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <Check size={20} className="text-accent-foreground" />
                    </div>
                    <span className="font-semibold text-secondary-foreground">Halal</span>
                  </div>
                  <p className="text-sm text-secondary-foreground/70">
                    Semua bahan baku berkualitas dan halal
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl overflow-hidden shadow-card animate-slide-in-right">
                  <img
                    src={food2}
                    alt="Fameals catering"
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Makanan Sehat & Lezat untuk Setiap Momen
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Fameals Bandung adalah penyedia katering makanan harian sehat non MSG dengan 
              variasi menu dan harga terjangkau. Kami menyediakan produk katering makanan 
              untuk makan siang dan snack anak sekolah, keluarga, acara-acara tertentu 
              seperti ulang tahun atau seminar, dan makan siang karyawan.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
