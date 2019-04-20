import React, { Component } from "react";
import DotsNav from "./DotsNav";
import "../styles/Projects.css";
import "../styles/technology-icons.css";

import portfolio from "../images/projects/portfolio.jpg";
import thebestmovies from "../images/projects/thebestmovies.jpg";
import psdtohtml from "../images/projects/psdtohtml.jpg";
import rest_api from "../images/projects/rest-api.jpg";

class Projects extends Component {
  state = {
    activeDiv: 0,
    intervalID: undefined,
    animateShift: false,
    animateShiftLeft: false
  };
  content = [
    {
      img: portfolio,
      url: "https://filiplipinski.github.io/",
      alt: "Filip Lipiński - portfolio site",
      title: "Ta strona - portfolio",
      text:
        "Moje portfolio. Cała strona działa jak aplikacja, została napisana w bibliotece React. Użyłem również biblioteki React Router, dzięki której cała strona działa bez przeładowywania. Po klinięciu w menu strona renderuje na nowo tylko potrzebne elementy.",
      technologies: ["html", "css", "js", "react"]
    },
    {
      img: thebestmovies,
      url: "https://filiplipinski.github.io/the-best-movies/",
      alt: "The Best Movies website image",
      title: "The Best Movies",
      text:
        'Projekt napisany na zaliczenie kursu "Internet Technologies" na uczelni. Strona jest dynamiczna, napisana w PHP, łączy się z bazą danych MySQL z której strona pobiera wszystkie potrzebne dane o filmach. Strona zawiera wiele interakcji oraz animacji. Brak responsywności, gdyż nie byla wymagana.',
      technologies: ["html", "css", "js", "php", "mysql"]
    },
    {
      img: psdtohtml,
      url: "https://filiplipinski.github.io/webdev17-1/",
      alt: "PSD to HTML #17-1 website image",
      title: "PSD to HTML",
      text:
        'Jest to moje wykonanie wyzwania numer #17-1 z grupy na facebooku "Weekly WebDev Challenge". Pisząc tą stronę chciałem zweryfikować swoje umiejętności, przerabiając projekt graficzny na pełni działającą stronę internetową. Strona jest w pełni responsywna, napisana mobile first',
      technologies: ["html", "css", "js", "jq"]
    },
    {
      img: rest_api,
      url: "https://filiplipinski.github.io/rest-api/",
      alt: "REST API website image",
      title: "REST API",
      text:
        "Prosta aplikacja napisana w React w 24h. Aplikacja łączy się z REST API (reqres.in), skąd pobiera użytkowników. Dodatkowo jest możliwość utworzenia nowego użytkownika ( z wykorzystaniem endpoint'u ), zmodyfikowanie oraz usunięcie użytkowników.",
      technologies: ["html", "css", "js", "react"]
    }
  ];

  changeActiveDiv = index => {
    if (index >= 0 && index < this.content.length) {
      this.setState({
        activeDiv: index
      });
    } else return new Error("liczba kropek =/= liczba divow");
  };

  changeNewActiveDiv = () => {
    const { activeDiv } = this.state;

    this.setState({ animateShift: true });

    let newActiveDiv;
    if (activeDiv === this.content.length - 1) {
      newActiveDiv = 0;
    } else {
      newActiveDiv = activeDiv + 1;
    }
    setTimeout(() => this.changeActiveDiv(newActiveDiv), 200);
    // this.changeActiveDiv(newActiveDiv);
  };

  leftArrowClick = () => {
    const { activeDiv } = this.state;

    let newActiveDiv;
    if (activeDiv === 0) {
      newActiveDiv = this.content.length - 1;
    } else {
      newActiveDiv = activeDiv - 1;
    }
    setTimeout(() => this.changeActiveDiv(newActiveDiv), 200);
    // this.changeActiveDiv(newActiveDiv);
  };

  chooseTechnologies = technologies => {
    const technologiesCode = technologies.map(elem => {
      if (elem === "html") return <em key={elem} className="t-icon-html5" />;
      if (elem === "css") return <em key={elem} className="t-icon-css3" />;
      if (elem === "js") return <em key={elem} className="t-icon-js" />;
      if (elem === "php") return <em key={elem} className="t-icon-php-alt" />;
      if (elem === "mysql")
        return <em key={elem} className="t-icon-mysql-alt" />;
      if (elem === "react") return <i key={elem} className="fab fa-react" />;
      return null;
    });

    return technologiesCode;
  };

  componentDidMount() {
    const intervalID = setInterval(this.changeNewActiveDiv, 3000);
    this.setState({ intervalID });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  render() {
    const content = this.content[this.state.activeDiv];

    return (
      <div className="projects">
        <h1>Projekty</h1>
        <div className="wrapper-for-arrows">
          <div
            className={
              "container " +
              (this.state.animateShift ? "shift " : "") +
              (this.state.animateShiftLeft ? "shift-left " : "")
            }
            onTransitionEnd={() =>
              this.setState({ animateShift: false, animateShiftLeft: false })
            }
          >
            <a
              className="photo-container"
              href={content.url}
              target="_blank"
              rel="preload noopener noreferrer"
            >
              <img src={content.img} alt={content.alt} />
              <p>Otwórz</p>
              <div className="triangle">
                <p>Zobacz <br /> projekt!</p>
              </div>
            </a>
            <div className="content">
              <h2>{content.title}</h2>
              {/* <a href={content.url}>
                Kliknij tutaj albo <span>obrazek</span> aby zobaczyć projekt ;)
              </a> */}
              <div className="technologies">
                {this.chooseTechnologies(content.technologies)}
              </div>
              <p>{content.text}</p>
            </div>
          </div>
          <i
            className="fas fa-angle-left"
            onClick={() => {
              this.leftArrowClick();
              this.setState({ animateShiftLeft: true });
              clearInterval(this.state.intervalID);
            }}
          />
          <i
            className="fas fa-angle-right"
            onClick={() => {
              this.changeNewActiveDiv();
              this.setState({ animateShift: true });
              clearInterval(this.state.intervalID);
            }}
          />
        </div>
        <DotsNav
          numberOfDots={this.content.length}
          changeActiveDiv={this.changeActiveDiv}
          activeDot={this.state.activeDiv}
          intervalID={this.state.intervalID}
        />
      </div>
    );
  }
}

export default Projects;
