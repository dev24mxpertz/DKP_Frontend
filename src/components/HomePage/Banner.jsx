import React from "react";
import LogoImage from "../../assets/Images/logo.png";
import Carousel from "react-bootstrap/Carousel";
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
          </div>
        </div>
      </div>
      <div className="Banner_Main__slider_div">
        <Carousel data-bs-theme="light">
          <Carousel.Item>
            <div className="carousel-row">
              <div className="slider-image-div">
                <img
                  className="slider-image"
                  src="https://s3-alpha-sig.figma.com/img/2a19/0026/ecd6e5beee11478ee1799f63f8be7017?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jhyrDEpgUiR~fL6yvAE7GRFugkRzIwFnnlGHfJxsEapC9CNweTkrAFAooYtVUYU4NA7tkB8eDK5EQexAuVaSct4v4YKin8JAkFepLLa97gWYSY~qMhTolPrhpWXejZuGZ9cNhNnx7ps89~p-hJwe2dBieEJ5NltveQV25Iu2iU44btEsACfskAQJo4YrmZYd2vJBl8OUvB3bNUunA4VA1XQGqVMIUL-ATG-Q5Ac1k89j4n7dS6VHQa0wh9-qJ5KXKxZzDW9UBCGMpoxwgn7-bQz~XIhdkWn9wINJGM74gxE37yWOL8llQs6bI3hzJhl7-WmGuZLAUr6oeKPGafpv1Q__"
                  alt="Slide 1"
                />
              </div>
              <div className="slider-image-div">
                <img
                  className="slider-image"
                  src="https://s3-alpha-sig.figma.com/img/d2ae/482f/ca67f667f9f2c333a54e0d54b85d7f41?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqU1ecu5YeMvFLP5DtV9CZ-EsYV7l31W2tndNJ63uMjO0Et~HguV9UEaj289FAelKqJppNkyREqAuWmEhqNFqaazSb8rec94NXjgbCsFtGDMQkaN9evCv7mpBzidpFrvYuZ2H~nIu-EWMkjUpKZiYSyuCG7ys~~kviPkOhPy3LP5D3meXCvvHIxE7FH~faC5JjUdZN03aTMScKtm5dida9BegoRpatM2jlY~Amcv6a4xzlOxETaDGveJU5dI4s8XgnWam8Qk3xQHhdOn~h3TZLkEeZNKxOT6Ti13buwirPVWPPorK9lM3gvdjh9QmIAX73~KJ0hj10f7dw9n8OXL1w__"
                  alt="Slide 2"
                />
              </div>
              <div className="slider-image-div">
                <img
                  className="slider-image"
                  src="https://s3-alpha-sig.figma.com/img/e239/e08b/b630c56fd0219c16c9cfb03916b95c81?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UL5G1BZ30hsQPorqsctU5W8B9O5FeWdn4waNKjMzV0ktwyzCSXsZFG~d4ncLk791a6ahCco~ZyleV3EtSdI-f99inua1PdfMvpXszK2AMZqUuYIi0lGJOcVzuO-FIUgWNRd~57SxK14mhyp7b9MWlsbq~bA9Aw2BABqIA1Z5HRsRi99pm5ru7SY3qETXih3o2d0GCHMqCVESgp--LTCSezXteWuso~hpp81vNnRtRfHzWAVS0J0g0utXMM18iBF8fSISwP79bRBl9cs2L9RIzC0BsvRe66jjnJ0bTVYCpnDYPtgv0gRSI03yXS5Ic8Gd5LpAYTHx2Wi~kRWd0Nw9yA__"
                  alt="Slide 3"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-row">
              <div className="slider-image-div">
                <img
                  className="slider-image"
                  src="https://s3-alpha-sig.figma.com/img/2a19/0026/ecd6e5beee11478ee1799f63f8be7017?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jhyrDEpgUiR~fL6yvAE7GRFugkRzIwFnnlGHfJxsEapC9CNweTkrAFAooYtVUYU4NA7tkB8eDK5EQexAuVaSct4v4YKin8JAkFepLLa97gWYSY~qMhTolPrhpWXejZuGZ9cNhNnx7ps89~p-hJwe2dBieEJ5NltveQV25Iu2iU44btEsACfskAQJo4YrmZYd2vJBl8OUvB3bNUunA4VA1XQGqVMIUL-ATG-Q5Ac1k89j4n7dS6VHQa0wh9-qJ5KXKxZzDW9UBCGMpoxwgn7-bQz~XIhdkWn9wINJGM74gxE37yWOL8llQs6bI3hzJhl7-WmGuZLAUr6oeKPGafpv1Q__"
                  alt="Slide 1"
                />
              </div>
              <div className="slider-image-div">
                <img
                  className="slider-image"
                  src="https://s3-alpha-sig.figma.com/img/d2ae/482f/ca67f667f9f2c333a54e0d54b85d7f41?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqU1ecu5YeMvFLP5DtV9CZ-EsYV7l31W2tndNJ63uMjO0Et~HguV9UEaj289FAelKqJppNkyREqAuWmEhqNFqaazSb8rec94NXjgbCsFtGDMQkaN9evCv7mpBzidpFrvYuZ2H~nIu-EWMkjUpKZiYSyuCG7ys~~kviPkOhPy3LP5D3meXCvvHIxE7FH~faC5JjUdZN03aTMScKtm5dida9BegoRpatM2jlY~Amcv6a4xzlOxETaDGveJU5dI4s8XgnWam8Qk3xQHhdOn~h3TZLkEeZNKxOT6Ti13buwirPVWPPorK9lM3gvdjh9QmIAX73~KJ0hj10f7dw9n8OXL1w__"
                  alt="Slide 2"
                />
              </div>
              <div className="slider-image-div">
                <img
                  className="slider-image"
                  src="https://s3-alpha-sig.figma.com/img/e239/e08b/b630c56fd0219c16c9cfb03916b95c81?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UL5G1BZ30hsQPorqsctU5W8B9O5FeWdn4waNKjMzV0ktwyzCSXsZFG~d4ncLk791a6ahCco~ZyleV3EtSdI-f99inua1PdfMvpXszK2AMZqUuYIi0lGJOcVzuO-FIUgWNRd~57SxK14mhyp7b9MWlsbq~bA9Aw2BABqIA1Z5HRsRi99pm5ru7SY3qETXih3o2d0GCHMqCVESgp--LTCSezXteWuso~hpp81vNnRtRfHzWAVS0J0g0utXMM18iBF8fSISwP79bRBl9cs2L9RIzC0BsvRe66jjnJ0bTVYCpnDYPtgv0gRSI03yXS5Ic8Gd5LpAYTHx2Wi~kRWd0Nw9yA__"
                  alt="Slide 3"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
