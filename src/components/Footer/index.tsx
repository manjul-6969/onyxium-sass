import FooterMain from "@/components/Footer/FooterMain";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer-component">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-vertical padding-xlarge">
            <FooterMain />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
