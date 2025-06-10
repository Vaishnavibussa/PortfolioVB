

import React, { useState } from "react";
import "./achievements.scss";

const achievementsData = [
{
  title: "Hackathons & Competitions",
  icon: "./Hackwin.jpg",
  short: "Built Crop Cartel — a farm-to-fork platform using AI and blockchain.",
  full: (
    <p>
      Participated in several hackathons, including <strong>Crop Cartel</strong>, a digital platform
      connecting farmers directly with consumers, leveraging <em>AI/ML</em> for crop predictions and
      <em> blockchain</em> for secure transactions.
    </p>
  ),
},
  {
    title: "Certificates",
    icon: "https://th.bing.com/th/id/OIP.rlmMYri37rq9NM2XD5bvLAHaKI?rs=1&pid=ImgDetMain",
    short: "Certified in Fullstack, Cloud, ML & DSA.",
    full: (
      <ul>
        <li>Contributor at GirlScript Summer of Code (GSSoC'24)</li>
        <li>Completed courses on AI/ML, Data Structures, and Web Development</li>
        <li>Certified in Fullstack Development & Cloud Technologies</li>
      </ul>
    ),
  },
  {
    title: "DSA Book",
    icon: "https://th.bing.com/th/id/OIP.VTDtBY9ssUVZXyGIsEl6ugHaEI?w=286&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
    short: "Author of DSA Essentials guide.",
    full: "Authored a comprehensive Data Structures and Algorithms book for college students, covering linked lists, trees, sorting, and problem-solving techniques with examples and exercises.",
  },
  {
    title: "Leadership & Mentorship",
    icon: "heroine.jpeg",
    short: "Led 250+ members as G-Jeevan President & mentored 40+ juniors.",
    full: (
      <p>
        Beyond the IDE, I wear many hats —<br />
        As the <strong>President of G-Jeevan Club</strong>, I’ve led impactful initiatives, curated tech-driven events,
        and overseen operations for a vibrant student community of over <strong>250 members</strong>, driving both innovation and engagement.<br />
        As a <strong>Senior Mentor at AAC</strong>, I’ve guided <strong>40+ juniors</strong> across domains — from <em>web development</em>,
        <em>AI/ML</em>, to <em>CS fundamentals</em>, nurturing their growth through mentorship and collaboration.
      </p>
    ),
  },
  {
    title: "Open Source & Contributions",
    icon: "./gssoc.png",
    short: "Contributor at GSSoC & dev communities.",
    full: "Actively contribute to open-source projects with a focus on educational tools and developer communities. Recognized contributor at GSSoC and other initiatives.",
  },
  {
  title: "Beyond Tech",
  icon: "./dance.jpg", // Choose or create an appropriate icon
  short: "Achievements in dance and sports at national level.",
  full: (
    <ul>
      <li><strong>National Classical Dancer</strong> – Performed in prestigious cultural festivals and events across India.</li>
      <li><strong>National Softball Player</strong> – Represented state in inter-state and national-level championships.</li>
    </ul>
  ),
},
];

const Achievements = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="achievements-section" id="Achievements">
      <h1 className="title">My Achievements</h1>

      <div className="cards-container">
        {achievementsData.map((item, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <img src={item.icon} alt={`${item.title} icon`} className="icon" />
              <h2>{item.title}</h2>
            </div>
            <p className="short-desc">{item.short}</p>

            {expandedIndex === index && <div className="full-desc">{item.full}</div>}

            <button onClick={() => toggle(index)} className="toggle-btn">
              {expandedIndex === index ? "Show Less ▲" : "More Info ▼"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
