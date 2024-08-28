import "./home.css";
import Dropdown from "react-bootstrap/Dropdown";
import Faq from "../FAQ/Faq";
import Navbar from "../Navbar/Navbar";
import Carousel from "react-bootstrap/Carousel";
//import { NavLink } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Work from "../Work/Work";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Amenities from "../Amenities/Amenities";
import CarouselD from "../Carousel/CarouselD";
import emailjs from "emailjs-com";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button } from "@chakra-ui/react";
import {
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalCloseButton,
  // ModalBody,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Search from "../Searchbar/Search";
import ContactForm from "../ContactForm/ContactForm";
import Contacte from "../Contacte/Contacte";
//import { useDisclosure } from '@chakra-ui/react'
function HomePage() {
  const [input, setInput] = React.useState(true);
  React.useEffect(() => {
    AOS.init();
  }, []);
  //const [fdone,setFdone]=React.useState(false);
  const [form, setForm] = React.useState({
    Name: "",
    Email: "",
    Number: "",
  });
  // React.useEffect(()=>{
  //   if ((form.Name!=="")&&(form.Email!==""))
  //   {
  //     setFdone(true);
  //   }
  //   else
  //   {
  //     setFdone(false);
  //   }
  // })

  function handleChangeForm(event) {
    const { name, value } = event.target;
    setInput(true);
    setForm((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  // const { isOpen, onOpen, onClose } = useDisclosure();
  //const [app,setApp]=React.useState("toastee")
  //const myTimeout = setTimeout(myGreeting, 5000);
  function myGreeting() {
    onOpenModal();
    // setApp("toaste");
  }
  React.useEffect(() => {
    setTimeout(myGreeting, 5000);
  }, []);
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // function close()
  // {
  //   setApp("toastee")
  // }
  function containsOnlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }
  function submitNoteForm(event) {
    console.log(form.Name + ",,," + form.Email);
    event.preventDefault();
    if (
      form.Name === "" ||
      !(form.Email.includes("@", 0) && form.Email.includes(".com", 0)) ||
      !containsOnlyNumbers(form.Number)
    ) {
      setInput(false);
    } else {
      console.log(event.target);
      emailjs
        .sendForm(
          "service_adr03va",
          "template_2r0es66",
          event.target,
          "PvTh2g-GgAfPvNvK_"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      onCloseModal();
    }
  }

  return (
    <div className="App">
      <span className="sp"></span>

      <Modal
        className="mode"
        open={open}
        onClose={onCloseModal}
        closeOnOverlayClick={false}
        center={true}
      >
        <div className="moddd">
          <div className="mod-top">
            Contact us to get yourself a workplace today{" "}
          </div>
          <form onSubmit={submitNoteForm}>
            {input === true ? (
              <></>
            ) : (
              <div className="modal-bg">
                * Fill Name and Email fields so that we can reach you
              </div>
            )}
            <FormLabel className="home-pad" name="Name">
              Name
            </FormLabel>
            <Input
              placeholder="Name"
              _placeholder={{ opacity: 1, color: "gray.600" }}
              name="Name"
              onChange={handleChangeForm}
            />
            <div className="gap"></div>
            <FormLabel className="home-pad" name="Email">
              Email
            </FormLabel>
            <Input
              placeholder="Email"
              _placeholder={{ opacity: 1, color: "gray.600" }}
              name="Email"
              onChange={handleChangeForm}
            />
            <FormLabel className="home-pad" name="Number">
              Whatsapp Number
            </FormLabel>
            <Input
              placeholder="Enter your number"
              _placeholder={{ opacity: 1, color: "gray.600" }}
              name="Number"
              onChange={handleChangeForm}
            />
            <div className="home-pad"></div>
            <Button colorScheme="blackAlpha" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Modal>

      <div className="nav-sticky">
        <Navbar />
      </div>

      <header className="App-header">
        <div className="body">
          <section className="contain">
            <div className="top-card banner-msg-box form_container msg">
              <div className="top-Header">Find your perfect workspace</div>
              <div className="top-middle">
                Whether you’re a team of one, a growing startup, or a Fortune
                500 company—we have flexible solutions for all the ways you
                work.
              </div>
              <Dropdown className="top-loca">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="top-local"
                  variant="dark"
                  size="lg"
                >
                  Location
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Sector 5</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Baguihati</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Chinar Park</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Dum Dum</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="slide">
              <Carousel
                className="slide"
                controls={true}
                keyboard={true}
                touch={true}
                interval={3000}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-900 home-im"
                    src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673807049/IMG-0026_oohdyp.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-900 home-im"
                    src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673799191/IMG-0075_jw3h9e.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-900 home-im"
                    src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673807058/IMG-0025_lsgmxt.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </section>
        </div>
      </header>
      <div id="contid">
        <Contacte />
      </div>
      <div className="Carou-f1" data-aos="fade-up">
        <div className="carou-f2">
          Amazing office spaces, all at premium locales
        </div>
        <div className="Carou-f3">
          Our elegant and fully tech-enabled office spaces are designed keeping
          your needs in mind. Be it a single desk, a private cabin, a meeting
          room or a larger space for your entire team – Awfis is your one-stop
          solution.
        </div>
      </div>

      <div className="Carou" data-aos="fade-up">
        <CarouselD />
      </div>
      <div className="work">
        <div className="Faqq-q" data-aos="fade-up">
          Stylish workspaces
        </div>
        <Work />
      </div>
      <div className="Amenities">
        <div className="Faqq" data-aos="fade-up">
          Amenities we Offer
        </div>
        <Amenities />
      </div>
      <div className="Faq">
        <div className="Faqq" data-aos="fade-up">
          F.A.Q.
        </div>
        <Faq />
      </div>
      <div className="Footer" data-aos="zoom-in-up">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
