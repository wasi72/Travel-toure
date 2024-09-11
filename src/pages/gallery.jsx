import '../assets/style/gallery.css';
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Img1 from '../assets/imgs/slider-6.jpg';
import Img2 from '../assets/imgs/slider-5.jpg';
import Img3 from '../assets/imgs/img_5.jpg';
import Img4 from '../assets/imgs/img_3.jpg';

const About = () => {
  const images = [
    Img1, Img2, Img3, Img4, Img4, Img3, Img1, Img4, Img3, Img1, Img2
  ];

  return (
    <>
      <div className="background">
        <Navbar />
        <div className="container">
          <h1>GALLERY</h1>
          <input type="submit" value="VISIT COLORLIB" />
        </div>
      </div>

      <section className="gallery-section">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} className="gallery-img" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
