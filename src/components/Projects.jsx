import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ticTacToe from "../assets/img/tic-tac-toe.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const ProjectsComponent = () => {
  const projects = [
    {
      title: "Tic Tac Toe",
      description: "Its a basic tic tac toe game.",
      imgUrl: ticTacToe,
      projectUrl: "https://tayalshivu1.github.io/TicTacToe/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Take a moment to explore the projects I’ve worked on. I’m
                    excited to share my work with you!
                  </p>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
