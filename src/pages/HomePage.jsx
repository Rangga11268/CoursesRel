import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru, dataSwiper } from "../data";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import FaqComponent from "../components/FaqComponent";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function HomePage() {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Temukan <br /> <span>Bakat Anda Di Sini !</span> <br /> Bersama
                Kami
              </h1>
              <p className="mb-4 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                soluta odio placeat iste natus pariatur!
              </p>
              <button
                className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 mb-4 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => navigate("/kelas")}
              >
                Lihat Kelas
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Lihat Promo
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="HeroImg"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">kelas Terbaru</h1>
              <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                ipsam sed at rem voluptatem delectus!
              </p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col
                  key={kelas.id}
                  className="shadow rounded"
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                >
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button className="btn btn-danger rounded-1">
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg"
                data-aos="fade-up-left"
                data-aos-duration="1000"
                onClick={() => navigate("/kelas")}
              >
                Lihat Semua kelas{" "}
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my5">Testimonial</h1>
            </Col>
          </Row>
          <Row className="pt-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((swiper) => {
                return (
                  <SwiperSlide key={swiper.id} className="shadow">
                    <p className="desc">{swiper.desc}</p>
                    <div className="people">
                      <img src={swiper.image} alt="SwiperImg" />
                      <div>
                        <h5 className="mb-3">{swiper.name}</h5>
                        <p className="m-0 fw-bold">{swiper.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* Faq Component */}
      <FaqComponent />
      {/* Faq Component end */}
    </div>
  );
}
