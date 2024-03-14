export default function BackgroundAudioButton({isPlaying,stopMusic}){
  return <button className="audio-btn" onClick={stopMusic}>{isPlaying?"x":"o"}</button>
}
