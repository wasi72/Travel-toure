import Navbar from "../components/navbar";
import Footer from '../components/footer';
import '../assets/style/contactUs.css';
import ContactCard from '../components/contactCard';
const about =()=>{
    return(
        <>
        <div className="background">
        <Navbar/>
        <div className="container">
        <h1>CONTACT </h1>
        <p>A free template by Colorlib. Download and share!</p>
        <input type="submit" value="VISIT COLORLIB" />
        </div>
        </div>
      <ContactCard/>
    <Footer/>
        </>
    );
};
export default about;