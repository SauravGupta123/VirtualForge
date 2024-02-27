import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import favicon from '../../../public/favicon.png'
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
      <span className="logo">
        <img src={favicon} alt="" />
       </span>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
       Virtual Forge
       
        </motion.span>
       
      </div>
    </div>
  );
};

export default Navbar;
