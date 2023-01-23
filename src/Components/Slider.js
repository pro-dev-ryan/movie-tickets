import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Col from "react-bootstrap/Col";

import "swiper/css";
import { useProduct } from "../Contexts/ContextProduct";

const Slider = ({ id }) => {
  const {
    state: { cards },
  } = useProduct();
  const filtered = cards.filter((card) => card?.show?.id !== parseInt(id));
  return (
    <Swiper
      modules={[Autoplay]}
      effect="slide"
      autoplay
      slidesPerView={3}
      breakpoints={{
        250: {
          width: 280,
          spaceBetween: 60,
          slidesPerView: 1,
        },
        554: {
          width: 300,
          spaceBetween: 50,
          slidesPerView: 2,
        },
        768: {
          width: 300,
          spaceBetween: 50,
          slidesPerView: 2,
        },
      }}
    >
      {filtered.map((i, el) => (
        <Col>
          <SwiperSlide key={el}>
            <div className="d-flex justify-content-center">
              <img src={i?.show?.image?.medium} className="img-fluid" alt="" />
            </div>
          </SwiperSlide>
        </Col>
      ))}
    </Swiper>
  );
};

export default Slider;
