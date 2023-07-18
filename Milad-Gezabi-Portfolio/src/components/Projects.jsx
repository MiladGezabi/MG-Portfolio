import "../components-style/Projects.css";
import { projects } from "../sub-components/projects.js";

function Projects() {
  return (
    <section className="projects">
      <h2> Projects </h2>
      <p>
        {" "}
        "You don´t Understand anything until you learn it more than one way"
        <span>-Marvin Minsky</span>
      </p>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-box" key={project.name}>
            <img className="p-image" src={project.picture} alt={project.name} />
            <div className="project-text">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>
                Demo Link: <a href={project.siteLink}>{project.siteLink}</a>
              </p>
              <p>
                Github Link:{" "}
                <a href={project.githubLink}>{project.githubLink}</a>
              </p>
              <div className="icon-box">
              {project["made with"].map((logo, index) => (
                <img className="icon-image" key={index} src={logo} alt={logo} />
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
