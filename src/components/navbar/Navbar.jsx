import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <>
  <Sidebar />
    <div className="navbar">
      
      <div className="wrapper">
        <Sidebar />
        {/* <motion.span 
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.8}}
        >Vaishnavi Bussa</motion.span> */}
        <div className="social">
            <a href="https://www.linkedin.com/in/vaishnavi-bussa-621a02292/"><img src="/linkedin.png" alt="" /></a>
            <a href="https://github.com/Vaishnavibussa"><img src="/github.png" alt="" /></a>
            <a href="https://leetcode.com/u/Vaishnavibussa/"><img src="/leetcode.png" alt="" /></a>
            <a href="https://www.instagram.com/bvaishnavi_66/"><img src="/instagram.png" alt="" /></a>
            
            <a href="https://discord.com/channels/@me"><img src="/discord.png" alt="" /></a>
            <motion.button
  id="resume"
  animate={{
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <a href="https://drive.google.com/file/d/1NiBhIR46s4tow8N_ixJnd1vhCikCDjgV/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a>
</motion.button>

            {/* <button id="resume"><a href="">RESUME</a></button> */}
        </div>
      </div>
    </div>
        </>
  )
}

export default Navbar
