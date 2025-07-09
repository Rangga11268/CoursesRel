import { Accordion, Container, Row, Col } from "react-bootstrap";
import { faq } from "../data";

export default function FaqComponent() {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold animate__animated animate__fadeInUp animate__deley-1s">
              Pertanyaan Yang Sering Di Tanyakan
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
          {faq.map((faqdata) => {
            return (
              <Col key={faqdata.id}>
                <Accordion className="shadow">
                  <Accordion.Item eventKey={faqdata.eventKey}>
                    <Accordion.Header>{faqdata.title}</Accordion.Header>
                    <Accordion.Body>{faqdata.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
