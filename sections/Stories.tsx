"use client";

import Title from "../components/Title";
import { stories } from "../components/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import Story from "../components/Story";

const Stories = () => {
  return (
    <section className="border-teal-1 py-28">
      <div className="border-red-1 boundary">
        <Title title="Top Stories" className="mb-7" />
        <Swiper
          navigation={true}
          modules={[Navigation]}
          freeMode={true}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {stories.map((s) => (
            <SwiperSlide key={s.id}>
              <Story data={s} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Stories;
