// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import './Swiperstyle.css';
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <div className="swiper-container">
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={'auto'}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           pagination={true}
//           modules={[EffectCoverflow, Pagination]}
//           className="mySwiper"
//         >
//           {/* Swiper 1 */}
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//           </SwiperSlide>
//           {/* Add more slides for Swiper 1 */}

//         </Swiper>
//       </div>

//       <div className="swiper-container">
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={'auto'}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           pagination={true}
//           modules={[EffectCoverflow, Pagination]}
//           className="mySwiper"
//         >
//           {/* Swiper 2 */}
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//           </SwiperSlide>
//           {/* Add more slides for Swiper 2 */}

//         </Swiper>
//       </div>
//       <div className="swiper-container">
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={'auto'}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           pagination={true}
//           modules={[EffectCoverflow, Pagination]}
//           className="mySwiper"
//         >
//           {/* Swiper 1 */}
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//           </SwiperSlide>
//           {/* Add more slides for Swiper 1 */}

//         </Swiper>
//       </div>
//       {/* Repeat the above pattern to create additional Swiper components */}
//     </>
//   );
// }

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
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    // Add more images as needed
  ];

  const images2 = [
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    // Add more images as needed
  ];

  return (
    <>
      {/* Stack Swiper components */}
      <MySwiper images={images1} openModal={openModal} />
      <MySwiper images={images2} openModal={openModal} />

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
