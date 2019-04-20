import React, { Component } from "react";
import Map from "./Map";
import ContactForm from "./ContactForm";
import Popup from "./Popup";
import "../styles/Contact.css";


class Contact extends Component {
  state = {
    popupMounted: this.props.location.search.substring(1)
  }

  componentDidMount = () => {
    if (this.state.popupMounted.includes("affirmation")) setTimeout(() => this.setState({ popupMounted: "" }), 3000);
  }

  render() {
    return (
      <div className="contact">
        <h1>Kontakt</h1>
        <div className="container">
          <div className="info">
            <p>Jeżeli masz jakiekolwiek pytania lub chciałbyś nawiązać kontakt, zapraszam do kontaktu: </p>
            <ContactForm />
            <div className="socials">
              <i className="fas fa-phone"> <span>602 850 683</span> </i>
              <i className="fas fa-envelope"> <span>filip.lipinski@outlook.com</span> </i>
              <a href="https://www.linkedin.com/in/filiplipinski/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/filiplipinski" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.facebook.com/filip.lipinski.94" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
            </div>
          </div>
          <Map />
        </div>

        {this.state.popupMounted.includes("affirmation") && <Popup />}
      </div>
    );
  }
}

export default Contact;