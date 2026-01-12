import { Phone, Mail, MapPin, Instagram, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Hubungi Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Siap Melayani Kebutuhan Katering Anda
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Hubungi kami untuk informasi lebih lanjut, pemesanan, atau konsultasi 
              menu sesuai kebutuhan Anda. Tim kami siap membantu dengan ramah dan responsif.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/6281323966051"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                  <Phone size={22} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">0813-2396-6051</p>
                </div>
              </a>

              <a
                href="mailto:famealsfoods@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">famealsfoods@gmail.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/fameals"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Instagram size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="font-semibold text-foreground">@fameals</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lokasi</p>
                  <p className="font-semibold text-foreground">Bandung, Jawa Barat</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Jam Operasional</p>
                  <p className="font-semibold text-foreground">Senin - Sabtu, 07.00 - 17.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex items-center">
            <div className="w-full bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={36} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Pesan Sekarang via WhatsApp
              </h3>
              <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
                Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan katering Anda
              </p>
              <a
                href="https://wa.me/6281323966051?text=Halo Fameals, saya ingin bertanya tentang menu katering"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone size={20} />
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
