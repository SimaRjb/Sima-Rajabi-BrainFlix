import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoList from "./components/VideoList/VideoList";
import Comments from "./components/Comments/Comments";
import mainVideoData from './data/video-details.json'
import videoListData from "./data/videos.json";

function App() {
  const [mainVideo, setMainVideo] = useState(mainVideoData[0]);
  const alterVideo = (videoId) => {
    const selectedVideo = mainVideoData.find(videoData => videoData.id == videoId)
    setMainVideo(selectedVideo);
  };

  return (
    <div className="App">

        <Header />
        <MainVideo mainVideo={mainVideo} />
        <Comments mainVideo={mainVideo}/>
        <VideoList videoListData={videoListData} mainVideo={mainVideo} alterVideo={alterVideo}/>

    </div>
  );
}

export default App;
