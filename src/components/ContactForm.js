import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: "",
    _replyto: "",
    textarea: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    // this.setState({
    //   name: "",
    //   email: "",
    //   textarea: ""
    // })
  }

  render() {
    const { name, email, textarea } = this.state;

    return (
      <form action="https://formspree.io/filip.lipinski@outlook.com" method="POST" onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="name" placeholder="Twoje imię" value={name} />
        <input onChange={this.handleChange} type="email" name="_replyto" placeholder="Email" value={email} />
        <textarea onChange={this.handleChange} value={textarea} name="textarea" placeholder="Napisz do mnie ! Nie bój się, to działa :>"></textarea>
        <input type="hidden" name="_next" value="https://filiplipinski.github.io/#/contact?affirmation/" />
        <input type="submit" value="Wyślij wiadomość"></input>
      </form>
    );
  }
}

export default ContactForm;