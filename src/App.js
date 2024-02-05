
import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

function App() {
  let baseUrl = "http://localhost:8081"
const {REACT_APP_API_BASE_PATH} = process.env;

  const [apiKey, setApiKey] = useState(null);
  const fetchApiKey = async () => {
    try {
      const res = await axios.get(`${REACT_APP_API_BASE_PATH}/register`);
      setApiKey(res.data.api_key);
    } catch (error) {
      console.error("Error fetching API key: ", error);
    }
  };
  useEffect(() => {
    fetchApiKey();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage apiKey = {apiKey}/>}/>
        <Route path="/:videoId" element={<HomePage apiKey = {apiKey}/>}/>
        <Route path="/upload" element={<VideoUpload  apiKey = {apiKey}/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
