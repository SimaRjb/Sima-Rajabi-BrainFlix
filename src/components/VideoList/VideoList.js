import './VideoList.scss';
// import mainVideoData from '../../data/video-details.json';
// import '../../data/videos.json';



function VideoList({videoListData, mainVideo, alterVideo}) {
  return (
    <section className='videos'>
      <div className='videos__wrapper'>
        <ul className='videos__list'>
            {videoListData.map((video) =>{
                return( <li key={video.id}>
                    {video.title}
                    {video.channel}
                    <img className='video__img' src={video.image}/>
                    </li>)
            })}
        </ul>
      </div>
    </section>
  );
}

export default VideoList;