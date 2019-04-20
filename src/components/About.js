import React, { Component } from "react";
import "../styles/About.css";
import DotsNav from "./DotsNav";

import logo1 from "../images/logos/html.png";
import logo2 from "../images/logos/css.png";
import logo3 from "../images/logos/js.png";
import logo4 from "../images/logos/react.png";
import logo5 from "../images/logos/git.png";

class About extends Component {
  state = { activeDiv: 0 };

  changeActiveDiv = index => {
    if (index >= 0 && index < 2) {
      this.setState({
        activeDiv: index
      });
    } else return new Error("liczba kropek =/= liczba divow");
  };

  render() {
    const chooseContent = () => {
      if (this.state.activeDiv === 0)
        return (
          <div className="left">
            <p>
              Mam 22 lata. Studiuję na III roku Wydziału Automatyki, Elektroniki i
              Informatyki Politechniki Śląskiej w Gliwicach.<br />
              <br />
              Uczę się programować od wczesnych lat, a zaczęło się od języka
              C++. Już w Liceum na kółku informatycznym wyróżniałem się umiejętnościami. Na studiach
              wzmocniłem swoje zdolności w myśleniu algorytmicznym, nabrałem
              praktyki dobrego programowania, myślenia i przewidywania. <br />
              <br />
              Jakiś czas temu "odkryłem" front-end i poczułem że to jest to w czym chcę się dalej rozwijać. Jestem samoukiem, a wiedzę o tworzeniu stron internetowych czerpię z kursów oraz ćwicząc na
              wielu, małych projektach. <br /> <br />
              Programuję z pasji ! :)
            </p>
            <div className="hobbies">
              <p>Moje zainteresowania:</p>
              <div>
                <p>Ćwiczyć siłowo</p>
              </div>
              <div>
                <p>Grać w siatkówkę</p>
              </div>
              <div>
                <p>Tworzyć aplikacje webowe</p>
              </div>
              <div>
                <p>Gotować i jeść</p>
              </div>
            </div>
          </div>
        );
      else if (this.state.activeDiv === 1)
        return (
          <div className="right">
            <div className="logos">
              <img rel="preload" src={logo1} alt="html logo" />
              <img rel="preload" src={logo2} alt="css logo" />
              <img rel="preload" src={logo3} alt="js logo" />
              <img rel="preload" src={logo5} alt="git logo" />
              <img rel="preload" src={logo4} alt="react logo" />
            </div>
            <div className="container">
              <p>
                Wszystkie wymienione technologie, języki i biblioteki które do tej pory poznałem, znam w najnowszych standardach. Piszę kod w oparciu o zasady SOLID, DRY, KISS.
              </p>
              <ul className="technologies">
                <li>HTML ( and HTML5 elements )
                </li>
                <li>
                  CSS3 ( flex-box, responsive web design (media-queries),
                  scss/sass, key-frames )
                </li>
                <li>
                  JavaScript ECMAScript6 ( jQuery basics, Object Oriented
                  Programming)
                </li>
                <li>React ( React Router, fetch API )</li>
                <li>Git ( Github )</li>
              </ul>
            </div>
          </div>

        );
    };
    const content = chooseContent();

    return (
      <div className="about">
        <h1>O mnie</h1>
        <section className="container">{content}</section>
        <DotsNav
          numberOfDots={2}
          changeActiveDiv={this.changeActiveDiv}
          activeDot={this.state.activeDiv}
        />
      </div>
    );
  }
}

export default About;
