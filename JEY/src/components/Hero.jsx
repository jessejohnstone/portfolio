
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Johnstone <span>Oroni</span>
          </h1>

          <h2>
            Frontend Developer & Software Engineer
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-focused web applications
            that solve real-world problems and create meaningful digital
            experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              Let's Talk
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/jessejohnstone"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img
              src="/profile.jpg"
              alt="Johnstone Oroni"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;

