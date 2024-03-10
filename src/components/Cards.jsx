import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

export default function Cards({ items, highScore, difficulty, pushItems }) {
  // Function to shuffle the cards
  const shuffle = (array) => {
    let shuffledCharacters = [];
    let clicked = 0;

    while (shuffledCharacters.length < difficulty) {
      const randNum = Math.floor(Math.random() * array.length);
      const character = array[randNum];
      if (
        !shuffledCharacters.includes(character) &&
        (clicked < difficulty - 1 || !character.clicked)
      ) {
        shuffledCharacters.push(character);
        clicked += +character.clicked;
      }
    }
    return shuffledCharacters;
  };

  // Shuffled cards based on difficulty
  const shuffledCards = shuffle(Array.from(Array(10).keys()));

  return (
    <div>
      <h1>Cards: {difficulty}</h1>
      <p>Current Score: {items.size}</p>
      <p>High Score: {highScore}</p>
      <div className="cards-grid">
        {shuffledCards.map((number, index) => (
          <motion.div
            key={number}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            <Card
              clickHandler={pushItems}
              name={number}
              //backgroundUrl={`https://picsum.photos/seed/${Math.random()}/${number * 20}/${number * 50}?blur=5`}

            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

