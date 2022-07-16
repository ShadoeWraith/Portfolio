import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <div className="nav">
      <motion.ul
        className="nav-buttons"
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
      >
        <li>
          <a href="#about" className="nav-anchor">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-anchor">
            Projects
          </a>
        </li>
        <li>
          <a href="#resume" className="nav-anchor">
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-anchor">
            Contact
          </a>
        </li>
      </motion.ul>
    </div>
  );
}
