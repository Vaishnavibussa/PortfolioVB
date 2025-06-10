

import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <motion.div
      className="parallax"
      id="About"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
        backgroundPositionY: yBg,
      }}
    >
 <motion.div className="aboutMeContainer" style={{ y: yContent }}>
   <img
    src="/normalpic.jpg" // Replace with your actual image path or URL
    alt="Vaishnavi Bussa"
    className="profilePic"
  />
  {/* <h1>Code, Cause & Curiosity ✨</h1>
  <p>
    I’m <span className="highlight">Vaishnavi Bussa</span> — a purpose-driven <strong>Full-Stack Developer</strong>, <strong>AIML Innovator</strong>, and tech storyteller who believes in building solutions that speak to both logic and life. As a B.Tech student in Information Technology at GRIET (<strong>CGPA: 9.32</strong>), I fuse technical rigor with real-world purpose. Whether it’s architecting scalable frontends, backends or training ML models, I strive to create technology that matters.
    <br /><br />
    
    I’ve interned as a <strong>Full-Stack Developer</strong> at <strong>TradeCafe.io</strong>, delivering real-time assistance platforms. As part of the prestigious <strong>Summer of AI</strong> cohort at <strong>IIIT Hyderabad & Swecha</strong>, I led socially impactful AI projects focused on Indic languages and scalable ML systems. I’m also an <strong>open-source contributor</strong> through <strong>GirlScript Summer of Code</strong>, where I collaborate on ML and web-based solutions that benefit the community.
    <br /><br />
    My journey includes impactful projects like <em>MindHaven</em>, an AI-first mental wellness platform; <em>Crop Cartel</em>, a blockchain-inspired farm-to-fork supply chain system; and <em>MindfulScroll</em>, a sentiment-aware tool that tackles doom-scrolling and promotes digital well-being.I’ve won <strong>national-level hackathons</strong> like Vivitsu (for CropCartel) and VNR Hack (for MindfulScroll). I also co-authored the book <em>"Data Structures Essentials"</em> — a beginner-friendly DSA guide for students like me.
    <br /><br />
    Beyond the IDE, I wear many hats —
As the <strong>President of G-Jeevan Club</strong>, I’ve led impactful initiatives, curated tech-driven events, and overseen operations for a vibrant student community of over <strong>250 members</strong>, driving both innovation and engagement. As a <strong>Senior Mentor at AAC</strong>, I’ve guided <strong>40+ juniors</strong> across multidisciplinary domains — from <em>web development</em> and <em>AI/ML</em> to <em>computer science fundamentals</em> — nurturing their growth through structured mentorship and hands-on collaboration.
    <br /><br /> */}
    
    <h1>Code, Cause & Curiosity ✨</h1>
<p>
  I’m <span className="highlight">Vaishnavi Bussa</span> — a purpose-driven <strong>Full-Stack Developer</strong>, <strong>AIML Innovator</strong>, and tech storyteller. As a B.Tech IT student at GRIET (<strong>CGPA: 9.32</strong>), I combine technical rigor with real-world impact, building scalable frontends, backends, and ML models that matter.
  <br /><br />
  I’ve interned at <strong>TradeCafe.io</strong>, creating real-time assistance platforms, and was part of the <strong>Summer of AI</strong> cohort at <strong>IIIT Hyderabad & Swecha</strong>, leading AI projects focused on Indic languages and scalable ML systems. As a <strong>GirlScript Summer of Code</strong> contributor, I collaborate on open-source ML and web solutions.
  <br /><br />
  My projects include <em>MindHaven</em> (AI-powered mental wellness), <em>Crop Cartel</em> (blockchain-inspired farm-to-fork supply chain), and <em>MindfulScroll</em> (a tool combating doom-scrolling). I’ve won national hackathons like Vivitsu and VNR Hack, and co-authored <em>"Data Structures Essentials"</em>, a beginner-friendly DSA guide.
  <br /><br />
  Beyond code, I lead as <strong>President of G-Jeevan Club</strong>, driving initiatives and events for 250+ members, and mentor 40+ juniors at AAC across web development, AI/ML, and computer science fundamentals.
</p>
<p>
    
    Every line of code I write is driven by curiosity, every solution I build is grounded in empathy, and every project I take up is for a cause that sparks change.
  </p>
</motion.div>

    </motion.div>
  );
};

export default Parallax;
