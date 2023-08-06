import { useEffect, useRef, useState } from "react"
import videoSrc from './video.mp4'
export function App() {
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  useEffect(() => console.log("Funcionou"), [])


  function forward() {
    if(video.current) {

      video.current.currentTime = video.current.currentTime +  2
    }
  }

  function changePlayBackRate(speed:number) {
    if(!video.current)return ;
    video.current.playbackRate =speed
  }

  function mute () {
    if(!video.current) return 
    video.current.muted = !video.current.muted
  }

 async function pictureInPicture() {
  if(!video.current) return;
  if(document.pictureInPictureElement) {
      await document.exitPictureInPicture()
  } else {
    
    await video.current.requestPictureInPicture()
  }
 
  }


  return (
    <div>
      <div className="flex">

       
        {playing ? <button onClick={() => video.current?.pause()}>Pause</button> : <button onClick={() => video.current?.play()}>Play</button>}
        <button onClick={()=> forward()}> + 2s </button>
        <button onClick={()=> changePlayBackRate(1)}>  1x </button>
        <button onClick={()=> changePlayBackRate(2)}>  2x </button>
        <button onClick={mute}>M</button>
        <button onClick={pictureInPicture}>PiP</button>
      </div>

      <video controls src={videoSrc}
        ref={video}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}


      ></video>
    </div>
  )

}