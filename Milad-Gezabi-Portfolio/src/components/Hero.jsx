import { motion } from "framer-motion";
import "../components-style/Hero.css";
import Switch from "../sub-components/Switch.jsx";

function Hero() {

 
    

  return (
    <section>
      <motion.div className="intro-box"
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
      }}
      initial={"hidden"}
      whileInView={"visible"}
      transition={{ duration: 0.5, delay: 0.25}}
      >
        <h2>
           <span data-text="Milad Gezabi" className="loading">Milad Gezabi</span> <br/>
            Front-end <br/>
            Developer
        </h2>
      </motion.div>

      <div className="switch-box">

       <Switch />

      </div>
    </section>
  );
}

export default Hero;
