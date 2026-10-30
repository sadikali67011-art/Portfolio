import {
  aboutMe,
  educationList,
  experiences,
  extraCurricular,
  projects,
  skills,
  socialMedia,
} from "../constants";

const Resume = () => (
  <main className="resume-page">
    <div className="resume-actions">
      <a href="/" className="resume-back">
        Back to portfolio
      </a>
      <button type="button" onClick={() => window.print()} className="resume-print">
        Save as PDF / Print
      </button>
    </div>

    <article className="resume-sheet">
      <header className="resume-header">
        <h1>{aboutMe.name}</h1>
        <p className="resume-role">Software Developer</p>
        <p className="resume-contact">
          {aboutMe.location} ·{" "}
          <a href="tel:+917534894896">+91 7534894896</a> ·{" "}
          <a href="mailto:sadikali7011@gmail.com">sadikali7011@gmail.com</a>
        </p>
        <p className="resume-contact">
          {socialMedia
            .filter(({ id }) => id === "linkedin" || id === "github")
            .map((social, index) => (
              <span key={social.id}>
                {index > 0 ? " · " : ""}
                <a href={social.link}>{social.label}</a>
              </span>
            ))}
        </p>
      </header>

      <section className="resume-section">
        <h2>Professional Summary</h2>
        <p>{aboutMe.intro}</p>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="resume-skills">
          {skills
            .filter(({ title }) => title !== "Soft Skills")
            .map((group) => (
              <p key={group.title}>
                <strong>{group.title}:</strong>{" "}
                {group.items.map(({ name }) => name).join(", ")}
              </p>
            ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        {experiences.map((experience) =>
          experience.positions.map((position) => (
            <div className="resume-entry" key={`${experience.organisation}-${position.title}`}>
              <div className="resume-entry-heading">
                <strong>{position.title}</strong>
                <span>{position.duration}</span>
              </div>
              <p className="resume-muted">{experience.organisation}</p>
              <ul>
                {position.content.map((item) => (
                  <li key={item.text}>{item.text}</li>
                ))}
              </ul>
            </div>
          )),
        )}
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        {projects.map((project) => (
          <div className="resume-entry" key={project.id}>
            <div className="resume-entry-heading">
              <strong>{project.title}</strong>
            </div>
            <p>{project.content}</p>
            <p className="resume-muted">
              {project.stack.map(({ name }) => name).join(" · ")}
            </p>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        {educationList.map((education) => (
          <div className="resume-entry" key={education.id}>
            <div className="resume-entry-heading">
              <strong>{education.degree}</strong>
              <span>{education.duration}</span>
            </div>
            <p className="resume-muted">{education.title}</p>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <ul className="resume-certifications">
          {extraCurricular.map((certification) => (
            <li key={certification.id}>
              <strong>{certification.title}</strong> — {certification.organisation},{" "}
              {certification.duration}
            </li>
          ))}
        </ul>
      </section>
    </article>
  </main>
);

export default Resume;
