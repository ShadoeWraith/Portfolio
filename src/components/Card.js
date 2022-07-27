import image from '../assets/AirPollution.jpg';

export default function Card() {
  return (
    <div className="card">
      <h4 className="card-title">Title</h4>
      <div className="image-container">
        <img className="card-image" src={image} alt="image"></img>
      </div>
    </div>
  );
}
