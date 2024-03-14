import { useState,useEffect } from 'react'
import Cards from './components/Cards'
import StartMenu from './components/StartMenu';
import './App.css';
import background from '/audio/background.mp3';
import click from '/audio/click.mp3'
import BackgroundAudioButton from './components/BackgroundAudioButton';
import GameOverPopUp from './components/GameOverPopUp';

export default function App(){
  const [showStart,setShowStart] = useState(true);
  const [items,setItems] = useState(new Set());
  const [gameOver,setGameOver] = useState(false);
  const [highScore,setHighScore] = useState(()=>localStorage.getItem("highscore")?Number(localStorage.getItem("highscore")):0);
  const [bgAudio] = useState(new Audio(background));
  const [clickAudio] = useState(new Audio(click));
  const [isBgPlaying,setIsBgPlaying] = useState(true);
  const [retry,setRetry] = useState(false);
  const [currentScore,setCurrentScore] = useState(0);

  function updateScore(){
    setHighScore(items.size > highScore ? items.size : highScore);
    setCurrentScore(items.size);
  }

  useEffect(() => {
      gameOver && bgAudio.pause();
  }, [gameOver])
  function stopPlaying(){
    if(isBgPlaying){
      setIsBgPlaying(false);
      bgAudio.pause();
    }
    else{
      setIsBgPlaying(true);
      bgAudio.play();
    }
  }
  
  useEffect(()=>{
    bgAudio.volume=0.2;
    bgAudio.muted = false;
    bgAudio.loop = true;
    bgAudio.play();
    return ()=>{
      bgAudio.pause();
    }
  },[bgAudio])

  useEffect(()=>{
    highScore > localStorage.getItem("highscore") && localStorage.setItem("highscore",highScore);
  },[highScore])

  function pushItems(item){
    clickAudio.currentTime=0;
    clickAudio.play();
    console.log({items,"has":items.has(item)})  
    //items.size<9 ? items.has(item)?setGameOver(true):setItems(new Set(items).add(item)) : setGameOver(true);
    items.has(item)?setGameOver(true):setItems(new Set(items).add(item));
  }
  gameOver&&reset()
  function reset(){
    updateScore();
    setRetry(true);
    setGameOver(false);
    !retry&&setItems(new Set());
    setShowStart(true);
  }

  function closeStart(){
    showStart&&setShowStart(false);
  }

  function closeRetry(){
    setItems(new Set());
    setRetry(false);
    setShowStart(false);
  }

  return <div className="app">
    {showStart?!retry?<StartMenu closeStart={closeStart}/>:<GameOverPopUp items={currentScore} highScore={highScore} retryFn={closeRetry}/>:<Cards items={items} highScore={highScore} difficulty={10} pushItems={pushItems}/>}
    <BackgroundAudioButton isPlaying={isBgPlaying} stopMusic={stopPlaying} />
  </div>
} 
