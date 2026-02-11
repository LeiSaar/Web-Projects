import React, { useRef, useEffect } from "react"
import { useMusic } from "../contexts/MusicContext";

const MusicPlayer = () => {
    const { currentTrack,
        currentTime,
        setCurrentTime,
        formatTime,
        duration,
        setDuration,
        nextTrack,
        prevTrack,
        play,
        pause,
        isPlaying,
        volume,
        setVolume } = useMusic();

    const audioRef = useRef(null);

    const handleTimeChange = (e) => {
        const audio = audioRef.current;
        if (!audio) return;
        const newTime = parseFloat(e.target.value);
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    }

    const handleVolumeChange = (e)=>{
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    }

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.play().catch((err) => console.error(err));
        } else {
            audio.pause();
        }
    }, [isPlaying, currentTrack])

    useEffect(()=>{
        const audio = audioRef.current;
        if(!audio) return;
        audio.volume = volume;
    })

    useEffect(() => {

        const audio = audioRef.current;
        if (!audio) return;

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        const handleEnded = () => {
            nextTrack();
        };

        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("ended", handleEnded);
        }

    }, [setDuration, setCurrentTime, currentTrack, nextTrack]);

    const progressPercentage = duration > 0? (currentTime/duration) * 100 : 0;

    return (
        <div className="music-playere">
            <audio src={currentTrack.url} ref={audioRef} preload="metadata" crossOrigin="anonymous" />
            <div className="track-info">
                <h3 className="track-title">{currentTrack.title}</h3>
                <p className="track-artist">{currentTrack.artist}</p>
            </div>

            <div className="progress-container">
                <span className="time">{formatTime(currentTime)}</span>
                <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    step="0.1"
                    value={currentTime || 0}
                    className="progress-bar"
                    onChange={handleTimeChange} 
                    // style = {{"--progress": `${progressPercentage}%`}}
                 />
                <span className="time">{formatTime(duration)}</span>
            </div>

            <div className="controls">
                <button className="control-btn" onClick={() => { prevTrack(); play() }}>⏮</button>
                <button className="control-btn play" onClick={() => (isPlaying ? pause() : play())}>{isPlaying ? "⏸" : "▶"}</button>
                <button className="control-btn" onClick={() => { nextTrack(); play() }}>⏭</button>
            </div>

            <div className="volume-container">
                <span className="volume-icon"></span>
                <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1" 
                value={volume}
                className="volume-bar" 
                onChange={handleVolumeChange}/>
            </div>
        </div>
    )
}

export default MusicPlayer