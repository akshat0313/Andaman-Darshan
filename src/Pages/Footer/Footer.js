import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { NavLink } from "react-router-dom";
import Boxe from "../Boxe/Boxe";
import Pricing from "../Pricing/Pricing";
import "./footer.css";

const Footer = () => {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);

  const onOpenModal1 = () => setOpen1(true);
  const onCloseModal1 = () => setOpen1(false);

  return (
    <div className="totalf">
      <Modal className="mode" open={open} onClose={onCloseModal}>
        <div className="mode">
          <Boxe />
        </div>
      </Modal>
      <Modal className="mode" open={open1} onClose={onCloseModal1}>
        <div className="mode">
          <Pricing />
        </div>
      </Modal>
      <div className="footT">
        <div className="leftf">
          <div className="logof">
          <NavLink to="/">
            <img
              className="logF"
              src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673081748/bita-final-removebg-preview_hrfoev.png"
              alt="nf"
            />
            </NavLink>
          </div>
          <div className="leftf-b">
            <div className="ico">
              <a
                href="https://www.linkedin.com/company/47bita-pods/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
            <div className="ico">
              <a
                href="https://twitter.com/47BitaPods"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter />
              </a>
            </div>
            <div className="ico">
              <a
                href="https://www.facebook.com/people/47Bita-Pods/100089485335116/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
            </div>
            <div className="ico">
              <a
                href="https://www.instagram.com/47bitapods/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="middle">
          <ul>
            <ListGroup variant="flush">
              <ListGroup.Item variant="dark">
                <li>
                  <span>Company</span>
                </li>
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                <li>
                  <div className="foot-loc" onClick={onOpenModal}>Our Locations</div>
                </li>
              </ListGroup.Item>
              {/* <ListGroup.Item action variant="dark">
                <li><a href="#/Mission">Mission</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Inclusion">Inclusion & Diversity</a></li></ListGroup.Item> */} 
{/*<ListGroup.Item action variant="dark">
                <li>
                  <a href="#/Investors">Other Tech amenities</a>
                </li>
              </ListGroup.Item>*/}
              <ListGroup.Item action variant="dark">
                <li>
                <div className="foot-loc" onClick={onOpenModal1}>Pricing</div>
                </li>
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                <li>
                  <a href="/testimonial">Testimonial</a>
                </li>
              </ListGroup.Item>
            </ListGroup>
          </ul>
        </div>
        <div className="rightf">
          <ul>
            <ListGroup variant="flush">
              <ListGroup.Item variant="dark">
                <li>
                  <span>Partnerships</span>
                </li>
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                <li>
                  <a href="#/Brokers">Individuals</a>
                </li>
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                <li>
                  <a href="#/Landlords">Landlords</a>
                </li>
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                <li>
                  <a href="#/Refer">Refer a friend</a>
                </li>
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                <li>
                  <a href="#/Event">Event Planners</a>
                </li>
              </ListGroup.Item>
            </ListGroup>
          </ul>
        </div>
        <div className="rightr">
          <ul>
            <ListGroup variant="flush">
              <ListGroup.Item variant="dark">
                <li>
                  <span>Contact</span>
                </li>
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                <li>
                  <a href="https://mail.google.com/mail/u/0/?fs=1&to=info.47bitapods@gmail.com&tf=cm">
                    info.47bitapods@gmail.com
                  </a>
                </li>
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                <li>
                  <a href="tel:+918777765809">+91 8777765809</a>
                </li>
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                <li>
                1-A, Mohan Kunja Apartment, Ground Floor, North, Biman Nagar, Kaikhali, Kolkata, West Bengal 700052
                </li>
              </ListGroup.Item>
            </ListGroup>
          </ul>
        </div>
      </div>
      <div className="footB">
        <a href="/t&c"> Privacy Policy </a>&nbsp; <div className="divslash">|</div> &nbsp;
        <NavLink  to="/" className="footB-b">
          <p style={{ cursor: "pointer",display:"flex" }}>
            2023 47BitaPods Pvt. Ltd. <div className="divslash">&nbsp;|</div>
          </p>
        </NavLink>
        
        <div>
        &nbsp;  All rights reserved
        </div>
        {/* &nbsp; | &nbsp; 
      <NavLink to="/projects"> Sitemap</NavLink> */}
      </div>
    </div>
  );
};

export default Footer;
