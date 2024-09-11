import '../assets/style/TopDestinations.css';
import Img1 from '../assets/imgs/slider-6.jpg';
import Img2 from '../assets/imgs/slider-5.jpg';
import Img3 from '../assets/imgs/img_3.jpg';
import Img4 from '../assets/imgs/img_5.jpg';
const destinations = [
  {
    id: 1,
    title: 'Food & Wines',
    image: Img1,
    reviews: '3,239 reviews',
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Resort & Spa',
    image: Img2,
    reviews: '4,921 reviews',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'Hotel Rooms',
    image: Img3,
    reviews: '2,112 reviews',
    rating: 4.3,
  },
  {
    id: 4,
    title: 'Climb',
    image: Img4,
    reviews: '6,421 reviews',
    rating: 4.8,
  }
];

const TopDestinations = () => {
  return (
      <div className="destinations-container">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.title} className="destination-image" />
            <h3 className="destination-title">{destination.title}</h3>
            <div className="destination-rating">
              {Array(Math.round(destination.rating)).fill().map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
              <span className="empty-stars">
                {Array(5 - Math.round(destination.rating)).fill().map((_, i) => (
                  <span key={i} className="star">☆</span>
                ))}
              </span>
            </div>
            <p className="destination-reviews">{destination.reviews}</p>
          </div>
        ))}
      </div>
  );
};

export default TopDestinations;
