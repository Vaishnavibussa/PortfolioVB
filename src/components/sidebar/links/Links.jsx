// import {motion} from "framer-motion"
// // import {}

// const variants={
//   open:{
//     transition:{
//       staggerChildren:0.1,
//     },
//   },
//   closed:{
//     transition:{
//       staggerChildren:0.05,
//       staggerDirection:-1,
//     },
//   },
// }
// const itemVariants={
//   open:{
//     y:0,
//     opacity:1,
//   },
//   closed:{
//     y:50,
//     opacity:0,
//   },
// }

// const styles = {
//   links: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "20px",
//   },
//   link: {
//     fontSize: "40px",
//     color: "black",
//     textDecoration: "none",
//   }
// };

// const Links = ({open}) => {

// const items=["Homepage","Services","Portfolio","Contact","About"];


//   return (
//     <motion.div className="links" variants={variants}
//     style={styles}
//       initial={open ? "open" : "closed"}
//   animate={open ? "open" : "closed"}
//     >
//       {items.map((item)=>(
//       <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
//         {item}</motion.a>
//     ))}
//       </motion.div>
//   )
// }

// export default Links

// import { motion } from "framer-motion";

// const variants = {
//   open: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     transition: {
//       staggerChildren: 0.05,
//       staggerDirection: -1,
//     },
//   },
// };

// const itemVariants = {
//   open: {
//     y: 0,
//     opacity: 1,
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//   },
// };

// const styles = {
//   links: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "20px",
//   },
//   link: {
//     fontSize: "40px",
//     color: "black",
//     textDecoration: "none",
//   },
// };

// const Links = ({ open }) => {
//   const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

//   return (
//     <motion.div
//       style={styles.links}
//       variants={variants}
//       initial={open ? "open" : "closed"}
//       animate={open ? "open" : "closed"}
//     >
//       {items.map((item) => (
//         <motion.a
//           key={item}
//           href={`#${item}`}
//           style={styles.link}
//           variants={itemVariants}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {item}
//         </motion.a>
//       ))}
//     </motion.div>
//   );
// };

// export default Links;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const styles = {
  links: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    fontSize: "40px",
    color: "black",
    textDecoration: "none",
  },
};

const Links = ({ open }) => {
  const items = ["Homepage", "About", "Experience", "Portfolio", "Achievements", "Contact"];

  return (
    <motion.div
      style={styles.links}
      variants={variants}
      initial={open ? "open" : "closed"}
      animate={open ? "open" : "closed"}
    >
      {items.map((item) => (
        <motion.a
          key={item}
href={`#${item}`}
          style={styles.link}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
