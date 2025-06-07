// import { animate, motion } from "framer-motion";
// import "./contact.scss";
// import { useRef, useState } from "react";
// import emailjs from '@emailjs/browser';

// const variants={
//     initial:{
//         y:500,
//         opacity:0
//     },
//     animate:{
//         y:0,
//         opacity:1,
//         transition:{
//             duration:0.5,
//             staggerChildren:0.1,
//         }
//     }
// }

// const Contact = () => {
//     const formRef=useRef();
//     const [error, setError]=useState(null)
//     const [success, setSuccess] = useState(false); // Add at the top inside your Contact component


//      const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_ectas5r', 'template_3g35ams', formRef.current, {
//         publicKey: '18T4mzdgiy7liVES7' ,
//       })
//       .then(
//         (result) => {
//           setSuccess(true);
//         },
//         (error) => {
//           setError(true);
//         },
//       );

//   };
  

//   return (
//     <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
//         <div className="textContainer" variants={variants}>
//         <motion.h1>Lets work together!</motion.h1>
//         <motion.div className="item" variants={variants}>
//             <h2>Mail</h2>
//             <span>bussavaishnavi366@gmail.com</span>
//         </motion.div>
//         <motion.div className="item" variants={variants}>
//             <h2>Address</h2>
//             <span>Hyderabad, Telangana, 500061</span>
//         </motion.div>
//         <motion.div className="item" variants={variants}>
//             <h2>Phone</h2>
//             <span>6305660432</span>
//         </motion.div>
//         </div>  
//         <div className="formContainer">
//             {/* <motion.div className="phoneSvg" initial={{opacity:1}} 
//             whileInView={{opacity:0}}
//              transition={{delay: 3, duration: 1}}
//              > */}
                
//             {/* <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">

//                 <path
//                 strokeWidth={0.2}
//                 fill="none"
//                 d="\phone-rounded-svgrepo-com.svg"
//                 />
//             </svg> */}
//                 {/* </motion.div> */}
//             <motion.form 
//             ref={formRef}
//             onSubmit={sendEmail}
//             initial={{opacity:0}} 
//             whileInView={{opacity:1}}
//              transition={{delay: 1, duration: 1}}>
//             <div>
//             <input type="text" required placeholder="Name" name="name" /><br /> <br />
//             <input type="email" required placeholder="Email" name="email"/><br /><br />
//             <textarea rows={8} placeholder="Message"  name="message"/><br /><br />
//             <button>Submit</button> 
            
//             {error && "Error"}
//             {success && "Success"}
//             </div></motion.form>
//         </div>


//     </motion.div>
    
//   )
// }

// export default Contact

import { motion } from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FaArrowUp } from "react-icons/fa"; // ⬅️ Make sure to install this via npm

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ectas5r', 'template_3g35ams', formRef.current, {
        publicKey: '18T4mzdgiy7liVES7',
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <div className="textContainer" variants={variants}>
        <motion.h1>Let's work together!</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>bussavaishnavi366@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Hyderabad, Telangana, 500061</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>6305660432</span>
        </motion.div>
      </div>

      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div>
            <input type="text" required placeholder="Name" name="name" /><br /><br />
            <input type="email" required placeholder="Email" name="email" /><br /><br />
            <textarea rows={8} placeholder="Message" name="message" /><br /><br />
            <button>Submit</button>

            {/* Success/Error Message */}
            {error && <p style={{ color: "red" }}>Something went wrong. Try again.</p>}
            {success && <p style={{ color: "lightgreen" }}>Your message has been sent!</p>}
          </div>
        </motion.form>

        {/* ⬆️ Scroll to Top Button */}
        <motion.div
          className="scrollToTop"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          // transition={{
          //   duration: 0.4,
          //   repeat: 2,
          //   ease: "easeInOut",
          // }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp className="arrowIcon" />
          <h6>(back to homepage)</h6>
           <br />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
