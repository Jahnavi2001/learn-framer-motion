import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, type: "spring" },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
};
const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: { x: 0, transition: { type: "spring", stiffness: 120 } },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      repeatType: "reverse", // (reverse | mirror | loop)
      repeat: Infinity,
      duration: 0.3,
    },
  },
};

const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

const Base = ({ addBase, pizza }) => {

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.5, originX: 0, color: "yellow" }}
              transition={{ type: "spring", stiffness: "300" }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {/* By default in pixels we can give vw */}
      {pizza.base && (
        <motion.div variants={nextVariants} className="next">
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
