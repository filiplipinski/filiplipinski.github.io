import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <p>Witaj ! Nazywam się</p>
      <div className="name-wrapper">
        <h1 className="name">FiLip</h1>
        <h1 className="surname">Lipiński</h1>
      </div>
      <p>i jestem</p>
      <h2>Front-end Developerem / React Developerem</h2>
    </div>
  );
};

export default Home;
