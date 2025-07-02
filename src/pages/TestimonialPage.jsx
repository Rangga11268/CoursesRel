import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data";
import FaqComponent from "../components/FaqComponent";

export default function TestimonialPage() {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Semua Testimonial</h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet, odit?
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((swiper) => {
              return (
                <Col key={swiper.id} className="swiper">
                  <p className="desc shadow">{swiper.desc}</p>
                  <div className="people">
                    <img src={swiper.image} alt="SwiperImg" />
                    <div>
                      <h5 className="mb-3">{swiper.name}</h5>
                      <p className="m-0 fw-bold">{swiper.skill}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
}
