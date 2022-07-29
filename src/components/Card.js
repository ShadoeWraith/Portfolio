import AirPollution from '../assets/AirPollution.jpg';
import ParkPlace from '../assets/ParkPlace.jpg';
import CounselorReservation from '../assets/CounselorReservation.jpg';

import github from '../assets/github.jpg';
import deploy from '../assets/deploy.jpg';

export default function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-title">
          <h4>Air Pollution</h4>
        </div>
        <div className="image-container">
          <img
            className="card-image"
            src={AirPollution}
            alt="Air Pollution Project"
          />
        </div>
        <div className="card-footer">
          <a href="https://github.com/Callank21/group-project">
            <img className="card-icon" src={github} alt="github" />
          </a>
          <a href="https://callank21.github.io/group-project/index.html">
            <img className="card-icon" src={deploy} alt="github" />
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-title">
          <h4>Park Place</h4>
        </div>
        <div className="image-container">
          <img
            className="card-image"
            src={ParkPlace}
            alt="Park Place Project"
          />
        </div>
        <div className="card-footer">
          <a href="https://github.com/SalvadorBanuelos424/Park-Place-master-planned-community">
            <img className="card-icon" src={github} alt="github" />
          </a>
          <a href="https://park-place-association.herokuapp.com/">
            <img className="card-icon" src={deploy} alt="github" />
          </a>
        </div>
      </div>

      <div>
        <div className="card">
          <div className="card-title">
            <h4>Counselor Reservation</h4>
          </div>
          <div className="image-container">
            <img
              className="card-image"
              src={CounselorReservation}
              alt="Counselor Reservation Site"
            />
          </div>
          <div className="card-footer">
            <a href="https://github.com/Callank21/group-project">
              <img className="card-icon" src={github} alt="github" />
            </a>
            <a href="https://mern-school-website.herokuapp.com/">
              <img className="card-icon" src={deploy} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
