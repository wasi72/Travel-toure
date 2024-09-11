import Navbar from "../components/navbar";
import "../assets/style/landingPage.css";
import WelcomePic from '../assets/imgs/img_1_long.jpg';
import Slider from '../components/slider';
import BlogCard from '../components/CardContainer';
import Customers from '../components/customer';
import TopDestinations from "../components/topDestinations";
import Footer from '../components/footer';
import Experience from "../components/experience";
const homePage =()=>
{
    return(
        <>
        <div className="background">
        <Navbar/>
        <div className="container">
        <h1>Travel & Tours</h1>
        <input type="submit" value="VISIT COLORLIB" />
        </div>
        </div>
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
        <div className="experience">
            <h2>Experience Once In Your Life Time</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
       <Experience/>
    <div className="management">
      <h2>International Tour Management.</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
    <Slider/>
    <div className="blog">
      <h2>Recent Blog Post</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <BlogCard/>
    </div>
    <div className="customer">
      <h2>Happy Customers</h2>
      <Customers/>
    </div>
    <div className="top-destinations">
      <h2>Top Destination</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repellendus sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis,  blanditiis laboriosam alias. Sed.</p>
    </div>
    <TopDestinations/>
    <Footer/>
        </>
    );
};
export default homePage;
