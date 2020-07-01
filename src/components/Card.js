import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './components.css';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => {
  // For usage to track if an item is being hovered on
  const [hovered, setHovered] = useState(false);

  const bgImage = {
    backgroundImage:
      'linear-gradient( rgba(' +
      props.color +
      ', 0.8), rgba(' +
      props.color +
      ', 0.3) ), url(' +
      props.image +
      ')',
  };

  return (
    <motion.div
      animate={
        hovered
          ? { translateY: -10, boxShadow: '0px 0px 20px 2px grey' }
          : { translateY: 0, boxShadow: '0px 0px 5px 0px grey' }
      }
      className="dynamic-cards mb-3"
      style={bgImage}
      id={props.id}
      key={props.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={
        props.locked || props.unfinished
          ? {
              scale: 1,
              translateX: [0, -10, 10, -10, 10, 0],
            }
          : { scale: 0.95 }
      }
    >
      <p>
        {' '}
        {props.locked && (
          <span className="message locked rg">
            Contact Me! <FontAwesomeIcon icon="lock" size="xs" />
          </span>
        )}
        {props.unfinished && (
          <span className="message soon rg">
            Coming Soon <FontAwesomeIcon icon="lock" size="xs" />
          </span>
        )}
      </p>
      <span>
        <p className="font-weight-medium mt-2" style={{ lineHeight: '0' }}>
          {props.name}
        </p>
        <h3 className="font-weight-medium">{props.role}</h3>
      </span>
      <motion.p
        className="font-weight-light text-card"
        animate={
          hovered
            ? {
                opacity: 1,
                translateY: 0,
                padding: '10px',
                borderRadius: '10px',
              }
            : {
                opacity: 0,
                translateY: 20,
                padding: '10px',
                borderRadius: '10px',
              }
        }
        transition={{ duration: 0.333 }}
      >
        {props.description}
      </motion.p>
    </motion.div>
  );
};

export default Card;
