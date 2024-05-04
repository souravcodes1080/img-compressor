import React from "react";
import "./footer.css";
import download_icon from "../../assets/downlad_icon.jpg";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <h1>compressor.</h1>
          <div className="footer-details">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              omnis temporibus autem. Porro quis minima corporis accusantium
              ratione inventore impedit, voluptates facilis nostrum repellendus
              ipsum cupiditate similique repudiandae nam cumque, quibusdam
              ducimus totam repellat dolores labore. Ducimus eveniet
              voluptatibus itaque!
            </p>

            <ul>
              <li>About Us</li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="social-links">
            <img src={download_icon} alt=""  />
            <img src={download_icon} alt=""   />
            <img src={download_icon} alt="" />
          </div> <hr />
          <p>Developed by @ <a href="https://sourav-c-portfolio.netlify.app" target="__blank">Sourav</a> </p>
        </div>
       
      </footer>
    </>
  );
}

export default Footer;
