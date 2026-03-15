import { Col } from "react-bootstrap";
import "../App.css";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        onClick={() => {
          window.open(projectUrl, "_blank");
        }}
      >
        <img className="project-card-image" src={imgUrl} alt="url" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
