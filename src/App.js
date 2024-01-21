import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import Comments from "./components/Comments/Comments";
import mainVideoData from './data/video-details.json'
// import videoListData from "./data/videos.json";

function App() {
  const [mainVideo, setMainVideo] = useState(mainVideoData[0]);
  const alterVideo = (videoObj) => {
    setMainVideo(videoObj);
  };
  return (
    <div className="App">
      <body>
        <Header />
        <MainVideo mainVideo={mainVideo} />
        <Comments />
      </body>
    </div>
  );
}

export default App;
