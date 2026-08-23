import { ArrowUpRight, Images } from "lucide-react";
import "./Gallery.css";

function Gallery() {
  const galleryItems = [
    {
      title: "DANCE MOMENTS",
      category: "Dance",
      image:
        "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "ZUMBA ENERGY",
      category: "Zumba",
      image:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "OUR STUDENTS",
      category: "Studio",
      image:
        "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "FITNESS JOURNEY",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <p className="gallery-tag">
          <Images size={15} />
          RK DANCE & FITNESS STUDIO
        </p>

        <h1>
          STUDIO <span>GALLERY</span>
        </h1>

        <p className="gallery-description">
          A collection of powerful moments, energetic movements,
          smiles and memories from RK Dance & Fitness Studio.
        </p>
      </section>

      <section className="gallery-section">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">
                <span>{item.category}</span>

                <div>
                  <h2>{item.title}</h2>

                  <ArrowUpRight size={26} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Gallery;