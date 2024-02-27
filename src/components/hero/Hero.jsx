import "./hero.scss";
import { motion } from "framer-motion";
import Dare from "../../../public/dare.png"
import To from "../../../public/to.png"
import Ride from "../../../public/ride.png"
import The from "../../../public/The.png"
import Wild from "../../../public/wild.png"
import { useEffect } from "react";


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};



const Hero = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      const textImgElement = document.querySelector('.textImg');
      if (textImgElement) {
        textImgElement.remove();
      }
    }, 50050); // 48000 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="hero">
      
      <div className="wrapper">
        <motion.div
          className="textContainer "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* <motion.h2 variants={textVariants}>Skate</motion.h2> */}
          {/* <motion.img  variants={textVariants}>
           Build By 
          </motion.img>
          <motion.h1  variants={textVariants}>
          Developers For
          </motion.h1>
          <motion.h1  variants={textVariants}>
          The Developers
          </motion.h1> */}
          
        <motion.div className="textImg">
            <motion.div variants={textVariants} className="div1" exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}>
              <img src={Dare} alt="Dare" />
              <img className="to" src={To} alt="" />

            </motion.div>
            <motion.div variants={textVariants} className="div2">
              <img src={Ride} alt="" />
              <img className="to" src={The} alt="" />
            </motion.div>
            <motion.div variants={textVariants} className="div3">
                <img src={Wild} alt="" />
              </motion.div>
        </motion.div>


        
          
        </motion.div>
      </div>
      {/* <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div> */}
     
    </div>
  );
};

export default Hero;
