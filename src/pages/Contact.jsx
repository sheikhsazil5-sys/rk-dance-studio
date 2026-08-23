import { Phone, MapPin, Clock, Send } from "lucide-react";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <p className="contact-tag">RK DANCE & FITNESS STUDIO</p>

        <h1>
          LET'S <span>CONNECT.</span>
        </h1>

        <p className="contact-description">
          Have a question? Want to join a batch? Get in touch with us and
          start your Dance or Zumba journey today.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-content">
        {/* LEFT SIDE */}
        <div className="contact-details">
          <p className="section-small-title">GET IN TOUCH</p>

          <h2>
            WE'D LOVE TO
            <br />
            <span>HEAR FROM YOU.</span>
          </h2>

          <div className="contact-info-list">
            <div className="contact-info-card">
              <div className="contact-icon">
                <Phone size={22} />
              </div>

              <div>
                <span>CALL US</span>
                <strong>+91 XXXXX XXXXX</strong>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>

              <div>
                <span>VISIT US</span>
                <strong>RK DANCE & FITNESS STUDIO</strong>
                <p>Your Studio Address</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <Clock size={22} />
              </div>

              <div>
                <span>STUDIO HOURS</span>
                <strong>Monday - Saturday</strong>
                <p>Morning & Evening Batches</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <Send size={22} />
              </div>

              <div>
                <span>FOLLOW US</span>
                <strong>@rkdancefitness</strong>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form-box">
          <p className="form-tag">DROP US A MESSAGE</p>

          <h3>LET'S TALK.</h3>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent successfully!");
            }}
          >
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />

              <input type="tel" placeholder="Phone Number" required />
            </div>

            <input type="email" placeholder="Email Address" required />

            <select required>
              <option value="">Select Your Interest</option>
              <option>Dance Classes</option>
              <option>Zumba Classes</option>
              <option>Girls Batch</option>
              <option>Ladies Batch</option>
              <option>Boys Batch</option>
              <option>Gents Batch</option>
            </select>

            <textarea
              placeholder="Write your message..."
              rows="5"
              required
            ></textarea>

            <button type="submit">
              SEND MESSAGE
              <Send size={18} />
            </button>
          </form>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="contact-bottom">
        <p>READY TO MOVE?</p>

        <h2>
          START YOUR
          <br />
          <span>JOURNEY TODAY.</span>
        </h2>
      </section>
    </main>
  );
}

export default Contact;