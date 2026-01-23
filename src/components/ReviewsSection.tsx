import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Natasya",
    role: "Mahasiswi",
    content:
      "Halo Kak, makasih banyak ya buat catering seminggunya. Jujur ngebantu banget soalnya posisi saya di Palembang, sedangkan Kakek di Bandung. Kemarin Kakek bilang makanannya enak dan buah-buahannya seger. Pengirimannya juga selalu tepat waktu. Recommended banget!",
  },
  {
    name: "Thia Astisia",
    role: "Dokter Gigi Spesialis",
    content:
      "Kateringnya sudah sampai ya, Kak. Alhamdulillah seneng banget liatnya, anak saya yang biasanya susah makan eh kali ini abisnya cepet banget! Suka banget dia sama menu ayam dan tahunya. Makasih ya!",
  },
  {
    name: "Rasima Guntursa",
    role: "Karyawan Swasta",
    content:
      "Rasa makanannya enak dan pelayanannya sangat baik. Yang paling saya apresiasi adalah pengantarannya yang selalu tertib dan tepat waktu.",
  },
  {
    name: "Farida",
    role: "Ibu Rumah Tangga",
    content:
      "Masakannya enak banget! Bahkan suami saya yang berasal dari luar negeri pun sangat cocok dan suka sekali dengan menu harian dari Fameals.",
  },
  {
    name: "Hanataria",
    role: "Wiraswasta",
    content:
      "Berkat Fameals, ibu saya yang sedang sakit jadi mau makan lagi karena rasanya enak. Pelayanannya ramah dan kurirnya pun sangat bersemangat!",
  },
  {
    name: "Mirna Zaharni",
    role: "Ibu Rumah Tangga",
    content:
      "Ibu mertua saya suka karena rasanya enak dan pilihannya bervariasi. Senang bisa memberikan katering sehat tanpa MSG yang disukai seluruh keluarga.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-[#EE7C2B]/10 rounded-full">
            <span className="text-[#FF9500] text-sm font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-wider">
              Testimoni
            </span>
          </div>
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
              className="bg-card flex flex-col justify-between rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex w-full items-center">
                <Quote size={24} className="text-primary/30 mb-4" />
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-[#CC7700]">{review.role}</p>
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