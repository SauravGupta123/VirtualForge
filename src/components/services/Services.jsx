import { useRef ,useState} from "react";
import "./services.scss";
import promoImg from '../../../public/community.jpg'
import { motion, useInView } from "framer-motion";
import Footer from "../footer/footer";
const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      staggerChildren: 0.2,
    },
  },
};
let links= [{img:"/facebook.png"},{img:"/instagram.png"},{img:"/youtube.png"},{img:"/dribbble.png"}]

const Services = () => {
  const ref = useRef();
  // const [isInView, setIsInView] = useState(false);
  
  // Check if the component is in view
  const isInView=useInView(ref,{margin:"-100px"})
return(
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
      ref={ref}
      animate={isInView}

    >
      <motion.div className="textContainer" variants={variants}>
        <p>
              Skate Battle Comptete
          <br /> and Earn
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={promoImg} alt="" />
          <div className="elements">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Join The Community</motion.b> 
          </h1>
          <button>Discord</button>
          </div>
        </div>
        <div className="title">
         
        </div>
      </motion.div>


      <motion.div className="social "
        variants={variants}

      > 
      {links.map(link=>{
       return(<motion.a href="#" key={link}  whileHover={{
        scale: 1.2,
        transition: { duration: .2 },
      }}
     variants={variants}>
          
               <img src={link.img} alt="" />
        </motion.a>)
      })}
        </motion.div>
   
        <motion.div className="footer p-10 bg-gradient-gradient text-neutral-content ">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</motion.div>

    </motion.div>
  );
};

export default Services;
