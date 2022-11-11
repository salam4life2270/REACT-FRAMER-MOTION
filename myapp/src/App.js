import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import {motion} from "framer-motion";



const svgVariants = {
  start: {
      opacity: 0,
      pathLenght: 0
  },
  finished:{
    opacity: 1,
    pathLenght: 1,
    animate: {
      color: 'blue',
    },
    transition: {
      duration: 3,
      
  
    }
  }
};


function App() {
  return (
    // I would be creating two animated element on my page, one with div and the other with svg
    <div className="App"> 
      <div>
        <motion.button
        whileHover={{scale: 4, color: 'blue'}}
        initial={{opacity: 0, y: 0}}
         animate={{ scale: 3, opacity: 1, y: [-150, 0, 550, 0, -100, 0, 150], color: 'red'}}
         transition={{duration: 2, ease: "linear", times: [0, 0.2, 0.3, 0.5, 0.7, 0.8, 0.9]}}
         >Hello, welcome to React framer-motion..!</motion.button>
      </div>
      

 
      
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="-20 -12 64 64"
        stroke="currentColor"
        strokeWidth={2}
      >
      <motion.path 
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        variants={svgVariants}
        initial='start'
        animate="finished"
        whileHover={{color: "red", scale: 0.5}}
      
      />

      </svg>
    </div>
  );
}

export default App;
