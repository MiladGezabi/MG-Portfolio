import { useState } from "react";
import "../components-style/Hero.css";
import Switch from "../sub-components/Switch.jsx";

function Hero() {
    

  return (
    <section>
      <div className="intro-box">
        <h2 data-text="Milad Gezabi">
          <span data-text="Front-End developer">
            Milad Gezabi <br />
            Front-End <br />
            Developer
          </span>
        </h2>
      </div>

      <div className="switch-box">

       <Switch />

      </div>
    </section>
  );
}

export default Hero;
