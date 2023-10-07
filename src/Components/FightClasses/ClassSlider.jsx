import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ClassSlider = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("./class.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        direction={"horizontal"}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {classes?.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <Link to={`/classes/${item.id}`}>
                <img src={item.image} />
                <h2 className="bg-neutral hover:bg-success uppercase font-bold py-2 text-white">
                  {item.title}
                </h2>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ClassSlider;
