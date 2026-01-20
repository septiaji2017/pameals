import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ibu Sari",
    role: "Pelanggan Rumahan",
    content:
      "Makanannya enak dan sehat, anak-anak suka! Pengantaran selalu tepat waktu. Sudah langganan 6 bulan dan sangat puas.",
    rating: 5,
  },
  {
    name: "Bapak Rudi",
    role: "HRD PT. Maju Bersama",
    content:
      "Untuk katering kantor, Fameals sangat recommended. Menu bervariasi, porsi pas, dan karyawan senang. Harga juga terjangkau.",
    rating: 5,
  },
  {
    name: "Ibu Dewi",
    role: "Guru TK Tunas Bangsa",
    content:
      "Snack untuk anak-anak murid selalu fresh dan sehat. Orangtua murid juga senang karena tidak pakai MSG.",
    rating: 5,
  },
  {
    name: "Mas Adi",
    role: "Event Organizer",
    content:
      "Sudah beberapa kali pakai Fameals untuk event seminar. Nasi box-nya selalu dapat pujian dari peserta!",
    rating: 5,
  },
  {
    name: "Ibu Lina",
    role: "Pelanggan Family",
    content:
      "Paket family-nya worth it banget! 4 porsi cukup untuk sekeluarga. Rasanya homemade dan konsisten enaknya.",
    rating: 5,
  },
  {
    name: "Bapak Hendra",
    role: "Pelanggan Kantor",
    content:
      "Admin-nya ramah dan responsif. Bisa request menu khusus juga. Pelayanan terbaik!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-lg text-muted-foreground">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex w-full items-center justify-center">
                <Quote size={24} className="text-primary/30 mb-4" />
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default ReviewsSection;