import "./HomePage.scss";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideoList/VideoList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function HomePage() {
  const baseUrl = "https://project-2-api.herokuapp.com";
  let apiKey = null; //global variable to store the API Key

  const { videoId } = useParams();
  //  videoId = "84e96018-4022-434e-80bf-000ce4cd12b8"
  const [videoDetails, setVideoDetails] = useState({});

  const fetchApiKey = async () => {
    try {
      const res = await axios.get(`${baseUrl}/register`);
      apiKey = res.data;
      console.log(apiKey);
    } catch (error) {
      console.error("Error fetching API key: ", error);
    }
  };
  (async () => {
    await fetchApiKey();
  })();

  const fetchVideoDetails = async () => {
    try {
      if (videoId) {
        const resVideoDetails = await axios.get(
          `${baseUrl}/videos/${videoId}?api_key=${apiKey}`
        );
        setVideoDetails(resVideoDetails.data);
        console.log(resVideoDetails.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVideoDetails();
  }, []);

  //  const fetchVideoList = async () =>{
  //     try {
  //         const resVideoList = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`)
  //         console.log(resVideoList.data);
  //     } catch (error) {
  //         console.error(error);
  //     }
  //  }

  //  (async() =>{
  //     fetchVideoList();
  //  })();

  return (
    <main>
      <MainVideo />
    </main>
  );
}
export default HomePage;
