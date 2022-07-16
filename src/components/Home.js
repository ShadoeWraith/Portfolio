import arrow from '../assets/Arrow.jpg';
import { motion, useCycle } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const bounceTransition = {
    y: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeIn',
      type: 'spring',
    },
    arrowColor: {
      duration: 0,
      repeat: Infinity,
      ease: 'easeIn',
      repeatDelay: 2,
    },
  };

  return (
    <div className="section-home">
      <div className="section-header">
        <h1>Shaun Kiszonas</h1>
      </div>
      <motion.a className="arrow" href="#about">
        <motion.img
          src={arrow}
          alt="down arrow"
          transition={bounceTransition}
          animate={{
            y: ['-100%', '-80%'],
          }}
          whileHover={{}}
        />
      </motion.a>
    </div>
  );
}
