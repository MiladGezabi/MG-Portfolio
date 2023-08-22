import "../components-style/About.css";
import { useRecoilState } from "recoil";
import { LangState } from "./Atoms.js";

function About() {
  const [toggleLang, setToggleLang] = useRecoilState(LangState);

  return (
    <section id="about" className="about">
      {toggleLang === "EN" ? (
        <>
          <h2>About me</h2>

          <div className="image-box"></div>

          <div className="text-box">
            Hello! My name is Milad Gezabi. I am UX/UI designer and Front-end web developer from Karlstad, Sweden. I´m passionate about learning new technologies and perfecting the ones i know.
          </div>
        </>
      ) : (
        <>
          <h2>Om mig</h2>

          <div className="image-box"></div>

          <div className="text-box">
          Hej! Jag heter Milad Gezabi. Jag är UX/UI-designer och Front-end webbutvecklare från Karlstad, Sverige. Jag brinner för att lära mig nya tekniker och att förbättra de jag redan känner.
          </div>
        </>
      )}
    </section>
  );
}

export default About;
