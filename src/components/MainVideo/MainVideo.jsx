import "./MainVideo.scss";
// import "../../data/videos.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
function MainVideo({ apiKey, baseUrl, videoList }) {
  const { videoId } = useParams();
  const [mainVideo, setMainVideo] = useState({});
  // console.log("the first video is: ", videoList[0]);
  const fetchMainVideo = async () => {
    try {
      if (videoId) {
        const res = await axios.get(
          `${baseUrl}/videos/${videoId}?api_key=${apiKey}`
        );
        // console.log("res in main video is :" ,res.data);
        if(res){setMainVideo(res.data)}
      }
      else{
        // if (videoList.length > 0) {
          setMainVideo(videoList[0]);
        // }
        // else{
        //   console.log("image is empty")
        // }
        // // setMainVideo(videoList[0]);
        // console.log("video list [0] is: ", videoList[0]);
      }

      // setMainVideo(res.data);
      // console.log("resVideoDetails: ", res.data);
      // console.log("video details : ",  JSON.stringify(mainVideo));
    } catch (error) {
      console.log("this is my error", error);
    }
  };
  useEffect(() => {
    fetchMainVideo();
  }, []);

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

// function MainVideo({ mainVideo }) {
//   return (
//     <section className="main-video">
//       <div className="main-video-container">
//         <div className="main-video__wrapper">
//           <video
//             className="main-video__featured"
//             alt="The Selected Video"
//             poster={mainVideo.image}
//             controls
//           ></video>
//         </div>
//       </div>
//     </section>
//   );
// }

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
