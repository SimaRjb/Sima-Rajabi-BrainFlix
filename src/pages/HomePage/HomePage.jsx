import "./HomePage.scss";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoList from "../../components/VideoList/VideoList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function HomePage(props) {

  const apiKey = props.apiKey;
  // const baseUrl = "https://project-2-api.herokuapp.com";
  let baseUrl = "http://localhost:8081"
const {REACT_APP_API_BASE_PATH} = process.env;
// baseUrl = REACT_APP_API_BASE_PATH;


  // const [apiKey, setApiKey] = useState(null);
  // const fetchApiKey = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}/register`);
  //     setApiKey(res.data.api_key);
  //     console.log("api key: ", res.data.api_key);
  //   } catch (error) {
  //     console.error("Error fetching API key: ", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchApiKey();
  // }, []);

  const [loading, setLoading] = useState(true);

  const [videoList, setVideoList] = useState([]);
  const fetchVideoList = async () => {
    try {
      const res = await axios.get(`${REACT_APP_API_BASE_PATH}/videos?api_key=${apiKey}`);
      console.log("video list: ",res.data)
      setVideoList(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!apiKey) {return;}
    fetchVideoList();
  }, [apiKey]);

  const { videoId } = useParams();
  return (
    
    <main>
      {!loading && videoList && videoList.length > 0 && (
        <>
      <MainVideo videoId={videoId} apiKey={apiKey} baseUrl={REACT_APP_API_BASE_PATH} videoList={videoList} />
      
      <div className="wrapper">
        <div className="wrapper__comments">
        <VideoDetails
          videoId={videoId}
            apiKey={apiKey}
            baseUrl={REACT_APP_API_BASE_PATH}
            videoList={videoList}
          />
        </div>
        <div className="wrapper__video-list">
        <VideoList videoId={videoId} videoList={videoList} />
        </div>
      </div>
      </>
)}
      </main>
  );
}

export default HomePage;