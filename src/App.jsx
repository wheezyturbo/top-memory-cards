import { useState,useEffect } from 'react'
import Cards from './components/Cards'
import StartMenu from './components/StartMenu';
import './App.css';
export default function App(){
  const [showStart,setShowStart] = useState(true);
  const [items,setItems] = useState(new Set());
  const [gameOver,setGameOver] = useState(false);
  const [highScore,setHighScore] = useState(0);

  function updateScore(){
    setHighScore(items.size > highScore ? items.size : highScore);
  }

  function pushItems(item){
    console.log({items,"has":items.has(item)})  
    items.size<9 ? items.has(item)?setGameOver(true):setItems(new Set(items).add(item)) : setGameOver(true);
  }
  gameOver&&reset()
  function reset(){
    updateScore();
    setGameOver(false);
    setItems(new Set());
    setShowStart(true);
  }

  function closeStart(){
    showStart&&setShowStart(false);
  }
  return <div className="app">
    {showStart?<StartMenu closeStart={closeStart}/>:<Cards items={items} highScore={highScore} difficulty={10} pushItems={pushItems}/>}
  </div>
} 
