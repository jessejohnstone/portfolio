// src/components/Contact.jsx
```jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const SERVICE_ID = "service_76v033d";
  const TEMPLATE_ID = "template_ph3ssgj";
  const PUBLIC_KEY = "4Tb7n9lai4OarLhzP";

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="contact-heading">
          <p>Let's connect</p>

          <h2>
            Let's Build Something <span>Great</span>
          </h2>

          <p className="contact-intro">
            I'm open to internship opportunities, junior developer roles,
            freelance projects and collaborations. If you have an idea or
            opportunity, I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">@</div>

              <div>
                <span>Email</span>
                <a href="mailto:jessejohnstone203@gmail.com">
                  jessejohnstone203@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">☎</div>

              <div>
                <span>Phone</span>
                <a href="tel:+254702732396">
                  +254 702732396
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">⌖</div>

              <div>
                <span>Location</span>
                <p>Kenya</p>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/jessejohnstone"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="title">Subject</label>

              <input
                type="text"
                id="title"
                name="title"
                placeholder="Let's work together"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project or opportunity..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-button"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message ↗"}
            </button>

            {status === "success" && (
              <p className="form-success">
                ✓ Message sent successfully. I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="form-error">
                ✕ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        <div className="contact-footer">
          <p>© 2026 Johnstone Oroni. Built with React.</p>

          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
```;
