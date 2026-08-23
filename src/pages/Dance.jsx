import { Link } from "react-router-dom";
import {
  ArrowRight,
  Music,
  Users,
  Sparkles,
  Clock,
  ChevronRight,
} from "lucide-react";

function Dance() {
  const styles = [
    {
      number: "01",
      title: "BOLLYWOOD",
      text: "High-energy moves with the latest Bollywood beats.",
    },
    {
      number: "02",
      title: "FREESTYLE",
      text: "Express yourself and create your own movement.",
    },
    {
      number: "03",
      title: "HIP HOP",
      text: "Powerful moves, attitude and next-level energy.",
    },
  ];

  return (
    <main className="dance-page-main">
      {/* HERO */}
      <section className="dance-hero">
        <div className="dance-hero-overlay"></div>

        <div className="dance-hero-content">
          <p className="page-tag">
            <Music size={15} />
            RK DANCE & FITNESS STUDIO
          </p>

          <h1>
            DANCE
            <br />
            <span>WITHOUT LIMITS.</span>
          </h1>

          <p className="dance-hero-text">
            Discover your rhythm, build confidence and express
            yourself through the power of movement.
          </p>

          <div className="dance-hero-buttons">
            <Link to="/registration" className="primary-btn">
              JOIN DANCE CLASS
              <ArrowRight size={19} />
            </Link>

            <a href="#styles" className="secondary-btn">
              EXPLORE STYLES
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        <div className="dance-vertical-text">
          MOVE WITH PASSION
        </div>

        <div className="dance-scroll">
          <span>SCROLL</span>
          <div></div>
        </div>
      </section>

      {/* INTRO */}
      <section className="dance-intro">
        <div className="dance-intro-number">01</div>

        <div className="dance-intro-content">
          <p className="section-label">MORE THAN JUST DANCE</p>

          <h2>
            FIND YOUR <span>RHYTHM.</span>
          </h2>

          <p>
            Dance is not just about learning steps. It is about
            confidence, expression, energy and becoming the best
            version of yourself.
          </p>

          <div className="dance-features">
            <div>
              <Users size={24} />
              <span>ALL LEVELS</span>
            </div>

            <div>
              <Sparkles size={24} />
              <span>EXPERT TRAINING</span>
            </div>

            <div>
              <Clock size={24} />
              <span>FLEXIBLE BATCHES</span>
            </div>
          </div>
        </div>
      </section>

      {/* DANCE STYLES */}
      <section className="dance-styles" id="styles">
        <div className="section-heading">
          <p>CHOOSE YOUR STYLE</p>

          <h2>
            MOVE YOUR <span>WAY.</span>
          </h2>
        </div>

        <div className="dance-style-grid">
          {styles.map((style) => (
            <div className="dance-style-card" key={style.number}>
              <span className="style-number">
                {style.number}
              </span>

              <div className="style-bottom">
                <h3>{style.title}</h3>

                <p>{style.text}</p>

                <Link to="/registration">
                  JOIN CLASS
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="dance-cta">
        <p>READY TO START?</p>

        <h2>
          LET'S <span>DANCE.</span>
        </h2>

        <Link to="/registration" className="cta-button">
          JOIN RK DANCE STUDIO
          <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  );
}

export default Dance;