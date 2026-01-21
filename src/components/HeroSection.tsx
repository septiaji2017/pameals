import { ArrowRight, Leaf, Clock, ShieldCheck } from "lucide-react";
import heroBanner from "@/assets/hero-banner-v2.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Healthy catering meals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Leaf size={16} className="text-accent" />
            <span className="text-sm font-medium text-background">100% Tanpa MSG</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-background leading-tight mb-6 animate-fade-in [animation-delay:100ms]">
            Katering Sehat untuk{" "}
            <span className="text-primary">Setiap Hari</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed animate-fade-in [animation-delay:200ms]">
            Fameals Bandung menyediakan katering makanan harian sehat tanpa MSG dengan 
            variasi menu lezat dan harga terjangkau untuk keluarga, sekolah, dan kantor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in [animation-delay:300ms]">
            <a
              href="https://wa.me/6281323966051"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:opacity-90 transition-all"
            >
              {/* 
                Text Logic:
                - Default: translate-x-3 (Nudged right to appear centered because the invisible arrow takes space on the right)
                - Hover: translate-x-0 (Slides left to its natural position)
              */}
              <span className="transition-transform duration-300 translate-x-3 group-hover:translate-x-0">
                Pesan via WhatsApp
              </span>

              {/* 
                Arrow Logic:
                - Always takes up space (so button width never changes)
                - Default: Invisible (opacity-0)
                - Hover: Visible (opacity-100)
              */}
              <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowRight size={18} />
              </span>
            </a>
            <a
              href="https://drive.google.com/file/d/115F-7fRImaPNGjggatod3bw5oTohumG6/view?usp=drive_link"
              className="inline-flex items-center justify-center px-8 py-4 bg-background/10 backdrop-blur-sm text-background border border-background/20 rounded-full font-semibold text-base hover:bg-background/20 transition-colors"
            >
              Lihat Menu
            </a>
          </div>
        </div>
        <div className="w-full">
        {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-10 animate-fade-in [animation-delay:400ms]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <ShieldCheck size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-background">Non MSG</p>
                <p className="text-sm text-background/70">Lezat alami & aman dikonsumsi</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-background">Tepat Waktu</p>
                <p className="text-sm text-background/70">Sampai sebelum jam makan</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Leaf size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-background">Bahan Berkualitas</p>
                <p className="text-sm text-background/70">Dipasok dari sumber pilihan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
