import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:videoId" element={<HomePage/>}/>
        <Route path="/upload" element={<VideoUpload/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
