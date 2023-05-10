// import React from 'react';
import '../Home/Home.css';
import Typewriter  from 'typewriter-effect';

const Text = () => {
  return (
    
        <Typewriter
        options={{
            strings: ["MERN STACK DEVELOPER", "FULL STACK DEVELOPER"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }} />

   
  );
}

export default Text;