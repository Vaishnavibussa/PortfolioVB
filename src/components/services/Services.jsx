// import { motion,useInView } from 'framer-motion'
// import "./services.scss"
// import { useRef } from "react";


// const variants={
//     initial:{
//         x:-500,y:100,opacity:0,
//     },
//     animate:{
//         x:0,opacity:1,y:0,
//         transition:{
//             duration:1,
//             staggerChildren:0.1,

//         }
//     }
// }
// const Services = () => {

//   const ref=useRef()
//   const isInView =useInView(ref, {margin:"-100px"})

//   return (
//     <motion.div className='services' variants={variants} 
//     initial="initial"
//     //  animate="animate"
//     // whileInView="animate"
//     ref={ref}
//     animate={"animate"}
    
//     >
//         <motion.div className="textContainer" variants={variants}></motion.div>
//         <motion.p>I focues on helping your bra
//         nd grow <br />and move forward </motion.p>
//         <motion.div className="titleContainer" variants={variants}></motion.div>
//         <div className="title"> 
//             <img src="/people.webp" alt="" />
//             <h1>
//                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
//             </h1>
//         </div>
        
//         <div className="title">
//             <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b> Business.
//             </h1>
//             <button>Get to Know Me</button>
//         </div>
//         <motion.div className="listContainer" variants={variants}>

//             <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
//                 <h2>Branding</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus doloremque reprehenderit, optio officia eaque incidunt nobis dolorem hic deleniti nam molestias dolorum, maxime dignissimos corrupti tenetur rem, inventore vero.</p>
//                 <button>Go</button>
//             </motion.div>
//             <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
//                 <h2>Branding</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus doloremque reprehenderit, optio officia eaque incidunt nobis dolorem hic deleniti nam molestias dolorum, maxime dignissimos corrupti tenetur rem, inventore vero.</p>
//                 <button>Go</button>
//             </motion.div>
//             <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
//                 <h2>Branding</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus doloremque reprehenderit, optio officia eaque incidunt nobis dolorem hic deleniti nam molestias dolorum, maxime dignissimos corrupti tenetur rem, inventore vero.</p>
//                 <button>Go</button>
//             </motion.div>
//         </motion.div>

      
//     </motion.div>
//   )
// }

// export default Services

import { motion, useInView } from "framer-motion";
import "./services.scss";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.15,
    },
  },
};

const internships = [
  {
    company: "TradeCafe.io",
    role: "Full Stack Developer",
    logo: "rsa.jpg", // your small logo path here
    description: [
      "Building a full-stack web app for real-time roadside assistance using React.js, Node.js, Express, and PostgreSQL.",
      "Implementing real-time tracking, authentication, and API integrations to enhance user experience.",
      "Working in a 2-member team under mentorship, handling both frontend and backend development."

    ],
  },
  {
    company: "Swecha",
    role: "AI-ML Intern",
    logo: "https://cdn2.allevents.in/thumbs/thumb65d868664f770.png",
    description: [
      "Leading AI projects focused on social impact and language models as part of an elite cohort selected at AI Hack Day.",
      "Mentoring peers and resolving escalations while contributing to real-world applications involving model training and LLMs.",
      "Working with Python, pipelines, and machine learning workflows to build scalable solutions, with emphasis on Indic language datasets",
    ],
  },
  {
    company: "Advanced Academic Center-GRIET",
    role: "Fullstack Mentor",
    logo: "AAC2.jpeg",
    description: [
      "Mentored 40+ junior developers in web development, enhancing their skills and output quality.",
      "Led 6 teams, increasing project delivery by 90% and code quality by 80%.",
      "Managing a team of 10 to oversee the club’s database, organize events, and maintain data for over 250 members.",
    ],
  },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
      id="Experience"
    >
      {/* Internships Section */}
      <motion.div className="section internships" variants={variants}>
        <h1>
          <motion.b whileHover={{ color: "orange" }}>My</motion.b> Internships
        </h1>

        <div className="internshipList">
          {internships.map(({ company, role, logo, description }) => (
            <motion.div
              className="internshipCard"
              key={company}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(255,140,0,0.6)" }}
            >
              <img src={logo} alt={`${company} logo`} className="companyLogo" />
              <div className="internshipContent">
                <h3>
                  {company} - <span>{role}</span>
                </h3>
                <ul>
                  {description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🔶 Skills */}
      {/* <motion.div className="infoSection skills" variants={variants}>
        <h2>Skills</h2>
        <ul className="skillsList">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>TensorFlow</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>APIs</li>
          <li>Express</li>
          <li>Python</li>
          <li>CNN</li>
         
        </ul>
      </motion.div> */}
    </motion.div>
  );
};

export default Services;
