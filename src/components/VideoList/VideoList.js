import "./VideoList.scss";
// import mainVideoData from '../../data/video-details.json';
// import '../../data/videos.json';

function VideoList({ videoListData, mainVideo, alterVideo }) {
  return (
    <section className="videos">
      <div className="videos__wrapper">
        <ul className="videos__list">
          {/* <li>
            <div className="video__wrapper">
              <div className="video__img-wrapper">
                <img className="video__img" src="" alt="poster" />
              </div>

              <div className="video__title-wrapper">
                <h3 className="video__title"></h3>
              </div>

              <div className="video__channel-wrapper">
                <p className="video__channel"></p>
              </div>
            </div>
          </li>
          <li></li> */}

          {videoListData.map((video) => {
            return (
              video.id !== mainVideo.id && (
                <li
                  key={video.id}
                  onClick={() => {
                    console.log(video);
                    alterVideo(video.id);
                  }}
                >
                  <div className="video__wrapper">
                    <div className="video__img-wrapper">
                      <img className="video__img" src={video.image} alt="poster" />
                    </div>

                    <div className="video__title-wrapper">
                      <h3 className="video__title">{video.title}</h3>
                    </div>

                    <div className="video__channel-wrapper">
                      <p className="video__channel">{video.channel}</p>
                    </div>
                  </div>
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
