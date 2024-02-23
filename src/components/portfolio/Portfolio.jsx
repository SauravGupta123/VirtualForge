import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import bikeImg from '../../../public/aboutPic.jpg'
import skate from '../../../public/skate.jpg'
import custom from '../../../public/customize.jpg'


const items = [
  {
    id: 1,
    title: "About Skate",
    img: bikeImg,
    desc: " Introducing Skater Republic, the thrilling upcoming arcade game that puts you right in the heart of a dynamic skateboarding adventure! Explore expansive skateparks, bustling cityscapes, and renowned real-life locations for an immersive experience like no other. Featuring intuitive controls, a sophisticated trick system, and a compelling progression framework, players will find themselves immersed in a world where every achievement feels truly gratifying. Keep an eye out as we work diligently to bring this extraordinary gaming experience to life.",
  },
  {
    id: 2,
    title: "Master Your Skills",
    img: skate,
    desc: "  Prepare to embark on an electrifying journey of skill mastery in Skater Republic! From mastering basic flips to conquering gravity-defying aerial maneuvers, the game thrusts you into a high-octane world where every trick is a pulse-pounding thrill. With controls as responsive as your reflexes and physics that defy expectation, each move feels like a heart-pounding victory. Whether you're a rookie or a seasoned pro, Skater Republic promises an adrenaline-fueled ride that will leave you craving more!",
  },

  {
    id:3 ,
    title: "Create and Customize",
    img: custom,
    desc: "  Unleash your inner artist and style icon in Skater Republic's boundless realm of customization! Craft your own legendary skateboarder, sculpting every detail from head to toe with a dizzying array of gear, threads, and deck designs. Express yourself like never before as you strut your stuff through the urban jungle, your unique style setting you apart as a true trendsetter. With limitless options to explore, you're not just playing a game – you're living your own skateboarding fantasy!",
  },



];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio " ref={ref}>
      <div className="progress ">
        {/* <h1>Featured Works</h1>*/}
        <motion.div style={{ scaleX }} className="progressBar"></motion.div> 
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
