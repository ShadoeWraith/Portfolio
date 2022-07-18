import github from '../assets/github.jpg';
import linkedin from '../assets/linkedin.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/ShadoeWraith">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/shaun-kiszonas-064802228/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <h3>Made by Shaun Kiszonas 2022</h3>
      </div>
    </footer>
  );
}
