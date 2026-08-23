import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-title-line",
          {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-buttons a",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".stat",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={heroRef}>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            RK DANCE & FITNESS STUDIO
          </p>

          <h1>
            <span className="hero-title-line">MOVE.</span>
            <span className="hero-title-line">GROOVE.</span>
            <span className="hero-title-line transform-text">
              TRANSFORM.
            </span>
          </h1>

          <p className="hero-description">
            Where passion meets movement. Experience Dance,
            Zumba and Fitness like never before.
          </p>

          <div className="hero-buttons">
            <Link to="/registration" className="primary-btn">
              JOIN NOW
              <ArrowRight size={19} />
            </Link>

            <Link to="/dance" className="secondary-btn">
              EXPLORE CLASSES
              <Play size={16} />
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <strong>
              250<span>+</span>
            </strong>
            <p>ACTIVE STUDENTS</p>
          </div>

          <div className="stat">
            <strong>4</strong>
            <p>SPECIAL BATCHES</p>
          </div>

          <div className="stat">
            <strong>
              100<span>%</span>
            </strong>
            <p>ENERGY & FUN</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;