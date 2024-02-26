import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Swiperstyle.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Swiper component for each stack
const MySwiper = ({ images, openModal }) => {
  return (
    <div className="swiper-container">
      <Swiper
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
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
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Image ${index}`}
              onClick={() => openModal(image)} // Add onClick handler
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Define images for each Swiper
  const images1 = [
    'public/images/technova_gallery/logos/technova_rope.jpg',
    'public/images/technova_gallery/Vc_starting/starting.jpg',
    'public/images/technova_gallery/Vc_starting/vc_project_chkecking.jpg',
    'public/images/technova_gallery/Vc_starting/starting.jpg',
    // Add more images as needed
  ];

  const images2 = [
    'public/images/technova_gallery/logos/thermocol_techno.jpg',
    'public/images/technova_gallery/welcomes/flower_welcome.jpg',
    'public/images/technova_gallery/welcomes/welcome_2.jpg',
    'public/images/technova_gallery/welcomes/welcome_thanks.jpg',
    'public/images/technova_gallery/welcomes/welcome_type.jpg',
    'public/images/technova_gallery/welcomes/welcome5.jpg',
    'public/images/technova_gallery/welcomes/welcome6.jpg',
    // Add more images as needed
  ];

  const images3 = [
    'public/images/technova_gallery/events/cards.jpg',
    'public/images/technova_gallery/events/hand_sensor.jpg',
    'public/images/technova_gallery/events/presentation_cse.jpg',
    'public/images/technova_gallery/events/Random.jpg',
    'public/images/technova_gallery/events/robo_soccer.jpg',
    'public/images/technova_gallery/events/robo_soccer2.jpg',
    'public/images/technova_gallery/events/thinkbots1.jpg',
    'public/images/technova_gallery/events/thinkbots2.jpg',
    // Add more images as needed
  ];

  const images4 = [
    'public/images/technova_gallery/prize/price2.jpg',
    'public/images/technova_gallery/prize/Prize1.jpg',
    'public/images/technova_gallery/prize/prize3.jpg',
    'public/images/technova_gallery/prize/prize4.jpg',
    // Add more images as needed
  ];
  const images5 = [
    'public/images/technova_gallery/group_pics/gp_pic3.jpg',
    'public/images/technova_gallery/group_pics/gp_pic4.jpg',
    'public/images/technova_gallery/group_pics/group_photo.jpg',
    'public/images/technova_gallery/group_pics/group_pic2.jpg',
    // Add more images as needed
  ];

  return (
    <>
      {/* Stack Swiper components */}
      <MySwiper images={images1} openModal={openModal} />
      <MySwiper images={images2} openModal={openModal} />
      <MySwiper images={images3} openModal={openModal} />
      <MySwiper images={images4} openModal={openModal} />
      <MySwiper images={images5} openModal={openModal} />

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
}
