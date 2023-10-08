import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch("./slider.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {slides?.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className="bg-cover bg-center bg-no-repeat  h-auto lg:h-[500px] lg:w-full flex flex-col justify-center items-center text-white py-10"
            style={{ background: `URL(${item.img})` }}
          >
            <div className="px-10 space-y-5">
              <h2 className="text-2xl lg:text-6xl text-center font-bold">
                {item.title}
              </h2>
              <p className="text-xl text-center">{item.description}</p>
              <p className="space-x-5">
                <button className="btn btn-success btn-outline">
                  Tell me more
                </button>
                <Link to="/signup">
                  <button className="btn btn-success">Sing up</button>
                </Link>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
