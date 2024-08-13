import { Container, Row, Col } from "react-bootstrap";
import { SocialIconsComponent } from "./SocialIcons";

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>SHIVAM TAYAL</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <SocialIconsComponent />
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
