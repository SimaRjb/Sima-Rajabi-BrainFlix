import "./HomePage.scss";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoList from "../../components/VideoList/VideoList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";


function HomePage() {
  const baseUrl = "https://project-2-api.herokuapp.com";

  //  a = "84e96018-4022-434e-80bf-000ce4cd12b8"
  //b = "99478bed-6428-49ed-8eaa-f245a5414336"


  const [apiKey, setApiKey] = useState(null);
  const fetchApiKey = async () => {
    try {
      const res = await axios.get(`${baseUrl}/register`);
      setApiKey(res.data);
    } catch (error) {
      console.error("Error fetching API key: ", error);
    }
  };
  useEffect(() => {
    fetchApiKey();
  }, []);

  const [loading, setLoading] = useState(true)

  const [videoList, setVideoList] = useState([]);
  const fetchVideoList = async () => {
    try {
      const res = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
      setVideoList(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideoList();
  }, []);

  const { videoId } = useParams();
console.log("video id inside home: ",videoId);
  return (
    <main>
      <div></div>
{/* {console.log("llllllllllloading:  ", loading)}
{console.log("videolist  :", videoList)}
{console.log("videlolist length  :",videoList.length)} */}
      {!loading && videoList && videoList.length > 0 && (
        <>
          <MainVideo videoId={videoId} apiKey={apiKey} baseUrl={baseUrl} videoList={videoList} />
          <VideoDetails
          videoId={videoId}
            apiKey={apiKey}
            baseUrl={baseUrl}
            videoList={videoList}
          />
          <VideoList videoId={videoId} videoList={videoList} />
        </>
      )}
    </main>
  );
}
export default HomePage;

//   const fetchVideoDetails = async () => {
//     try {
//       if (videoId) {
//         const resVideoDetails = await axios.get(
//           `${baseUrl}/videos/${videoId}?api_key=${apiKey}`
//         );
//         setVideoDetails(resVideoDetails.data);
//         console.log("resVideoDetails: ", resVideoDetails.data);
//         console.log("video details : ", videoDetails);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchVideoDetails();
//   }, []);
