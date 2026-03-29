import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaSquareUpwork } from "react-icons/fa6";


const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex" id="about">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="title"
        >
          Software designer, developer, and amateur astronaut.
        </motion.h1>

        <p className="sub-title">
          I’m Tarek Helal a a Frontend Developer focused on building interactive
          web apps with React and JavaScript I care about clean design smooth
          user experience and writing scalable maintainable code.
        </p>

        <div className="all-icons flex">
          <a target="_blanck" href="https://www.upwork.com/freelancers/~011f62b7ebfe3ef418" className="icon icon-tiktok"><
// @ts-ignore
          FaSquareUpwork /></a>
          <a target="_blanck" href="https://github.com/tarekk190" className="icon icon-github"></a>
          <a target="_blanck" href="https://www.linkedin.com/in/tarek-helal1/" className="icon icon-linkedin"></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;