import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgFacebook from './images/soc_facebook.png';
import imgInstagram from './images/soc_instagram.png';
import imgLinkedin from './images/soc_linkedin.png';
import imgTwitter from './images/soc_twitter.png';
import imgYoutube from './images/soc_youtube.png';

const Footer = () => {
  return (
    <footer className="bg-light text-center pb-0" style={{ marginTop: '100px' }}>
      <Container className="py-2">
        <h2>For students, by students</h2>
        <p>Stay Connected With Our Social Media!</p>
        <ul
          className="list-unstyled d-flex justify-content-between mx-auto"
          style={{ maxWidth: '250px' }}
        >
          <li>
            <a href="https://www.facebook.com/">
              <img src={imgFacebook} alt="Facebook" height="16" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src={imgInstagram} alt="Instagram" height="16" />
            </a>
          </li>
          <li>
            <a href="https://il.linkedin.com/">
              <img src={imgLinkedin} alt="LinkedIn" height="16" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <img src={imgTwitter} alt="Twitter" height="16" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <img src={imgYoutube} alt="YouTube" height="16" />
            </a>
          </li>
        </ul>

        <div
          style={{ maxWidth: '250px' }}
          className="d-flex justify-content-around mx-auto text-muted"
        >
          <Link style={{textColor:"gray"}} to="/About">
            About
          </Link>
          <p>|</p>
          <Link to="/FAQ">FAQ</Link>
        </div>
      </Container>
      <hr />

      <div className="bg-secondary-outline m-0 p-2">
        {/* eslint-disable-next-line */}
        <p className="small">© 2020 Copyright Lilach & Eyal.</p>
      </div>
    </footer>
  );
};

export default Footer;
