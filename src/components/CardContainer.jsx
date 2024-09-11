import '../assets/style/BlogCard.css';
import Img1 from '../assets/imgs/slider-6.jpg';
import Img2 from '../assets/imgs/slider-5.jpg';
import Img3 from '../assets/imgs/img_3.jpg';

const cardDatas = [
  {
    id: 1,
    image: Img1, 
    date: 'FEBRUARY 26, 2018',
    title: '45 Best Places To Unwind',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    id: 2,
    image: Img2, 
    date: 'FEBRUARY 26, 2018',
    title: '48 Best Places To Unwind',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    id: 3,
    image: Img3,
    date: 'FEBRUARY 26, 2018',
    title: '46 Best Places To Unwind',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
];

const BlogCardContainer = () => {
  return (
    <div className="blog-card-container">
      {cardDatas.map((cardData) => (
        <div key={cardData.id} className="blog-card-item">
          <img src={cardData.image} alt={cardData.title} className="blog-card-img" />  
          <p className="blog-card-date">{cardData.date}</p>
          <h3 className="blog-card-title">{cardData.title}</h3>
          <p className="blog-card-description">{cardData.description}</p> {/* Added description */}
        </div>
      ))}
    </div>
  );
};


export default BlogCardContainer;
