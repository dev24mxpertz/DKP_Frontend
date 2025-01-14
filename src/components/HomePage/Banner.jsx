import React from "react";
import LogoImage from "../../assets/Images/logo.png";
const Banner = () => {
  return (
    <div className="banner_Layoout">
      <div className="background_container">
        <div className="Banner_main_container">
          <div className="Banner_Nav_div">
            <img src={LogoImage} alt="LogoImage" className="Banner_Nav_Logo" />
            <button className="Banner_Nav_button">Login</button>
          </div>
          <div className="Banner_Main_div">
            <div className="Banner_Main__content_div">
              <h3>Master DKP Management Across Games</h3>
              <p>
                A streamlined and flexible system to manage your guild’s Dragon
                Kill Points and events with ease.
              </p>
              <button>
                Start for FREE{" "}
                <span>
                  <i class="bi bi-arrow-right"></i>
                </span>
              </button>
            </div>
            <div className="Banner_Main__slider_div"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
