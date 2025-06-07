import { useState } from "react"
import {motion} from "framer-motion"
import Links from "./links/Links"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import { transform } from "framer-motion"

const Sidebar = () => {
    const [open,setOpen]=useState(false)

    const variants={
        open:{
          width:"400px",
            // clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:100,
                damping:40,
            },

        },
        closed:{
           width:"0px",
            // clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.2,
                type:"spring",
                stiffness:400,
                damping:40,
            },
        },
    };
  return (
    // <motion.div className={`sidebar ${open ? "open" : ""}`} animate={open ? "open" : "closed"}>
<motion.div
  className={`sidebar ${open ? "open" : ""}`}
  initial="closed"
  animate={open ? "open" : "closed"}
>
    {/* // <motion.div className="sidebar" animate={open?"open":"closed"}> */}
      <motion.div className="bg" variants={variants}>
        <Links open={open}/>
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open}/>

    </motion.div>
  )
}

export default Sidebar;
