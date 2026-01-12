import { ArrowRight } from "lucide-react";
import food3 from "@/assets/food-3.jpg";
import food4 from "@/assets/food-4.jpg";
import food5 from "@/assets/food-5.jpg";
import food6 from "@/assets/food-6.jpg";

const products = [
  {
    image: food3,
    title: "Lunch Catering",
    description: "Katering makan siang dewasa dan anak (Personal & Family)",
    tag: "Populer",
  },
  {
    image: food4,
    title: "Frozen Food",
    description: "Aneka frozen food dan menu spesial siap santap",
    tag: "Best Seller",
  },
  {
    image: food5,
    title: "Tumpeng",
    description: "Aneka tumpeng regular dan tumpeng anak untuk acara spesial",
    tag: null,
  },
  {
    image: food6,
    title: "Kids Event",
    description: "Ricebowl anak dan bento characters untuk ulang tahun",
    tag: null,
  },
];

const moreProducts = [
  "Paket Nasi Box untuk Seminar & Pengajian",
  "Paket Snack untuk Acara",
  "Paket Nasi Box Jumat Berbagi",
  "Menu Spesial Lebaran",
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Produk Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beragam Pilihan Menu Sehat
          </h2>
          <p className="text-lg text-muted-foreground">
            Dari katering harian hingga acara spesial, kami siap memenuhi kebutuhan kuliner Anda
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-card-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* More Products */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="font-bold text-xl text-card-foreground mb-6">
            Produk Lainnya
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {moreProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{product}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/6281323966051"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Lihat semua menu di Instagram kami
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
