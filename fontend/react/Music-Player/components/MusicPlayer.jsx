import React, { useRef, useEffect } from 'react'
import { useMusic } from '../hooks/useMusic'

const MusicPlayer = () => {
    const {currentTrack, currentTime,setCurrentTime, formatTime, duration, setDuration, nextTrack, prevTrack, play, pause, isPlaying} = useMusic();
    const audioRef = useRef(null);

    useEffect(()=>{
        const audio = audioRef.current;
        if(!audio) return;
        if (isPlaying){
            audio.play().catch((err)=>console.error(err));
        }else{
            audio.pause();
        }
    }, [isPlaying])

    useEffect(()=>{
       
        const audio = audioRef.current;
        if(!audio) return;

        const handleLoadedMetadata = ()=>{
            setDuration(audio.duration);
        };

        const handleTimeUpdate = ()=>{
           setCurrentTime(audio.currentTime);
        };

        const handleEnded = () =>{
           nextTrack();
        };

        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener('ended', handleEnded);

        return ()=>{
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("ended", handleEnded);
        }

    }, [setDuration, setCurrentTime, currentTrack]);

  return (
    <div className = "music-playere">
         <audio src = {currentTrack.url} ref = {audioRef} preload='metadata' crossOrigin='anonymous'/>
         <div className="track-info">
            <h3 className='track-title'>{currentTrack.title}</h3>
            <p className='track-artist'>{currentTrack.artist}</p>
         </div>

         <div className="progress-container">
            <span className="time">{formatTime(currentTime)}</span>
            <input type="range" min="0" max = {duration || 0} step = "0.1" value={currentTime || 0} className='progress-bar' />
            <span className="time">{formatTime(duration)}</span>
         </div>

         <div className="controls">
            <button className='control-btn' onClick={prevTrack}>⏮</button>
            <button className='control-btn play' onClick={()=> (isPlaying? pause(): play())}>{isPlaying ? "⏸" : "▶"}</button>
            <button className='control-btn' onClick={nextTrack}>⏭</button>
         </div>
    </div>
  )
}

export default MusicPlayer