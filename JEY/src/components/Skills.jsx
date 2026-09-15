const skillCategories = [
  {
    title: "Frontend",
    description: "Building modern and responsive user interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
  },
  {
    title: "Backend",
    description: "Building the logic that powers web applications.",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    description: "Working with structured and application data.",
    skills: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    title: "Tools",
    description: "Tools I use to build and manage projects.",
    skills: ["Git", "GitHub", "VS Code", "NPM"],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">

        <div className="skills-heading">
          <p>My capabilities</p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p className="skills-intro">
            Technologies I use to transform ideas into reliable,
            scalable and user-friendly digital experiences.
          </p>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <div className="skill-card" key={category.title}>

              <div className="skill-number">
                0{index + 1}
              </div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;