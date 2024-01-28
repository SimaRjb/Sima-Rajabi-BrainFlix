import "./VideoList.scss";
import { NavLink } from 'react-router-dom';

function VideoList({videoId, videoList }) {
  
  return (
    <section className="videos">
      <div className="videos__wrapper">
        <div className="videos__header-wrapper">
          <h3 className="videos__header">NEXT VIDEOS</h3>
        </div>
        <ul className="videos__list">
          {videoList && videoList.length > 0 && videoList.map((video) => {
            console.log("video Id videolist component: ", videoId);
            console.log("video.id videolist component: ", video.id);
            return (
              video.id !== videoId && (
                <li
                  key={video.id}
                  // onClick={() => {
                  //   console.log(video);
                  //   alterVideo(video.id);
                  // }}
                >
                   <NavLink to={`/${video.id.toString()}`} className="video-link" activeClassName="active">
                  <div className="video__wrapper">
                    <div className="video__img-wrapper">
                      <img
                        className="video__img"
                        src={video.image}
                        alt="poster"
                      />
                    </div>

                    <div className="video__wrapper-right">
                      <div className="video__title-wrapper">
                        <h3 className="video__title">{video.title}</h3>
                      </div>

                      <div className="video__channel-wrapper">
                        <p className="video__channel">{video.channel}</p>
                      </div>
                    </div>
                  </div>
                  </NavLink>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default VideoList;
