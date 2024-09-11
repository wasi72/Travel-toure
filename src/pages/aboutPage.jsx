import Navbar from "../components/navbar";
import '../assets/style/aboutUs.css';
import WelcomePic from '../assets/imgs/pic1.jpg';
import Slider from '../components/slider';
import Team from '../components/team';
import Footer from '../components/footer';
const about =()=>{
    return(
        <>
        <div className="background">
        <Navbar/>
        <div className="container">
        <h1>ABOUT US </h1>
        <input type="submit" value="VISIT COLORLIB" />
        </div>
        </div>
        <div className="welcome">
            <div className="welcome-left">
                <img src={WelcomePic} alt="welcome picture" />
            </div>
            <div className="welcome-right">
                <h2>Welcome Travel & Tours</h2>
                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                <br/><br/>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <input type="submit" value='LEARN MORE'/>
               </div>
        </div>
        <div className="management">
      <h2>Hotel Gallery.</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
    <Slider/>
    <Team/>
    <Footer/>
        </>
    );
};
export default about;