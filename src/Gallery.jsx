import React, { useRef } from 'react'
import "./gallery.css"
import { motion, useScroll, useSpring } from 'framer-motion';

const items = [
  {
    id: '1',
    title: 'random',
    img: 'public/images/dribbble.png',
    decs: 'lorem ipsum lorem ipsume '
  },
  {
    id: '2',
    title: 'random',
    img: 'public/images/dribbble.png',
    decs: 'lorem ipsum lorem ipsume '
  },
  {
    id: '3',
    title: 'random',
    img: 'public/images/dribbble.png',
    decs: 'lorem ipsum lorem ipsume '
  },
  {
    id: '4',
    title: 'random',
    img: 'public/images/dribbble.png',
    decs: 'lorem ipsum lorem ipsume '
  }
];

const Single = ({ item }) => {
  return (
    <section className='vhIncrease'>
      {item.title}
    </section>
  )
}

const Gallery = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <div className='gallery' ref={ref}>
      {/* <div className="progress">
        <h1>feature</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div> */}
      {items.map((item) => (<Single item={item} key={item.id} />))}
    </div>
  )
}

export default Gallery
