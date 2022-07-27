import Card from './Card';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="sub-section-header">
        <h2>Projects</h2>
      </div>
      <div className="section-content">
        <div className="card-container">
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
