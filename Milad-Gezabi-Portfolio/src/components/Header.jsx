import { useState } from "react";
import "../components-style/Header.css";
import Nav from "../sub-components/Nav";
import BurgerNav from "../sub-components/BurgerNav";

function Header() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <section className="header">
      <div className="name-box">
        <a href="">
          <h1>Milad Gezabi</h1>
        </a>
      </div>

      <Nav />

          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        

        <div className={menu_class}>
            <BurgerNav />
        </div>
      

    </section>
  );
}

export default Header;
