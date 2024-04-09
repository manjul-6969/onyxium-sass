import React from "react";

type Props = {};

const FooterMain = (props: Props) => {
  return (
    <>
      <div className="line-divider"></div>
      <div className="padding-top padding-medium">
        <div className="footer-bottom-wrapper">
          <a
            href="/"
            id="w-node-_948a986c-d501-5f5a-a45e-a4b93b5e2b8a-3b5e2b6d"
            aria-current="page"
            className="footer-logo-link w-nav-brand w--current"
          >
            <img src="/svg/logo.svg" loading="lazy" alt="Logo" width="30" height="0" />
          </a>
          <div className="w-layout-grid footer-social-icons">
            <a
              href="http://facebook.com"
              target="_blank"
              className="footer-social-link w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/6568d1688430b2d96f889b23/6568d1688430b2d96f889b8b_Icon_Facebook.png"
                loading="lazy"
                width="24"
                alt="Icon"
              />
            </a>
            <a
              href="http://twitter.com"
              target="_blank"
              className="footer-social-link w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/6568d1688430b2d96f889b23/6568d1688430b2d96f889b92_Icon_X.png"
                loading="lazy"
                width="24"
                alt="Icon"
              />
            </a>
            <a
              href="http://instagram.com"
              target="_blank"
              className="footer-social-link w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/6568d1688430b2d96f889b23/6568d1688430b2d96f889b8f_Icon_Insta.png"
                loading="lazy"
                width="24"
                alt="Icon"
              />
            </a>
            <a
              href="http://linkedin.com"
              target="_blank"
              className="footer-social-link w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/6568d1688430b2d96f889b23/6568d1688430b2d96f889b90_Icon_LinkedIn.png"
                loading="lazy"
                width="24"
                alt="Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterMain;
