import React from "react";
import "../styles/Compo/Compo_footer.css";
import logo from "../logo.png";

const Compo_footer = () => {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <img class="logo" src={logo} alt="logo" />
          <p class="footer-company-name">
            Copyright © Game Hotdeal 2021. All Rights Reserved.
          </p>
        </div>
        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>대한민국 경상남도</span> 진주시
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p>010-xxxx-xxxx</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:valurauta628@gmail.com">valurauta628@gmail.com</a>
              <br />
              <a href="mailto:ghkd3531@gmail.com">ghkd3531@gmail.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>추가 정보</span>
            사업자 등록 같은 것
          </p>
          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Compo_footer;
