import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import galleryPreview from "@/assets/gallery-preview.jpg";
import eventsPreview from "@/assets/events-preview.jpg";
import activitiesPreview from "@/assets/activities-preview.jpg";
import aboutPreview from "@/assets/about-preview.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  { src: galleryPreview, alt: "Art exhibition", category: "Art" },
  { src: eventsPreview, alt: "Community festival", category: "Events" },
  { src: activitiesPreview, alt: "Outdoor activities", category: "Activities" },
  { src: aboutPreview, alt: "Team photo", category: "Team" },
  { src: heroBg, alt: "Community gathering", category: "Community" },
  { src: galleryPreview, alt: "Gallery exhibition", category: "Art" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-up">
            Our Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
            A visual journey through our community's most memorable moments and creative expressions.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg cursor-pointer opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
