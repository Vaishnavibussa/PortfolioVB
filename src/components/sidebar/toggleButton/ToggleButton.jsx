

import React from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      style={{ background: "transparent", border: "none", cursor: "pointer" }}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke={open ? "black" : "white"}
          strokeLinecap="round"
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
           transition={{ duration: 0.3 }}
        />
        <motion.path
          strokeWidth="3"
          stroke={open ? "black" : "white"}
          strokeLinecap="round"
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 9.423 L 20 9.423", opacity: 1 },
            open: { opacity: 0 },
          }}
           transition={{ duration: 0.3 }}
        />
        <motion.path
          strokeWidth="3"
          stroke={open ? "black" : "white"}
          strokeLinecap="round"
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
           transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;


