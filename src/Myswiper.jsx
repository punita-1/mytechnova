import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay'
import './Swiperstyle.css';
import { EffectCoverflow, Autoplay} from 'swiper/modules';

export default function App() {
  return (
    <>
    {/* first swiper */}
    <h2>About Technova</h2>
      <div className="swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
        >

          {/* about Technova */}
          <SwiperSlide>
            <img src="public/images/technova_gallery/logos/thermocol_techno.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/Vc_starting/starting.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/Vc_starting/vc_pic.jpg" />
          </SwiperSlide>
          {/* just adding  */}
          <SwiperSlide>
            <img src="public/images/technova_gallery/group_pics/group_pic2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/logos/technova_rope.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/group_pics/gp_pic4.jpg" />
          </SwiperSlide>
         
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      {/* second swiper */}
      <h2>Guest welcoming</h2>
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
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 1550,
            disableOnInteraction: true,
          }}
        >
          {/* Guest welcoming */}
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
          
        </Swiper>
      </div>

      {/* third swiper */}
      <h2>Events</h2>
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
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          {/* Events */}
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/cards.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/group_pics/gp_pic3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/hand_sensor.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/robo_soccer2.jpg" />
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
            <img src="public/images/technova_gallery/events/thinkbots1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/images/technova_gallery/events/thinkbots2.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/*fourth swiper */}
      <h2>Prize Distribution</h2>
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
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 1980,
            disableOnInteraction: true,
          }}
        >
          {/* Prize distribution */}
          <SwiperSlide>
            <img src="public/images/technova_gallery/group_pics/group_photo.jpg" />
          </SwiperSlide>
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
        </Swiper>
      </div>
     
    </>
  );
} 
