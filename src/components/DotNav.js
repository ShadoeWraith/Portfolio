import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DotNav() {
  const [homeShown, setHomeShown] = useState(false);
  const [aboutShown, setAboutShown] = useState(false);
  const [projectShown, setProjectShown] = useState(false);
  const [resumeShown, setResumeShown] = useState(false);
  const [contactShown, setContactShown] = useState(false);

  const [visible, setVisible] = useState(false);

  const isSelected = () => {
    const scrollvalue = document.documentElement.scrollTop;
    if (scrollvalue > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', isSelected);

  return (
    <nav className="dot-nav">
      {visible && (
        <motion.ul
          initial={{ x: '5vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
        >
          <li className="dot-container">
            {' '}
            <a href="#home">
              <span
                className="dot"
                onMouseOver={() => setHomeShown(true)}
                onMouseOut={() => setHomeShown(false)}
              ></span>
              {!homeShown && <span className="dot-label not-shown">H</span>}
              {homeShown && <span className="dot-label">Home</span>}
            </a>
          </li>
          <li className="dot-container">
            {' '}
            <a href="#about">
              <span
                className="dot"
                onMouseOver={() => setAboutShown(true)}
                onMouseOut={() => setAboutShown(false)}
              ></span>
              {!aboutShown && <span className="dot-label not-shown">A</span>}
              {aboutShown && <span className="dot-label">About</span>}
            </a>
          </li>
          <li className="dot-container">
            {' '}
            <a href="#projects">
              <span
                className="dot"
                onMouseOver={() => setProjectShown(true)}
                onMouseOut={() => setProjectShown(false)}
              ></span>
              {!projectShown && <span className="dot-label not-shown">P</span>}
              {projectShown && <span className="dot-label">Projects</span>}
            </a>
          </li>
          <li className="dot-container">
            {' '}
            <a href="#resume">
              <span
                className="dot"
                onMouseOver={() => setResumeShown(true)}
                onMouseOut={() => setResumeShown(false)}
              ></span>
              {!resumeShown && <span className="dot-label not-shown">R</span>}
              {resumeShown && <span className="dot-label">Resume</span>}
            </a>
          </li>
          <li className="dot-container">
            {' '}
            <a href="contact">
              <span
                className="dot"
                onMouseOver={() => setContactShown(true)}
                onMouseOut={() => setContactShown(false)}
              ></span>
              {!contactShown && <span className="dot-label not-shown">C</span>}
              {contactShown && <span className="dot-label">Contact</span>}
            </a>
          </li>
        </motion.ul>
      )}{' '}
    </nav>
  );
}
