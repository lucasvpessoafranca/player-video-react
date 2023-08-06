import { useEffect, useRef, useState } from "react"
import videoSrc from './video.mp4'
export function App() {
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {

  }, [])
  return (
    <div>
      <p>{playing? 'tocando' : 'nao tocando'}</p>
      <div>
        <button onClick={()=> video.current?.play()}>Play</button>
        <button onClick={()=> video.current?.pause()}>Pause</button>

        <div>
          <video controls src={videoSrc} onPlay={()=> setPlaying(true)} onPause={()=> setPlaying(false)}></video>
        </div>



      </div>
    </div>
  )
}