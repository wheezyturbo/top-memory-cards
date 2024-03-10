import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Card({ name, clickHandler, backgroundUrl, isFlipped }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    name + 1
  }.png`;

  return (
    <motion.div className="card" onClick={() => clickHandler(name)}
    animate={{ rotateY: 180 }}
    transition={{ duration: 1 }}
    >
      <div
        className="card-bg"
      >
        <img src={imageUrl} alt="card-img" className="pokemon-img" />
      </div>
    {/* <h3>{name}</h3> */}
    </motion.div>
  );
}

