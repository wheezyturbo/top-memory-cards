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

  // State to keep track of which card has been clicked
  const [clickedCard, setClickedCard] = useState(null);

  // Function to handle card click
  const handleCardClick = (name) => {
    setClickedCard(name);
    pushItems(name);
  };

  return (
    <div className="cards-container">
      <div className="game-info">
        <h1>Cards: {difficulty}</h1>
        <div className="score-container">
          <div className="score">
            <span className="score-label">Current Score:</span>
            <span className="score-value">{items.size}</span>
          </div>
          <div className="score">
            <span className="score-label">High Score:</span>
            <span className="score-value">{highScore}</span>
          </div>
        </div>
      </div>
      <div className="cards-grid">
        {shuffledCards.map((number, index) => (
          <motion.div
            key={number}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            <Card
              clickHandler={handleCardClick}
              name={number}
              isFlipped={true}
              //backgroundUrl={`https://picsum.photos/seed/${Math.random()}/${number * 20}/${number * 50}?blur=5`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

