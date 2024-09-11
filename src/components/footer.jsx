import '../assets/style/footer.css';

const down = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
            <li>Rooms</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Our Location</li>
            <li>The Hosts</li>
            <li>About</li>
            <li>Contact</li>
            <li>Restaurant</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p><strong>Address:</strong> 98 West 21th Street, Suite 721, New York NY 10016</p>
          <p><strong>Phone:</strong> (+1) 435 3533</p>
          <p><strong>Email:</strong> info@yourdomain.com</p>
        </div>
        <div className="footer-column">
          <h3>Subscribe</h3>
          <p>Sign up for our newsletter</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email..." />
            <button className="subscribe-btn">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 All rights reserved | This template is made with ❤ by Wajih</p>
      </div>
    </footer>
  );
};

export default down;
