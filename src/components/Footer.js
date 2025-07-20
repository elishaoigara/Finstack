import React from 'react';
import { FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      className="text-white text-center py-4 mt-auto"
      style={{
        background: 'linear-gradient(to top, rgba(30, 61, 50, 0.95), rgba(30, 61, 50, 0.5))',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container">
        <p className="mb-2">Made with ❤️ by Elisha Oigara</p>

        <div className="d-flex justify-content-center gap-4 mb-3 flex-wrap">
          <a
            href="https://github.com/elishaoigara"
            target="_blank"
            rel="noreferrer"
            className="text-white text-decoration-none d-flex align-items-center gap-2"
          >
            <FaGithub size={18} /> GitHub
          </a>

          <a
            href="mailto:elishaoigara50@gmail.com"
            className="text-white text-decoration-none d-flex align-items-center gap-2"
          >
            <FaEnvelope size={18} /> Email
          </a>

          <a
            href="https://twitter.com/lambertElisha3"
            target="_blank"
            rel="noreferrer"
            className="text-white text-decoration-none d-flex align-items-center gap-2"
          >
            <FaTwitter size={18} /> Twitter
          </a>
        </div>

        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} Finstack by Elisha Oigara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
