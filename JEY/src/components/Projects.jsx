
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    title: "AttachReady Kenya",
    category: "Full-Stack Platform",
    description:
      "A platform designed to help Kenyan university students discover and process industrial attachment opportunities through a modern digital experience.",
    technologies: ["Next.js", "React", "Prisma", "PostgreSQL", "NextAuth"],
    status: "In Development",
    github: "https://github.com/jessejohnstone/ATTACHO",
    demo: "#",
  },
  {
    number: "02",
    title: "TakaSmart Rewards",
    category: "React / TypeScript",
    description:
      "A smart recycling and rewards platform demonstrating modern frontend architecture, user engagement, data-driven features and a scalable application experience.",
    technologies: ["React", "TypeScript", "Tailwind", "Supabase"],
    status: "Featured Project",
    github: "https://github.com/jessejohnstone/taka-smart-rewards",
    demo: "https://taka-smart-rewards.vercel.app",
  },
  {
    number: "03",
    title: "Calm Corner",
    category: "Web Application",
    description:
      "A responsive wellness web application featuring mood tracking, journaling, breathing exercises, motivational quotes and interactive charts.",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js"],
    status: "Live",
    github: "https://github.com/jessejohnstone/calm-conner",
    demo: "https://calm-conner.vercel.app",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-container">

        <div className="projects-heading">
          <div>
            <p>Selected work</p>
            <h2>Projects <span>&</span> Experience</h2>
          </div>

          <p className="projects-intro">
            A selection of projects that demonstrate my ability to turn
            ideas into practical, functional and user-focused software.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <Reveal key={project.number}>
              <article className="project-card">
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>

                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link project-demo"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;