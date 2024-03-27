import React, { useRef } from 'react'
import './paralax.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import CarouselComponent from './Carousel'
import { NavLink } from 'react-router-dom'
import { Button } from "../src/styles/Button";

function ParalaxNight() {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]

    })

    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    const ytext = useTransform(scrollYProgress, [0, 1], ['0%', '500%'])

    const handleVisitGalleryClick = () => {
        window.scrollTo(0, 0);
    };
    return (<div style={{paddingTop:'100px'}}>
        <motion.div className='parallax another' ref={ref} style={{ background: 'linear-gradient(180deg, #111132, #0c0c1d)', borderRadius:'10px' }}>
            <motion.div style={{ x: yBg, height: '500px' }} className="starts"></motion.div>
            <motion.div style={{ y: yBg, height: '500px' }} className="mountains"></motion.div>
            {/* <motion.div style={{ y: yBg, height: '500px' }} className="planets"></motion.div> */}

            <motion.div className='heading-container'>
                <motion.h3 className='heading-container morestyle' style={{ y: ytext }}><b>"Moments in Time"</b></motion.h3>
                <motion.p className='heading-container parastyle' style={{ color: 'lightgray', y: ytext }}> "Explore the past triumphs and memorable moments that have shaped
                    the legacy of our university's innovative spirit."
                </motion.p>
                <div style={{paddingBottom:'40px', paddingTop:'10px'}}>
                <motion.div
                    initial={{ scale: "1" }}
                    animate={{ scale: 1.5 }}
                    style={{ y: ytext }} className="button-container">
                    <NavLink to='/gallery' onClick={handleVisitGalleryClick}>
                        <Button className='btn visitgalbtn eventpage-btn'>
                            Visit Gallery
                        </Button>
                    </NavLink>
                </motion.div>
                </div>
            </motion.div>
        </motion.div>
        </div>
    )
}

export default ParalaxNight
