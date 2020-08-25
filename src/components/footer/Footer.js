import React from "react";
import "./footer.css";
import { info } from "../utilities";
import SocialMediaIcon from "../social_media_icon/SocialMediaIcon";

function Footer() {
  return (
    <div>
      <div className="follow-us">
        <div>
          <div className="follow-us_title">Follow Us</div>
          <div className="follow-us_icons">
            <SocialMediaIcon />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer_info">
          <div className="footer-info_title">information</div>
          <ul className="footer-info_c">
            {info.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>

        <div className="footer-method">
          <div className="payment-method">
            <div className="payment-method_title">Payment methods</div>
            <img
              src="/shopping_cart/banner (1).png"
              alt="shopping cart banner"
            />
          </div>

          <div className="delivery-method">
            <div className="delivery-method_title">delevery</div>
            <img src="/shopping_cart/fedex.svg" alt="fedex" />
          </div>
        </div>

        <div className="footer_store-info">
          <div className="footer_store-info_title">Store information</div>
          <div className="footer_store-info_address">
            {" "}
            2345 Bode Thomas Surulere Lagos, Nigeria
          </div>
          <div className="footer_store-info_nub">
            <span className="footer-call">call</span> <span>+234090876543</span>
          </div>
          <div className="footer_store-info_email">
            <span className="footer-email">email</span>{" "}
            <span>g-planet@gmail.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
