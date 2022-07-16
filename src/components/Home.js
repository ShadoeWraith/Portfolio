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
      <motion.div
        className="section-header"
        initial={{ y: '-5vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
      >
        <h1>
          My Name Is
          <span>Shaun</span>{' '}
        </h1>
        <h2>
          And I Am A <span>Full Stack Web Developer</span>
        </h2>
      </motion.div>
      <motion.div
        className="arrow"
        initial={{ y: '13vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
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
