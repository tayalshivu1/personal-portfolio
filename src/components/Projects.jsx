import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ticTacToe from "../assets/img/tic-tac-toe.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import todoListApp from "../assets/img/todo-list.png";
import aiAssistant from "../assets/img/ai-assistant.png";
import expenseTracker from "../assets/img/expense-tracker.png";
import TrackVisibility from "react-on-screen";

export const ProjectsComponent = () => {
  const projects = [
    {
      title: "Tic Tac Toe",
      description: "Its a basic tic tac toe game.",
      imgUrl: ticTacToe,
      projectUrl: "https://tayalshivu1.github.io/TicTacToe/",
    },
    {
      title: "Todo List App",
      description: "Todo List App",
      imgUrl: todoListApp,
      projectUrl: "https://todo-list-react-omega-gray.vercel.app/",
    },
    {
      title: "AI Powered Assistant",
      description:
        "AI-powered developer assistant that explains code and answers programming questions using LLM APIs. Built with React, Node.js, and Groq AI with markdown rendering and syntax highlighting.",
      imgUrl: aiAssistant,
      projectUrl: "https://ai-code-assistant-flame.vercel.app/",
    },
    {
      title: "Expense tracker app",
      description:
        "Created a full-stack MERN expense tracker with authentication, transaction management, and real-time dashboard updates. Implemented pagination, filtering, and responsive UI for a seamless user experience.",
      imgUrl: expenseTracker,
      projectUrl: "https://expense-tracker-mern-kit6.vercel.app/",
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
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
