
import './MainVideo.scss';

const mainVideoPoster = "https://project-2-api.herokuapp.com/images/image0.jpg";

function MainVideo() {
  return (
    <section className='main-video'>
      <div className='main-video__wrapper'>
        <video className='main-video__featured' alt="The Selected Video" poster={mainVideoPoster} controls>
        {/* <video className='main-video__featured' alt="The Selected Video" poster={mainVideo} controls> */}
        </video>
      </div>
    </section>
  );
}

export default MainVideo;

