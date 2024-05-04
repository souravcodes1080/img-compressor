import React from "react";
import "./footer.css";
import download_icon from "../../assets/downlad_icon.jpg";
import github_icon from "../../assets/github_icon.webp";
import ln_icon from "../../assets/ln_icon.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <h1><Link to={"/"} className="link">compressor.
          </Link></h1>
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
              <li><Link className="link" to={"/about"}>About Us</Link></li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="social-links">
          <a href="https://github.com/souravcodes1080" target="__blank"><img src={github_icon} alt=""  /></a>
            
          <a href="https://www.linkedin.com/in/sourav-chowdhury-892ba3229" target="__blank"><img src={ln_icon} alt=""  /></a>
            
           
          </div> <hr />
          <p>Developed by @ <a href="https://sourav-c-portfolio.netlify.app" target="__blank">Sourav</a> </p>
        </div>
       
      </footer>
    </>
  );
}

export default Footer;
