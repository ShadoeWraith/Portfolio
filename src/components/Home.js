import arrow from '../assets/Arrow.jpg';
import { motion } from 'framer-motion';

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
    <div className="section-home" id="home">
      <div className="section-header">
        <motion.h1
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
        >
          My Name Is
          <span>Shaun</span>{' '}
        </motion.h1>
        <motion.h2
          initial={{ x: '-200vh' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', delay: 1, duration: 1, bounce: 0.2 }}
        >
          And I Am A <span>Full Stack Web Developer</span>
        </motion.h2>
      </div>
      <motion.div
        className="arrow"
        initial={{ y: '13vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', delay: 1.75, duration: 2, bounce: 0.2 }}
      >
        <motion.a href="#about">
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
      </motion.div>
    </div>
  );
}
