import React from "react";
import { Link } from "react-router-dom";
import EventName from "./Events_name";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <>
      <motion.section
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="events"
      >
        {EventName.map((eve) => {
          const { type, data } = eve;
          return (
            <div className="event_type">
              <h3>{type}</h3>
              {data.map((d) => {
                const { name, to } = d;
                return (
                  <p>
                    <Link to={to}> {name}</Link>
                  </p>
                );
              })}
            </div>
          );
        })}
      </motion.section>
    </>
  );
};

export default Events;
