import React from 'react';
import Typewriter from 'typewriter-effect';


function Typewritter() {
  return (
    <div className="typewriter text-white text-5xl font-bold font-serif">
      <Typewriter
        options={{
          strings: ["Puneet", "Web Designer", "Web Developer"],
          autoStart: true,
          loop: true,
        }}

        delay={25} // Set the delay to 25 milliseconds (faster typing)
        deleteSpeed={50} // Set the delete speed to 50 milliseconds (faster deletion)
      />
    </div>
  );
}

export default Typewritter;
