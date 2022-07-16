import { useState } from 'react';

export default function DotNav() {
  const [aboutShown, setAboutShown] = useState(false);
  const [projectShown, setProjectShown] = useState(false);
  const [resumeShown, setResumeShown] = useState(false);
  const [contactShown, setContactShown] = useState(false);

  return (
    <nav className="dot-nav">
      {' '}
      <ul>
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
      </ul>{' '}
    </nav>
  );
}
