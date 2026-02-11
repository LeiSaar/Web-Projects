import { createContext, useContext, useState , useEffect} from "react";

const songs = [
    {
        id: 1,
        title: "Ballade Pour Adeline",
        url: "/songs/Ballade Pour Adeline.mp3",
        artist: "Richard Clayderman",
        duration: "2:36",
    },
    {
        id: 2,
        title: "I Giorni",
        url: "/songs/I Giorni.mp3",
        artist: "Ludovico Einaudi",
        duration: "5:09",
    },
    {
        id: 3,
        title: "Lettre à ma mère",
        url: "/songs/Lettre à ma mère.mp3",
        artist: "Richard Clayderman",
        duration: "2:44"
    },
    {
        id: 4,
        title: "Mariage D'amour",
        url: "/songs/Mariage D'amour.mp3",
        artist: "Richard Clayderman",
        duration: "2:38"
    },
    {
        id: 5,
        title: "Snowdream",
        url: "/songs/Snowdream.mp3",
        artist: "Bandari",
        duration: "4:53"
    },
    {
        id: 6,
        title: "The Sound Of Silence",
        url: "/songs/The Sound Of Silence.mp3",
        artist: "Bandari",
        duration: "3:45"
    },
]


const MusicContext = createContext();

export const MusicProvider = ({ children }) => {

    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [playlists, setPlaylists] = useState([]);

     useEffect(()=>{
        const savedPlaylists = localStorage.getItem("musicPlayerPlaylists");
        if(savedPlaylists){
            const playlists = JSON.parse(savedPlaylists);
            setPlaylists(playlists);
        }
    }, [])

    useEffect(()=>{
          if(playlists.length>0){
            localStorage.setItem("musicPlayerPlaylists", JSON.stringify(playlists));
          } else{
            localStorage.removeItem("musicPlayerPlaylists");
          }
    }, [playlists])


    const handlePlaySong = (song, index) => {
        setCurrentTrack(song);
        setCurrentTrackIndex(index);
        isPlaying ? pause() : play();
    };

    const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => {
            const nextIndex = (prev + 1) % allSongs.length;
            setCurrentTrack(allSongs[nextIndex]);
            return nextIndex;
        });
    };

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => {
            const nextIndex = prev === 0 ? allSongs.length - 1 : prev - 1;
            setCurrentTrack(allSongs[nextIndex]);
            return nextIndex;
        });
    };

    const formatTime = (time) => {
        if (isNaN(time) || time === undefined) return "0:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const createPlaylist = (name) => {
        const newPlaylist = {
            id: Date.now(),
            name,
            songs: []
        }

        setPlaylists((prev) => [...prev, newPlaylist]);
    };

    const addSongToPlaylist = (playlistId, song) => {
        setPlaylists((prev) => prev.map((playlist) => {
            if (playlist.id === playlistId) {
                return { ...playlist, songs: [...playlist.songs, song] };
            } else {
                return playlist;
            }
        }));
    };

    const deletePlaylist = (playlistId) =>{
        setPlaylists ((prev)=> prev.filter((playlist)=> playlist.id !== playlistId ));
    }

    return <MusicContext.Provider value={
        {
            allSongs,
            handlePlaySong,
            currentTrack,
            setCurrentTrack,
            currentTrackIndex,
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
            setVolume,
            createPlaylist,
            playlists,
            addSongToPlaylist,
            deletePlaylist
        }
    } >
        {children}
    </MusicContext.Provider>
}

export const useMusic = () => {
    const contextValue = useContext(MusicContext);
    if (!contextValue) {
        throw new Error("useMusic must be used inside of MusicProvider");
    };
    return contextValue;
}
