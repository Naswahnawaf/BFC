import React from "react";

function Footer() {

  return <div className="footer" id="footer">
<div className="contact-me" >
  <h2 className="subheading">Keep In Touch With Us</h2>
  <h3>Have a Good Day..!</h3>
</div>

<div className="bottom-container">
  <a className="footer-link" href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
  <a className="footer-link" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
  <a className="footer-link" href="https://www.wa.me/919611606669"><i className="fab fa-whatsapp"></i></a>

  <p className="end">© {new Date().getFullYear()} NaseeWahNawf. All Rights Reserved.</p>
</div>
</div>
}

export default Footer;
