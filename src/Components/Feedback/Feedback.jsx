import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bg from "../../assets/background-3.png";
import man from "../../assets/man7.avif";
import man2 from "../../assets/man1.jpg";
import man3 from "../../assets/man3.jpg";
import man4 from "../../assets/man4.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Feedback() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div style={{ background: `url(${bg})` }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gpa-5 p-24">
            <div className="mx-auto">
              <img src={man} className="rounded-full mb-5 border-2 border-emerald-400" alt="" style={{width:'120px', height:'120px'}} />
            </div>
            <h2 className="text-base text-white">I had an incredible experience during the boxing training session. The instructor was highly knowledgeable, patient, and motivating. The warm-up drills were effective, and the focus on proper techniques improved my form significantly. The session &apos;s intensity pushed my limits, making me feel challenged yet accomplished. The trainer&apos;s individual attention and constructive feedback were invaluable. I left feeling not only physically stronger but also more confident in my boxing skills. Looking forward to the next session!</h2>
            <h3 className="text-xl text-success mt-5">Alice Johnson</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gpa-5 p-24">
            <div className="mx-auto">
              <img src={man2} className="rounded-full mb-5 border-2 border-emerald-400" alt="" style={{width:'120px', height:'120px'}} />
            </div>
            <h2 className="text-base text-white">I had an incredible experience during the boxing training session. The instructor was highly knowledgeable, patient, and motivating. The warm-up drills were effective, and the focus on proper techniques improved my form significantly. The session &apos;s intensity pushed my limits, making me feel challenged yet accomplished. The trainer&apos;s individual attention and constructive feedback were invaluable. I left feeling not only physically stronger but also more confident in my boxing skills. Looking forward to the next session!</h2>
            <h3 className="text-xl text-success mt-5">Michael Wilson</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gpa-5 p-24">
            <div className="mx-auto">
              <img src={man3} className="rounded-full mb-5 border-2 border-emerald-400" alt="" style={{width:'120px', height:'120px'}} />
            </div>
            <h2 className="text-base text-white">I had an incredible experience during the boxing training session. The instructor was highly knowledgeable, patient, and motivating. The warm-up drills were effective, and the focus on proper techniques improved my form significantly. The session &apos;s intensity pushed my limits, making me feel challenged yet accomplished. The trainer&apos;s individual attention and constructive feedback were invaluable. I left feeling not only physically stronger but also more confident in my boxing skills. Looking forward to the next session!</h2>
            <h3 className="text-xl text-success mt-5">Jane Doe</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gpa-5 p-24">
            <div className="mx-auto">
              <img src={man4} className="rounded-full mb-5 border-2 border-emerald-400" alt="" style={{width:'120px', height:'120px'}} />
            </div>
            <h2 className="text-base text-white">I had an incredible experience during the boxing training session. The instructor was highly knowledgeable, patient, and motivating. The warm-up drills were effective, and the focus on proper techniques improved my form significantly. The session &apos;s intensity pushed my limits, making me feel challenged yet accomplished. The trainer&apos;s individual attention and constructive feedback were invaluable. I left feeling not only physically stronger but also more confident in my boxing skills. Looking forward to the next session!</h2>
            <h3 className="text-xl text-success mt-5">Olivia Brown</h3>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
