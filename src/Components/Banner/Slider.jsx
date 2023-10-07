import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Autoplay, Pagination } from "swiper/modules";
import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.webp";

const Slider = () => {
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
     <SwiperSlide>
        <div
          className="bg-cover bg-no-repeat bg-blend-darken h-[500px] w-full flex flex-col justify-center items-center text-white"
          style={{ background: `URL(${hero1})` }}
        >
          <div className="space-y-5">
            <h2 className="text-3xl lg:text-6xl text-center font-bold">
              TRAIN LIKE A TRUE CHAMPION
            </h2>
            <p className="text-xl text-center">
              Our gym offer the best instructors in the city who are determined
              to help you be the best you can be.
            </p>
            <p className="space-x-5">
              <button className="btn btn-success btn-outline">
                Tell me more
              </button>
              <button className="btn btn-success">Sing up</button>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="bg-cover bg-no-repeat bg-blend-darken h-[500px] w-full flex flex-col justify-center items-center text-white"
          style={{ background: `URL(${hero2})` }}
        >
          <div className="space-y-5">
            <h2 className="text-3xl lg:text-6xl te text-center font-bold">
              TRAIN LIKE A TRUE CHAMPION
            </h2>
            <p className="text-xl text-center">
              Our gym offer the best instructors in the city who are determined
              to help you be the best you can be.
            </p>
            <p className="space-x-5">
              <button className="btn btn-success btn-outline">
                Tell me more
              </button>
              <button className="btn btn-success">Sing up</button>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="bg-cover bg-no-repeat bg-blend-darken h-[500px] w-full flex flex-col justify-center items-center text-white"
          style={{ background: `URL(${hero3})` }}
        >
          <div className="space-y-5">
            <h2 className="text-3xl lg:text-6xl te text-center font-bold">
              TRAIN LIKE A TRUE CHAMPION
            </h2>
            <p className="text-xl text-center">
              Our gym offer the best instructors in the city who are determined
              to help you be the best you can be.
            </p>
            <p className="space-x-5">
              <button className="btn btn-success btn-outline">
                Tell me more
              </button>
              <button className="btn btn-success">Sing up</button>
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
