import { Link } from "react-router-dom";
import {
  ArrowRight,
  Music,
  Sparkles,
  Users,
  Clock,
} from "lucide-react";

function Batches() {
  const batches = [
    {
      number: "01",
      title: "GIRLS",
      subtitle: "DANCE & ZUMBA",
      icon: <Sparkles size={25} />,
      description:
        "Fun, energetic and confidence-building Dance and Zumba sessions.",
    },
    {
      number: "02",
      title: "LADIES",
      subtitle: "DANCE & ZUMBA",
      icon: <Music size={25} />,
      description:
        "Stay active, enjoy the music and move with confidence and energy.",
    },
    {
      number: "03",
      title: "BOYS",
      subtitle: "DANCE & ZUMBA",
      icon: <Users size={25} />,
      description:
        "High-energy sessions designed for movement, rhythm and confidence.",
    },
    {
      number: "04",
      title: "GENTS",
      subtitle: "DANCE & ZUMBA",
      icon: <Clock size={25} />,
      description:
        "Stay active, enjoy powerful movements and experience the energy.",
    },
  ];

  return (
    <main className="batches-page">
      {/* HERO */}
      <section className="batches-hero">
        <div className="batches-hero-glow"></div>

        <div className="batches-hero-content">
          <p className="page-tag">
            <Users size={15} />
            RK DANCE & FITNESS STUDIO
          </p>

          <h1>
            FIND YOUR
            <br />
            <span>BATCH.</span>
          </h1>

          <p>
            Everyone has their own rhythm. Choose the batch
            that suits you and start your Dance or Zumba journey.
          </p>
        </div>

        <div className="batches-side-text">
          ONE STUDIO • FOUR BATCHES • ENDLESS ENERGY
        </div>
      </section>

      {/* BATCHES */}
      <section className="batch-section">
        <div className="section-heading">
          <p>CHOOSE YOUR GROUP</p>

          <h2>
            OUR <span>BATCHES</span>
          </h2>
        </div>

        <div className="premium-batch-grid">
          {batches.map((batch) => (
            <div className="premium-batch-card" key={batch.number}>
              <div className="batch-card-top">
                <span className="batch-no">
                  {batch.number}
                </span>

                <div className="batch-icon">
                  {batch.icon}
                </div>
              </div>

              <div className="batch-card-middle">
                <p>{batch.subtitle}</p>

                <h3>{batch.title}</h3>

                <span className="gold-line"></span>

                <div className="batch-card-description">
                  {batch.description}
                </div>
              </div>

              <Link
                to="/registration"
                className="batch-join-btn"
              >
                JOIN THIS BATCH
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CLASSES INFO */}
      <section className="batch-info-section">
        <div className="batch-info-left">
          <p className="section-label">
            ONE PLACE. ONE ENERGY.
          </p>

          <h2>
            DANCE.
            <br />
            <span>ZUMBA.</span>
          </h2>
        </div>

        <div className="batch-info-right">
          <p>
            At RK Dance & Fitness Studio, every batch gets
            the same energy, excitement and passion.
          </p>

          <div className="batch-info-boxes">
            <div>
              <span>01</span>
              <strong>DANCE</strong>
              <p>Learn, move and express yourself.</p>
            </div>

            <div>
              <span>02</span>
              <strong>ZUMBA</strong>
              <p>Move to the music and enjoy the energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="batch-cta">
        <p>READY TO JOIN?</p>

        <h2>
          YOUR RHYTHM
          <br />
          <span>STARTS HERE.</span>
        </h2>

        <Link to="/registration" className="batch-cta-btn">
          REGISTER NOW
          <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  );
}

export default Batches;