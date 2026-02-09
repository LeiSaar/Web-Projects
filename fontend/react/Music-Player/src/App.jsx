import React from 'react'
import MusicPlayer from '../components/MusicPlayer'
import AllSongs from '../components/AllSongs';
import { BrowserRouter, Routes, Route } from "react-router";
import PlayLists from '../components/PlayLists';



function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <main className='app-main'>
          <div className='player-section'>
            <MusicPlayer />
          </div>
          <div className="content-section">
            <Routes>
              <Route path="/" element={<AllSongs />} />
              <Route path="/playlists" element={<PlayLists />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App