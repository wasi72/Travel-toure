import '../assets/style/contactCard.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="Enter your phone" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Write Message</label>
            <textarea id="message" placeholder="Your message" rows="5"></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <p><strong>Address:</strong><br />98 West 21th Street, Suite 721<br />New York NY 10016</p>
        <p><strong>Phone:</strong><br />(+1) 435 3533</p>
        <p><strong>Email:</strong><br />info@yourdomain.com</p>
      </div>
    </div>
  );
};

export default ContactForm;
