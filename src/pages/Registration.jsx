import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  User,
  Phone,
  Calendar,
  Sparkles,
} from "lucide-react";
import "./Registration.css";

function Registration() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const name = formData.get("name");
  const phone = formData.get("phone");
  const age = formData.get("age");
  const className = formData.get("class");
  const batch = formData.get("batch");
  const payment = formData.get("payment");

  const message = `*NEW RK DANCE & FITNESS REGISTRATION*

*Name:* ${name}
*Phone:* ${phone}
*Age:* ${age}
*Class:* ${className}
*Batch:* ${batch}
*Fee:* ₹1000/month
*Payment Method:* ${payment}`;

  const whatsappNumber = "919893529778";

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  setSubmitted(true);
};

  return (
    <main className="registration-page">
      <section className="registration-hero">
        <div className="registration-glow glow-one"></div>
        <div className="registration-glow glow-two"></div>

        <div className="registration-left">
          <p className="registration-tag">
            <Sparkles size={15} />
            JOIN RK DANCE & FITNESS STUDIO
          </p>

          <h1>
            START YOUR
            <br />
            <span>JOURNEY.</span>
          </h1>

          <p className="registration-description">
            Join our energetic Dance and Zumba classes and become
            a part of the RK Dance & Fitness Studio family.
          </p>

          <div className="registration-points">
            <div>
              <CheckCircle2 size={20} />
              <span>DANCE & ZUMBA CLASSES</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>SEPARATE BATCHES FOR EVERYONE</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>FUN, ENERGY & CONFIDENCE</span>
            </div>
          </div>
        </div>

        <div className="registration-form-wrapper">
          {!submitted ? (
            <>
              <div className="form-top">
                <span>RK</span>

                <div>
                  <p>JOIN THE MOVEMENT</p>
                  <h2>REGISTER NOW</h2>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>FULL NAME</label>

                    <div className="input-box">
                      <User size={18} />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>PHONE NUMBER</label>

                    <div className="input-box">
                      <Phone size={18} />
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>AGE</label>

                  <div className="input-box">
                    <Calendar size={18} />
                    <input
                      type="number"
                      placeholder="Enter your age"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>SELECT CLASS</label>

                  <select required>
                    <option value="">Choose your class</option>
                    <option>Dance</option>
                    <option>Zumba</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>SELECT BATCH</label>

                  <select required>
                    <option value="">Choose your batch</option>
                    <option>Girls</option>
                    <option>Ladies</option>
                    <option>Boys</option>
                    <option>Gents</option>
                  </select>
                </div>

<div className="fee-box">
  <div>
    <span>MONTHLY FEES</span>
    <h3>₹1000</h3>
  </div>

  <p>PER MONTH • DANCE & ZUMBA</p>
</div>
<div className="payment-methods">
  <p className="payment-method-title">CHOOSE PAYMENT METHOD</p>

  <div className="payment-options">
    <label className="payment-option">
      <input
        type="radio"
        name="payment"
        value="upi"
        required
      />

      <span className="payment-option-content">
        📱
        <span>
          <strong>PAY VIA UPI</strong>
          <small>Scan QR code and pay ₹1000</small>
        </span>
      </span>
    </label>

    <label className="payment-option">
      <input
        type="radio"
        name="payment"
        value="cash"
      />

      <span className="payment-option-content">
        💵
        <span>
          <strong>PAY CASH AT STUDIO</strong>
          <small>Pay ₹1000 directly at RK Dance & Fitness Studio</small>
        </span>
      </span>
    </label>
  </div>
</div>
                <button type="submit" className="registration-submit">
                  COMPLETE REGISTRATION
                  <ArrowRight size={19} />
                </button>
              </form>

              <p className="form-note">
                Our team will contact you after registration.
              </p>
            </>
          ) : (
            <div className="success-box">
              <div className="success-icon">
                <CheckCircle2 size={60} />
              </div>

              <p>REGISTRATION SUCCESSFUL</p>

              <h2>
                YOU'RE IN!
              </h2>

              <span>
                Thank you for joining RK Dance & Fitness Studio.
                Our team will contact you soon.
              </span>

              <button
                onClick={() => setSubmitted(false)}
                className="registration-submit"
              >
                REGISTER ANOTHER
                <ArrowRight size={19} />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Registration;