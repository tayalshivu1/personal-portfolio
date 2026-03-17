import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import "../App.css";

export const SkillsComponent = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <div className="skills">
                <div className="skills-wrapper">
                  <div className="skill-bx wow zoomIn">
                    <h2>Frontend</h2>
                  </div>
                  <p className="skills-section">
                    React | Angular | JavaScript (ES6+) | TypeScript | HTML5 |
                    CSS3 | Tailwind CSS
                  </p>
                </div>
                <div>
                  <div className="skill-bx wow zoomIn">
                    <h2>Backend</h2>
                  </div>
                  <p>
                    Node.js | Express.js | REST API Development | Authentication
                    (JWT)
                  </p>
                </div>
                <div>
                  <div className="skill-bx wow zoomIn">
                    <h2>Database</h2>
                  </div>
                  <p>MongoDB | Mongoose </p>
                </div>
                <div>
                  <div className="skill-bx wow zoomIn">
                    <h2>AI / LLM</h2>
                  </div>
                  <p>
                    {" "}
                    LLM API Integration | Prompt Engineering | Groq API |
                    AI-assisted developer tools
                  </p>
                </div>
                <div>
                  <div className="skill-bx wow zoomIn">
                    <h2>Tools</h2>
                  </div>
                  <p>Git | GitHub | Vercel | Render | Postman | VS Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
