import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <span className="logo-blue">Course</span>Hub
      </div>

      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <p className="copyright">
        © 2026 CourseHub. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;