import picture from '../assets/Picture.jpg';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="sub-section-header">
        <h2>About Me</h2>
      </div>
      <div className="section-content">
        <p>
          Full stack web developer learning new technologies to better improve
          my ability to create well maintainable web apps. I think creatively
          and logically when creating web apps to best suit the overall user
          experience as well as the best way to integrate the backend and
          frontend together.
        </p>
        <img className="about-pic" src={picture} alt="picture of me"></img>
      </div>
    </section>
  );
}
