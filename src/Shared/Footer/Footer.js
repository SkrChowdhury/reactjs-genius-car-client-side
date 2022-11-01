import React from 'react';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer p-32 bg-black text-white">
      <div>
        <img
          width="50"
          height="50"
          viewBox="0 0 24 24"
          className="fill-current"
          src={logo}
        />

        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="" href="" className="link link-hover">
          Branding
        </a>
        <a href="" href="" className="link link-hover">
          Design
        </a>
        <a href="" href="" className="link link-hover">
          Marketing
        </a>
        <a href="" href="" className="link link-hover">
          Advertisement
        </a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="" href="" className="link link-hover">
          About us
        </a>
        <a href="" href="" className="link link-hover">
          Contact
        </a>
        <a href="" href="" className="link link-hover">
          Jobs
        </a>
        <a href="" href="" className="link link-hover">
          Press kit
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="" href="" className="link link-hover">
          Terms of use
        </a>
        <a href="" href="" className="link link-hover">
          Privacy policy
        </a>
        <a href="" href="" className="link link-hover">
          Cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
