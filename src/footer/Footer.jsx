import "./Footer.css";
import logo from "../assets/logo.jpg";
import fb from "../assets/facebook.png";
import git from "../assets/git.png";
import youtube from "../assets/youtube.png"

const Footer = () => {
  return (
    <>
      <div className="footer_contaner">
        <div className="footer_maxwidth">
          <div className="footer_flex">
            <div className="footer_About">
              <img src={logo} />
              <p>© 2025, All Rights Reserved.</p>
            </div>
            <div className="Quick_links">
                <h4>Quick Links</h4>
                <p>Home</p>
                <p>About</p>
                <p>Contact Us</p>
                <p>Blog</p>
            </div>
            <div className="Quick_links">
                <h4>Policy Links</h4>
                <p>Home</p>
                <p>About</p>
                <p>Contact Us</p>
                <p>Blog</p>
            </div>
            <div className="Quick_links">
                <h4>Social Links</h4>
                <p><img src={fb}/></p>
                <p><img src={git}/></p>
                <p><img src={youtube}/></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
