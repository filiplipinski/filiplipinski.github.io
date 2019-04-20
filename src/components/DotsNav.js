import React, { Component } from "react";
import "../styles/DotsNav.css";

class DotsNav extends Component {
  state = {
    activeDot: this.props.activeDot
  };

  dotsArray = Array.from({ length: this.props.numberOfDots });

  componentDidUpdate() {
    if (this.state.activeDot !== this.props.activeDot)
      this.setState({
        activeDot: this.props.activeDot
      });
  }

  render() {
    const dots = this.dotsArray.map((dot, index) => (
      <li
        key={index}
        className={this.state.activeDot === index ? "active" : null}
        onClick={() => {
          this.props.changeActiveDiv(index);
          clearInterval(this.props.intervalID);
        }}
      />
    ));

    return <ul className="dots">{dots}</ul>;
  }
}

export default DotsNav;
