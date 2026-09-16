function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-container">

        <div className="contact-heading">
          <p>Let's connect</p>
          <h2>Let's Build Something <span>Great</span></h2>
          <p className="contact-intro">
            I'm open to internship opportunities, junior developer roles,
            freelance projects and collaborations. If you have an idea or
            opportunity, I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">

            <div className="contact-card">
              <div className="contact-icon">@</div>
              <div>
                <span>Email</span>
                <a href="mailto:your-email@example.com">
                  your-email@example.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">☎</div>
              <div>
                <span>Phone</span>
                <a href="tel:+254700000000">
                  +254 700 000 000
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

          {/* Contact Form */}
          <form className="contact-form">

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
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
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

            <button type="submit" className="contact-button">
              Send Message <span>↗</span>
            </button>

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