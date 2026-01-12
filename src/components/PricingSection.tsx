import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Paket Personal",
    description: "Untuk kebutuhan makan siang harian",
    price: "25.000",
    unit: "/porsi",
    features: [
      "Nasi putih",
      "Lauk utama",
      "Sayuran segar",
      "Sambal & lalapan",
      "Pengantaran gratis*",
    ],
    popular: false,
  },
  {
    name: "Paket Family",
    description: "Untuk keluarga tercinta",
    price: "85.000",
    unit: "/4 porsi",
    features: [
      "4 porsi lengkap",
      "2 pilihan lauk",
      "2 jenis sayuran",
      "Sambal & pelengkap",
      "Pengantaran gratis",
    ],
    popular: true,
  },
  {
    name: "Paket Kantor",
    description: "Untuk makan siang karyawan",
    price: "22.000",
    unit: "/porsi (min. 20)",
    features: [
      "Menu bervariasi harian",
      "Porsi pas & mengenyangkan",
      "Packaging rapi",
      "Tepat waktu",
      "Invoice bulanan",
    ],
    popular: false,
  },
];

const additionalPackages = [
  { name: "Nasi Box Seminar", price: "Mulai 30.000" },
  { name: "Snack Box", price: "Mulai 12.000" },
  { name: "Tumpeng Anak", price: "Mulai 150.000" },
  { name: "Tumpeng Besar", price: "Mulai 350.000" },
  { name: "Bento Character", price: "Mulai 35.000" },
  { name: "Frozen Food", price: "Mulai 15.000" },
];

const PricingSection = () => {
  return (
    <section id="prices" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Daftar Harga
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Harga Terjangkau, Kualitas Terjamin
          </h2>
          <p className="text-lg text-muted-foreground">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 ${
                plan.popular
                  ? "ring-2 ring-primary shadow-card-hover scale-105"
                  : "shadow-card hover:shadow-card-hover"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                    <Star size={14} className="fill-current" />
                    Terpopuler
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-bold text-xl text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">Rp</span>
                  <span className="text-4xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/6281323966051"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>

        {/* Additional Packages */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="font-bold text-xl text-foreground text-center mb-8">
            Paket Lainnya
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 text-center shadow-card hover:shadow-card-hover transition-all"
              >
                <p className="font-semibold text-foreground text-sm mb-1">
                  {pkg.name}
                </p>
                <p className="text-primary font-bold text-sm">{pkg.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            * Harga dapat berubah sewaktu-waktu. Hubungi kami untuk informasi lebih lanjut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
