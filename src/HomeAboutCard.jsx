import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';
import './HomeAboutCard.css';
import { motion, AnimatePresence } from "framer-motion";

const scrollToTop = () => {
    window.scrollTo(0, 0);
};
const HomeAboutCard = () => {
    const [activeTab, setActiveTab] = useState("Opportunity");
    return (
        <div className='myClassForThisDiv'>
            <div className='prev-container container grid grid-two-column'>
                <div> <h3 class="aboutCardHeading"><b>About Technova</b></h3>

                    <p class="aboutCardDescription">
                        Welcome to Technova - an exciting celebration of innovation,
                        creativity, and teamwork! Dive into a variety of events showcasing
                        the best in technology, creativity, and talent. Discover a range of
                        activities, from captivating displays at our central events to
                        skillful competitions organized by departments and engaging
                        initiatives by university societies.
                    </p>
                    <NavLink to='/event' onClick={scrollToTop}>
                        Explore the events
                    </NavLink></div>
                <div>
                    <h3 style={{ marginBottom: "30px", fontSize:'30px' }} className="aboutGridHeading ">Why join us</h3>
                    <Tabs defaultActiveKey="Opportunity" onSelect={(key) => setActiveTab(key)}>
                        <Tab eventKey="Opportunity" title="Opportunity">
                            <p className="aboutGridDescription aboutCardDescription">
                                Opportunity for personal and professional growth. Networking
                                with peers and industry professionals.
                            </p>
                            <AnimatePresence>
                                {activeTab === "Opportunity" && (
                                    <motion.img
                                        initial={{ x: '-1000px' }}
                                        animate={{ x: '0' }}
                                        exit={{ x: '-1000px' }}
                                        transition={{ delay: '0', duration: '1', type: 'spring', stiffness: '230' }}
                                        style={{ height: '20px' }}
                                        src="public/images/technova_gallery/events/robo_soccer.jpg"
                                        alt="Random Image"
                                    />
                                )}
                            </AnimatePresence>
                        </Tab>
                        <Tab eventKey="Recognition" title="Recognition">
                            <p className="aboutGridDescription aboutCardDescription">
                                Hands-on experiential learning. Recognition and rewards for
                                achievements.
                            </p>
                            <AnimatePresence>
                                {activeTab === "Recognition" && (
                                    <motion.img
                                        initial={{ x: '-1000px' }}
                                        animate={{ x: '0' }}
                                        exit={{ x: '-1000px' }}
                                        transition={{ delay: '0', duration: '1', type: 'spring', stiffness: '230' }}
                                        style={{ height: '20px' }}
                                        src="public/images/technova_gallery/events/your_image_for_recognition.jpg"
                                        alt="Random Image"
                                    />
                                )}
                            </AnimatePresence>
                        </Tab>
                        <Tab eventKey="Education" title="Education">
                            <p className="aboutGridDescription aboutCardDescription">
                                Inspiration to think creatively and pursue innovation.
                                Community engagement and collaboration.
                            </p>
                            <AnimatePresence>
                                {activeTab === "Education" && (
                                    <motion.img
                                        initial={{ x: '-1000px' }}
                                        animate={{ x: '0' }}
                                        exit={{ x: '-1000px' }}
                                        transition={{ delay: '0', duration: '1', type: 'spring', stiffness: '230' }}
                                        style={{ height: '20px' }}
                                        src="public/images/technova_gallery/events/your_image_for_education.jpg"
                                        alt="Random Image"
                                    />
                                )}
                            </AnimatePresence>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutCard
