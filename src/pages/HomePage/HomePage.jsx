import "./HomePage.scss";
import MainVideo from "../../components/MainVideo";
import VideoList from "../../components/VideoList";
import { useEffect } from "react";
import { useParams } from "react-router";

function HomePage(){

    return(
        <main>
            <MainVideo/>

        </main>
    )
}
export default HomePage;