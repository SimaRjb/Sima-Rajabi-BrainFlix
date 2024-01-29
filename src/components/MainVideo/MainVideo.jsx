import "./MainVideo.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function MainVideo({ videoId, apiKey, baseUrl, videoList }) {
  const [mainVideo, setMainVideo] = useState({});
  const fetchMainVideo = async () => {
    try {
      if (videoId) {
        const res = await axios.get(
          `${baseUrl}/videos/${videoId}?api_key=${apiKey}`
        );
        if (res) {
          setMainVideo(res.data);
        }
      } else {
        setMainVideo(videoList[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMainVideo();
  }, [videoId]);

  return (
    <section className="main-video">
      <div className="main-video-container">
        <div className="main-video__wrapper">
          <video
            className="main-video__featured"
            alt="The Selected Video"
            poster={mainVideo.image}
            controls
          ></video>
        </div>
      </div>
    </section>
  );
}

export default MainVideo;
// ParentComponent.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { MainVideo } from './MainVideo';
// import { VideoList } from './VideoList';

// const ParentComponent = () => {
//   const [videoList, setVideoList] = useState([]);

//   useEffect(() => {
//     const fetchVideoList = async () => {
//       try {
//         const response = await axios.get('https://api.example.com/videos');
//         setVideoList(response.data);
//       } catch (error) {
//         console.error('Error fetching video list:', error);
//       }
//     };

//     fetchVideoList();
//   }, []);

//   return (
//     <div>
//       <MainVideo videoList={videoList} />
//       <VideoList videoList={videoList} />
//     </div>
//   );
// };

// export default ParentComponent;
