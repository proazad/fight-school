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
    <div className="lg:w-10/12 mx-auto ">
      <div className="hidden lg:block ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {classes?.map((item) => (
            <div key={item.id} data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              <div className="w-full py-5 ">
                <div className="classCard">
                  <img src={item.image} className="w-full" />
                  <div className="cardInfo">
                    <p className="rounded-lg text-white text-xl bg-success px-5 py-2 ">
                      ${item.price}
                    </p>
                    <Link to={`/class/${item.id}`}>
                      <button className="btn btn-success btn-sm btn-outline ">
                        Show Details
                      </button>
                    </Link>
                  </div>
                </div>
                <h2 className="bg-neutral hover:bg-success uppercase font-bold py-2 text-white">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="block lg:hidden">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          direction={"horizontal"}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {classes?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full py-5 ">
                <div className="classCard">
                  <img src={item.image} className="w-full" />
                  <div className="cardInfo">
                    <p className="rounded-lg text-white text-xl bg-success px-5 py-2 ">
                      ${item.price}
                    </p>
                    <Link
                      to={`/class/${item.id}`}
                      className="btn btn-success btn-sm btn-outline "
                    >
                      Show Details
                    </Link>
                  </div>
                </div>
                <h2 className="bg-neutral duration-300 hover:bg-success uppercase font-bold py-2 text-white">
                  {item.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default ClassSlider;
