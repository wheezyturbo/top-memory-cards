import {motion} from 'framer-motion'
export default function StartMenu({closeStart}) {
  return (
    <div className="start-menu">
<motion.div
  initial={{ rotate:180, scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>      <h2>Memory Game</h2>
      <p>Step into the darkness of the mind with this chilling rendition of the Memory Game. Each card in the deck holds secrets and shadows, featuring characters from the darkest corners of the psyche. As you navigate the abyss, the cards lie face down, concealing their eerie visages. Dare to flip a card, but beware: selecting one that has already revealed its haunting identity brings you closer to the abyss of defeat. The game unfolds in a relentless dance of memory and chance, where each misstep plunges you deeper into the depths of darkness. Can you brave the shadows and match the cards before the darkness consumes you? The fate of your sanity hangs in the balance.</p>
      <button onClick={closeStart}>Close</button>
    </motion.div>
</div>
  )
}
