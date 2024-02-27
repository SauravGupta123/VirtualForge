import { useRef ,useState} from "react";
import "./services.scss";
import promoImg from '../../../public/community.jpg'
import { motion, useInView } from "framer-motion";


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
let links= [{img:"../../../public/facebook.png"},{img:"../../../public/instagram.png"},{img:"../../../public/youtube.png"},{img:"../../../public/dribbble.png"}]

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
      id="Contact Us"

    >
      <motion.div className="textContainer" variants={variants}>
        <p className="header">
              Skate Battle Comptete
          <br /> and Earn
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.div className="img" whileHover={{scale:1.05}} transition={{duration:0.2}} variants={variants} >
          <img src={promoImg}  alt="" />
          </motion.div>
          <div className="elements ml-20">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Join Our </motion.b> 
            <motion.b whileHover={{color:"orange"}}> Community</motion.b> 
          </h1>
          <button className="text-black font-semibold">Discord</button>
          </div>
        </div>
       
      </motion.div>


      <motion.div className="social" id="Social Links"
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
   
        <motion.div className="footer p-10 bg-gradient-gradient text-neutral-content h-44">
      
  <nav>
    <h6 className="footer-title">
      <motion.span whileHover={{ color: "orange" }}>Services</motion.span>
    </h6>
    <motion.a className="link link-hover" whileHover={{ color: "orange" }}>
      Branding
    </motion.a>
    <motion.a className="link link-hover" whileHover={{ color: "orange" }}>
      Design
    </motion.a>
    <motion.a className="link link-hover" whileHover={{ color: "orange" }}>
      Marketing
    </motion.a>
  </nav>
  <nav>
    <h6 className="footer-title">
      <motion.span whileHover={{ color: "orange" }}>Company</motion.span>
    </h6>
    <motion.a className="link link-hover" whileHover={{ color: "orange" }}>
      About us
    </motion.a>
    <motion.a className="link link-hover" whileHover={{ color: "orange" }}>
      Contact
    </motion.a>
    <motion.a className="link link-hover" whileHover={{ color: "orange" }}>
      Jobs
    </motion.a>
  </nav>
  <nav>
    <h6 className="footer-title">
      <motion.span whileHover={{ color: "orange" }}>Legal</motion.span>
    </h6>
    <motion.a className="link link-hover" whileHover={{ color: "orange" }}>
      Terms of use
    </motion.a>
    <motion.a className="link link-hover" whileHover={{ color: "orange" }}>
      Privacy policy
    </motion.a>
  </nav>
</motion.div>

 


    </motion.div>
  );
};

export default Services;
