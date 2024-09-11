import Navbar from "../components/navbar";
import '../assets/style/hotels.css';
import Experience from "../components/experience";
import WelcomePic from '../assets/imgs/img_1_long.jpg';
import Slider from '../components/slider';
import BlogCard from '../components/CardContainer';
import Footer from '../components/footer';

const about =()=>{
    return(
        <>
        <div className="background">
        <Navbar/>
        <div className="container">
        <h1>OUR HOTELS </h1>
        <input type="submit" value="VISIT COLORLIB" />
        </div>
        </div>
       <Experience/>
       <div className="welcome">
            <div className="welcome-left">
                <img src={WelcomePic} alt="welcome picture" />
            </div>
            <div className="welcome-right">
                <h2>Welcome To Our Website</h2>
                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                <br/><br/>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
               </div>
        </div>
        <div className="management">
      <h2>Hotel Gallery.</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
    <Slider/>
    <div className="blog">
      <h2>Recent Blog Post</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <BlogCard/>
    </div>
    <Footer/>
        </>
    );
};
export default about;