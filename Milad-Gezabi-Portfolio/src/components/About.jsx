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

          <div className="text-box"></div>
        </>
      ) : (
        <>
          <h2>Om mig</h2>

          <div className="image-box"></div>

          <div className="text-box"></div>
        </>
      )}
    </section>
  );
}

export default About;
