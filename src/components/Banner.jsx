import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";

const description1 =
  "Full-stack JavaScript developer experienced in building scalable web applications using modern technologies including React, Angular, Node.js, Express, and MongoDB. Skilled in developing robust front-end interfaces as well as designing and implementing efficient backend services and APIs that power modern web applications.";
const description2 =
  "Proficient in JavaScript, TypeScript, HTML, and CSS, with strong experience building component-driven user interfaces, integrating RESTful APIs, and developing server-side applications using Node.js and Express. Comfortable working across the full application stack to build maintainable, scalable, and high-performance solutions.";
const description3 =
  "Passionate about translating ideas into reliable digital products and continuously expanding expertise across the modern JavaScript ecosystem. Committed to writing clean, efficient code and delivering end-to-end solutions that provide seamless user experiences and robust backend functionality.";

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
                window.open("mailto:shivamtayal14@gmail.com", "_blank")
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
