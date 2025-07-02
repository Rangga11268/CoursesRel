import { Container, Col, Row } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

export default function SyaratPage() {
  return (
    <div className="syarat-page">
      <div className="syarat-ketentuan">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2">Syarat & Ketentuan</h1>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
