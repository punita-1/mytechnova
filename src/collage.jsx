import React from 'react';
import "./collage.css";

const photos = [

    { src: 'public/images/technova_gallery/Vc_starting/starting.jpg', width: 1 },
    { src: 'public/images/technova_gallery/logos/thermocol_techno.jpg', width: 2 },
    { src: 'public/images/technova_gallery/Vc_starting/vc_pic.jpg', width: 1 },
    { src: 'public/images/technova_gallery/group_pics/group_pic2.jpg', width: 1 },
    { src: 'public/images/technova_gallery/group_pics/gp_pic4.jpg', width: 1 },
    { src: 'public/images/technova_gallery/welcomes/flower_welcome.jpg', width: 1 },
    { src: 'public/images/technova_gallery/welcomes/welcome_2.jpg', width: 1 },
    { src: 'public/images/technova_gallery/welcomes/welcome_thanks.jpg', width: 1 },
    { src: 'public/images/technova_gallery/welcomes/welcome_type.jpg', width: 1 },
    { src: 'public/images/technova_gallery/welcomes/welcome5.jpg', width: 1 },
    { src: 'public/images/technova_gallery/prize/Prize1.jpg', width: 1 },
    { src: 'public/images/technova_gallery/prize/prize4.jpg', width: 1 },
    { src: 'public/images/technova_gallery/prize/prize3.jpg', width: 2 },
    { src: 'public/images/technova_gallery/events/hand_sensor.jpg', width: 1 },
    { src: 'public/images/technova_gallery/welcomes/welcome6.jpg', width: 1 },
    { src: 'public/images/technova_gallery/prize/price2.jpg', width: 1 },
    { src: 'public/images/technova_gallery/group_pics/group_photo.jpg', width: 2 },
    { src: 'public/images/technova_gallery/events/thinkbots1.jpg', width: 1 },
    { src: 'public/images/technova_gallery/group_pics/gp_pic4.jpg', width: 1 },
    { src: 'public/images/technova_gallery/events/presentation_cse.jpg', width: 1 },
    { src: 'public/images/technova_gallery/events/Random.jpg', width: 1 },
    { src: 'public/images/technova_gallery/events/cards.jpg', width: 1 },
    { src: 'public/images/technova_gallery/events/robo_soccer.jpg', width: 1 },
    { src: 'public/images/technova_gallery/group_pics/gp_pic3.jpg', width: 1 },
    { src: 'public/images/technova_gallery/events/thinkbots1.jpg', width: 1 },
    { src: 'public/images/technova_gallery/events/thinkbots2.jpg', width: 1 },
    { src: 'public/images/technova_gallery/events/robo_soccer.jpg', width: 1 },
    { src: 'public/images/technova_gallery/Vc_starting/vc_project_chkecking.jpg', width: 1 },

];

const MyCollage = () => {
    return (
        <div>
            <h1>Glimpse</h1>
            <div className="collage">
                {photos.map((photo, index) => (
                    <div key={index} className={`grid-item grid-item-${photo.width}`}>
                        <img src={photo.src} alt="" onError={(e) => console.error("Image load error:", e)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyCollage;