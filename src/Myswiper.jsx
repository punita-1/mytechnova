import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Swiperstyle.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className="swiper-container">
        <Swiper
          effect={'coverflow'}
          // loop={true} // Enable looping
          grabCursor={true}
          // loop={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            // loop: true,
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src="public/images/technova_gallery/logos/technova_rope.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/Vc_starting/starting.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/Vc_starting/vc_project_chkecking.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/Vc_starting/vc_pic.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/audi_mv_night.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/auditorium_night.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/random_2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/random.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          // loop={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src="public/images/technova_gallery/logos/thermocol_techno.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/welcomes/flower_welcome.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/welcomes/welcome_2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/welcomes/welcome_thanks.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/welcomes/welcome_type.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/welcomes/welcome5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/welcomes/welcome6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/wide_view_cool.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          // loop={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/cards.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/hand_sensor.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/presentation_cse.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/Random.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/robo_soccer.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/robo_soccer2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/thinkbots1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/thinkbots2.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          // loop={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src="public/images/technova_gallery/prize/price2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/prize/Prize1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/prize/prize3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/prize/prize4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/day_cloud_image_library_wide_view.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/IMG_20240207_143133 (1).jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/IMG20240207140632.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/library_clouds_image.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          // loop={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src="public/images/technova_gallery/group_pics/gp_pic3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/group_pics/group_photo.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/group_pics/gp_pic4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/group_pics/group_pic2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/mv_block_2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/mv_block.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/dcrust_images/night_Saraswati_library.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/events_profile_pic/Decoration.jpg" />
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}