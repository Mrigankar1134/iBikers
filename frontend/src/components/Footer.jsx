import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>iBIKERS</h2>
            <p>Your Ride. Your Rules.</p>
          </div>
          
          <div className="footer-nav">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/browse">Browse Bikes</Link></li>
              <li><Link to="/bookings">My Bookings</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><strong>Email:</strong> info@ibikers.com</p>
            <p><strong>Phone:</strong> +91 9504085344</p>
            <p><strong>Address:</strong> C901, C Block, IIM Amritsar, Manawala, 143109</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} iBIKERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;