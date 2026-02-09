import { useState } from "react";

const songs = [
    {
        id: 1, 
        title: "Ballade Pour Adeline",
        url:"/songs/Ballade Pour Adeline.mp3",
        artist: "Richard Clayderman",
        duration: "2:36",
    },
     {
        id: 2, 
        title: "I Giorni",
        url:"/songs/I Giorni.mp3",
        artist: "Ludovico Einaudi",
        duration: "5:09",
    },
     {
        id: 3, 
        title: "Lettre à ma mère",
        url:"/songs/Lettre à ma mère.mp3",
        artist: "Richard Clayderman",
        duration: "2:44"
    },
     {
        id: 4, 
        title: "Mariage D'amour",
        url:"/songs/Mariage D'amour.mp3",
        artist: "Richard Clayderman",
        duration: "2:38"
    },
     {
        id: 5, 
        title: "Snowdream",
        url:"/songs/Snowdream.mp3",
        artist: "Bandari",
        duration: "4:53"
    },
     {
        id: 6, 
        title: "The Sound Of Silence",
        url:"/songs/The Sound Of Silence.mp3",
        artist: "Bandari",
        duration: "3:45"
    },
]

export const useMusic = ()=>{
    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlaySong = (song, index)=>{
               setCurrentTrack(song);
               setCurrentTrackIndex(index);
    };

      const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);

    const nextTrack = ()=>{
        setCurrentTrackIndex((prev)=>{
            const nextIndex = (prev + 1) % allSongs.length;
            setCurrentTrack(allSongs[nextIndex]);
            play();
            return nextIndex;
        });
    };

    const prevTrack = () =>{
          setCurrentTrackIndex((prev)=>{
            const nextIndex = prev===0? allSongs.length -1: prev -1;
            setCurrentTrack(allSongs[nextIndex]);
            play();
            return nextIndex;
          });
    };

    const formatTime = (time) =>{
        if (isNaN(time)|| time === undefined) return "0:00";

        const minutes = Math.floor(time /60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

  

    return {allSongs, handlePlaySong,currentTrack, currentTrackIndex, currentTime, setCurrentTime, formatTime, duration, setDuration, nextTrack, prevTrack, play, pause, isPlaying};
}