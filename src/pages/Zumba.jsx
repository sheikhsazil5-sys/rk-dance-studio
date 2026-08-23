import { Link } from "react-router-dom";
import {
  ArrowRight,
  Music,
  HeartPulse,
  Flame,
  Users,
  Play,
} from "lucide-react";

function Zumba() {
  return (
    <main className="zumba-page-main">
      {/* HERO */}
      <section className="zumba-hero">
        <div className="zumba-hero-overlay"></div>

        <div className="zumba-hero-content">
          <p className="page-tag">
            <Music size={15} />
            RK DANCE & FITNESS STUDIO
          </p>

          <h1>
            FEEL THE
            <br />
            <span>RHYTHM.</span>
          </h1>

          <p className="zumba-hero-text">
            Dance, sweat and feel the energy with exciting
            Zumba sessions full of music and movement.
          </p>

          <div className="zumba-hero-buttons">
            <Link to="/registration" className="primary-btn">
              JOIN ZUMBA
              <ArrowRight size={19} />
            </Link>

            <a href="#about-zumba" className="secondary-btn">
              EXPLORE ZUMBA
              <Play size={16} />
            </a>
          </div>
        </div>

        <div className="zumba-vertical-text">
          DANCE • SWEAT • SMILE
        </div>

        <div className="zumba-scroll">
          <span>SCROLL TO MOVE</span>
          <div></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="zumba-intro" id="about-zumba">
        <div className="zumba-big-text">Z</div>

        <div className="zumba-intro-content">
          <p className="section-label">
            MORE THAN A WORKOUT
          </p>

          <h2>
            MOVE. SWEAT.
            <br />
            <span>ENJOY.</span>
          </h2>

          <p className="zumba-description">
            Zumba is all about enjoying the music while moving
            your body. Every session is full of energy, fun and
            exciting dance movements.
          </p>

          <div className="zumba-features">
            <div>
              <Music size={26} />
              <span>MUSIC & MOVEMENT</span>
            </div>

            <div>
              <HeartPulse size={26} />
              <span>STAY ACTIVE</span>
            </div>

            <div>
              <Flame size={26} />
              <span>HIGH ENERGY</span>
            </div>

            <div>
              <Users size={26} />
              <span>GROUP CLASSES</span>
            </div>
          </div>
        </div>
      </section>

      {/* ZUMBA EXPERIENCE */}
      <section className="zumba-experience">
        <div className="section-heading">
          <p>THE RK EXPERIENCE</p>

          <h2>
            WHY <span>ZUMBA?</span>
          </h2>
        </div>

        <div className="zumba-grid">
          <div className="zumba-experience-card">
            <span>01</span>
            <h3>ENERGY</h3>
            <p>
              Feel the beat and enjoy every exciting
              movement with nonstop positive energy.
            </p>
          </div>

          <div className="zumba-experience-card">
            <span>02</span>
            <h3>FUN</h3>
            <p>
              No boring workouts. Just music, dance,
              smiles and an amazing group atmosphere.
            </p>
          </div>

          <div className="zumba-experience-card">
            <span>03</span>
            <h3>FITNESS</h3>
            <p>
              Keep moving, stay active and enjoy a
              healthier lifestyle through dance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="zumba-cta">
        <p>READY TO MOVE?</p>

        <h2>
          LET'S <span>ZUMBA.</span>
        </h2>

        <Link to="/registration" className="zumba-cta-button">
          JOIN THE ZUMBA CLASS
          <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  );
}

export default Zumba;