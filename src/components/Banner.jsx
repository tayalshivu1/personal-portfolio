import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";

const description1 =
  "With 3+ years of experience in frontend development, I bring a robust skill set and a passion for creating dynamic, user-centric web applications. My expertise spans modern JavaScript frameworks including React and Angular, allowing me to build seamless and interactive interfaces.";
const description2 =
  "Proficient in HTML, CSS, and TypeScript, I ensure that my designs are not only visually appealing but also maintainable and scalable. My background in JavaScript empowers me to implement complex functionality with clean and efficient code.";
const description3 =
  "I thrive on transforming concepts into engaging digital experiences, and I am committed to continuous learning and adaptation to new technologies. Let’s collaborate to bring your next project to life with precision and creativity.";

export const BannerComponent = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    console.log("full text", fullText);
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm `}
              <span className="wrap">{text}</span>
            </h1>
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
            <button
              onClick={() =>
                (window.location.href = "mailto:shivamtayal14@gmail.com")
              }
            >
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
