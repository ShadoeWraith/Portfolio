import AirPollution from '../assets/AirPollution.jpg';
import ParkPlace from '../assets/ParkPlace.jpg';
import CounselorReservation from '../assets/CounselorReservation.jpg';
import tranquility from '../assets/tranquility.jpg';

import github from '../assets/github.jpg';
import deploy from '../assets/deploy.jpg';

export default function Card() {
  const projectData = [
    {
      title: 'Air Quality',
      image: AirPollution,
      github: 'https://callank21.github.io/group-project/index.html',
      deployed: 'https://github.com/Callank21/group-project',
    },
    {
      title: 'Park Place',
      image: ParkPlace,
      github:
        'https://github.com/SalvadorBanuelos424/Park-Place-master-planned-community',
      deployed: 'https://park-place-association.herokuapp.com/',
    },
    {
      title: 'Counselor Reservation',
      image: CounselorReservation,
      github: 'https://github.com/uhMammoth/school-website',
      deployed: 'https://mern-school-website.herokuapp.com/',
    },
    {
      title: 'FFXIV Tranquility',
      image: tranquility,
      github: 'https://github.com/ShadoeWraith/tranquility',
      deployed: 'https://shadoewraith.github.io/tranquility/',
    },
  ];

  return (
    <div className="card-container">
      {projectData.map((project) => (
        <div className="card">
          <div className="card-title">
            <h4>{project.title}</h4>
          </div>
          <div className="image-container">
            <img
              className="card-image"
              src={project.image}
              alt="Air Pollution Project"
            />
          </div>
          <div className="card-footer">
            <a href={project.github}>
              <img className="card-icon" src={github} alt="github" />
            </a>
            <a href={project.deployed}>
              <img className="card-icon" src={deploy} alt="github" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
