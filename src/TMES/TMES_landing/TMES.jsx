import React from "react";
import "./TMES.scss";
import Brand from "./Brand";
import Prof from "./Prof";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { C_Btn } from "../../Components";

const homeVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: "0vw",
    transition: {
      // delay: 0.4,
      type: "spring",
      duration: 1,
    },
  },
  // exit: {
  //   x: "-100vh",
  //   transition: { ease: 'easeInOut' }
  // }
};

const TMES = () => (
  <>
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      id="tmes"
    >
      <div className="header section__padding">
        <div className="header-content">
          {/* <div className="header-image">
          <img src={logo} />
          <h1 className="gradient__text">TMES</h1>
        </div>
        <p style={{ fontSize: "1.6rem" }} className="gradient__text">
          Presents
        </p> */}
          <h1 className="text__tmes">
            <Typewriter
              options={{
                strings: ["WELCOME TO TMES"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>
            Technology Mining Engineering Society (TMES) aims at bringing a
            closer association among the students and faculty members in the
            department. It has initiated Social Cultural and Sports Events,
            which brings them together for a closer interaction.
          </p>

          <div style={{ margin: "4rem 0 0 0" }}>
            <C_Btn txt="Register Now" link="/signup"></C_Btn>
          </div>
        </div>

        <div className="header-image">
          <img src="https://source.unsplash.com/pGSgYmTDdvk" alt="" />
        </div>
      </div>
      {/* <Brand /> */}
      <Prof />
    </motion.div>
  </>
);

export default TMES;
