import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation} from "framer-motion";
import "../components-style/Hero.css";
import Switch from "../sub-components/Switch.jsx";

function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect (()=> {
    if(isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

 
    

  return (
    <section>
      <motion.div ref={ref} className="intro-box"
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
      }}
      initial="hidden"
      animate={mainControls}
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
