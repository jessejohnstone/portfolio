function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">

        <div className="section-heading">
          <p>Get to know me</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>
              I turn ideas into practical digital solutions.
            </h3>

            <p>
              I'm a developer focused on building modern and user-friendly
              web applications. I enjoy taking an idea, understanding the
              problem behind it, and turning it into a working digital
              solution.
            </p>

            <p>
              My journey started with the fundamentals of web development
              and has grown into building applications with React and
              modern JavaScript technologies. I'm continuously expanding
              my skills into backend development, databases and full-stack
              engineering.
            </p>

            <p>
              I believe good software is more than code. It should be
              reliable, easy to use, maintainable and capable of solving
              a real problem.
            </p>

            <a href="#contact" className="about-button">
              Let's Work Together
            </a>
          </div>

          <div className="about-highlights">

            <div className="highlight-card">
              <span>01</span>
              <h4>Problem Solver</h4>
              <p>
                I focus on understanding the problem before building
                the solution.
              </p>
            </div>

            <div className="highlight-card">
              <span>02</span>
              <h4>Continuous Learner</h4>
              <p>
                I constantly improve my skills by building practical
                projects.
              </p>
            </div>

            <div className="highlight-card">
              <span>03</span>
              <h4>Team Mindset</h4>
              <p>
                I value communication, collaboration and clean,
                maintainable code.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;