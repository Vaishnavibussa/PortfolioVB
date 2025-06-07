import { useRef } from "react";
import "./portfolio.scss"
import DDDimg from "./DDD.png"
import crop from "./Cropcart.jpeg"
import leaf from "./Leafdisease.png"
import AAC from "./AAC.jpg"
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items=[
    {
        id:1,
        title:"MindfulScroll – Doom Scrolling Control ",
        img:"https://www.lifeadvancer.com/wp-content/uploads/2019/11/Reasons-Why-Women-Cheat-on-the-Men-They-Love-1.jpg",
        tech:" React.js, AI, ML, API’s, Firebase, NodeJS, Express, Python",
        desc:" Spearheaded the development of personalized mindful browsing features, integrating sentiment analysis algorithms that flagged 95% of negative content and provided alternative, positive content suggestions by analyzing social media content, monitoring scrolling patterns. Integrated sentiment analysis, real-time alerts, gamification, and cyberbullying prediction, sleep tracking, and screen time limits for healthier digital habits.",
        github: "https://github.com/Vaishnavibussa/DESIGNATHON-2025-Trishul-PS3.3",
        live: "https://designathon-2025-trishul-ps-3-3.vercel.app/"
    },
    {
        id:2,
        title:"MindHaven – Mental Health Management Platform",
        img:"https://scholarlykitchen.sspnet.org/wp-content/uploads/2023/09/iStock-1479494606.jpg",
        tech:" Python, Firebase, Gemini API, NodeJS, React.js",
        desc:"Developed an AI-powered platform with features like chatbot support, journaling, community support and personalized Spotify recommendations. Utilized real-time data analytics for personalized insights and gamification elements to boost user engagement. Enabled direct communication with mental health professionals through the website for comprehensive support",
        github: "https://github.com/",
        live: "https://react-commer.vercel.app"
    },
    {
        id:3,
        title:"CropCartel",
        img:crop,
        tech:" PHP, Gemini, Flask, Python, sci-kit-learn, MySQL",
        desc:" Implemented direct-to-consumer channels, reducing product-to-market time by 40%. Empowered farmers by eliminating middlemen. Applied ML algorithms for crop yield prediction and used TensorFlow for real-time plant health detection, achieving a success rate 60%, improving sustainability and crop managemen",
        github: "https://github.com/Vaishnavibussa/CropCartel",
        live: "https://react-commer.vercel.app"
    },
    {
        id:4,
        title:"Driver Drowsiness Detection",
        img: DDDimg,
        tech:"Python, TensorFlow, Keras, numpy, pandas, OpenCV, Convolutional Neural Networks",
        desc:"Developed a real-time system to detect driver fatigue using facial landmark tracking and eye aspect ratio analysis. Triggered audio-visual alerts upon detecting drowsiness, achieving 90%+ accuracy on webcam input.",
        github: "https://github.com/Vaishnavibussa/DriverDrowsinessDetection",
        live: "https://react-commer.vercel.app"
    },
    {
        id:5,
        title:"Leaf Disease Prediction",
        img:leaf,
        tech:"CNN,CV, Tensorflow, Keras, Python",
        desc:"Developed a real-time system to detect driver fatigue using facial landmark tracking and eye aspect ratio analysis. Triggered audio-visual alerts upon detecting drowsiness, achieving 90%+ accuracy on webcam input.",
        github: "https://github.com/Vaishnavibussa/LeafDiseasePrediction",
        live: "https://react-commer.vercel.app"
    },
    {
        id:6,
        title:"AAC Learning Hub",
        img:AAC,
        tech:"React, Nodejs, MySQL, Express",
        desc:"Facilitated mentorship by creating classes and assigning tasks, leading to a 35% increase in collaborative learning in the Advanced Academic Center(AAC) community. Enhanced mentorship with a customized Learning Management System.",
        github: "https://github.com/Vaishnavibussa/AAC_LMS",
        live: "https://react-commer.vercel.app"
    },
];

const Single=({item})=>{
    const ref=useRef();
      const {scrollYProgress}=useScroll({target: ref,
        offset:["start start","end start"]
      });

      const y=useTransform(scrollYProgress,[0,1],["0%","-300%"])

    return(
        <section ref={ref}>
        <div className="container">
        <div className="wrapper">
            <div className="imageContainer">          
            <img src={item.img} alt="" />
            </div>  
            <motion.div className="textContainer" style={{y}}>
                <h2 >{item.title}</h2>
                <h6>{item.tech}</h6>
                <p>{item.desc}</p>
                <a href={item.live} target="_blank" rel="noopener noreferrer">
  <button>Live Demo</button>
</a>
<a href={item.github} target="_blank" rel="noopener noreferrer">
  <button>GitHub</button>
</a>

            </motion.div>
            </div>
        </div>

    </section>
    );
};


const Portfolio = () => {
  const ref=useRef()
  const {scrollYProgress}=useScroll({target: ref,
     offset:["end end", "start start"]})

  const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })

  return (
    
    <div className="portfolio" id="Portfolio" ref={ref}>
        <div className="progress">
            <h1>Portfolio</h1>
            
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
            <p>Dive into my portfolio, where tech stacks meet real-world impact!</p>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id} />
        )
        )}
    </div>
  )
}

export default Portfolio
