import './MainVideo.scss';
// import mainVideoData from '../../data/video-details.json';
// import '../../data/videos.json';

const poster = "https://project-2-api.herokuapp.com/images/image0.jpg";

function MainVideo({mainVideo}) {
  return (
    <section className='main-video'>
      <div className='main-video__wrapper'>
        <video className='main-video__featured' alt="The Selected Video" poster={mainVideo.image} controls>
        </video>
      </div>
    </section>
  );
}

export default MainVideo;