import "./myself.scss"
import { motion, px } from "framer-motion"
import {Link} from "react-router-dom";
const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}

const slideVariants={
  initial:{
    x:0,
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
    }
  },
}
const Myself = () => {
  return (
    <div className="myself">
              {/* <div className="imageContainer">
            <img src="/normalpic.jpg" height="90px"  alt="" />
        </div> */}
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants}
      initial="initial" animate="animate">
        <motion.h2  className="vaish" variants={textVariants} >VAISHNAVI BUSSA</motion.h2>
        <motion.h1  variants={textVariants} >Full Stack | AI/ML | <br /> FinTech | Software </motion.h1>
        <motion.div  variants={textVariants}  className="buttons">
          <motion.button className="latestworks" variants={textVariants}> See My Works..</motion.button>
          <motion.button className="ctcme"  variants={textVariants} >Contact Me</motion.button>
        </motion.div>
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
  <a href="" target="_blank" rel="noopener noreferrer">RESUME</a>
</motion.button>

        <motion.img  variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
      </motion.div>

      <motion.div className="slidingContainer" variants={slideVariants} initial="initial" animate="animate">
        Innovate. Automate. Elevate. 
      </motion.div>

      </div>
        <div className="imageContainer">
            {/* <img src="/normalpic4.jpg" height="90px"  alt="" /> */}
            {/* <img src="/pic4.png"  alt="" /> */}
            <img src="/img2.jpg"  alt="" />
        </div>
      
    </div>
  )
}

export default Myself
