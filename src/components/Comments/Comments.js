import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import formatDate from "../../utils/dateUtils";

function Comments({ mainVideo }) {
  const {
    id,
    title,
    channel,
    image,
    description,
    views,
    likes,
    duration,
    video,
    timestamp,
    comments,
  } = mainVideo;
  return (
    <div>
      <section className="info">
        <section className="info__details">
          {title}
          {channel}
          {views}
          {formatDate(timestamp)}
          {likes}
          <div>{description}</div>
          
        </section>

        <section className="info__description"></section>
      </section>

      <section className="comments">
        <div className="comments__container">
          <label className="comments__header">Join the Conversation</label>
          <div className="form__wrapper">
            <form className="form" id="comment-form">
              <div className="form__avatar">
                <img
                  className="form__avatar-img"
                  src={avatar}
                  alt="Mohan-muruge image"
                />
              </div>
              <div className="form__new-comment">
                <div className="form__new-comment-container">
                  {/* <div className="form__section">
                    <label for="userName" className="form__label">NAME</label>
                    <input
                      className="form__field form__name"
                      type="text"
                      name="userName"
                      id="userName"
                      placeholder="Enter your name"
                      required
                    />
                  </div> */}
                  <div className="form__section">
                    {/* <label for="userComment" className="form__label">COMMENT</label> */}
                    <textarea
                      className="form__field form__comment"
                      id="userComment"
                      name="userComment"
                      placeholder="Add a new comment"
                      cols="30"
                      rows="3"
                      minlength="1"
                      maxlength="300"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="form__button-wrapper">
                  <button className="form__button" type="submit">
                    COMMENT
                  </button>
                </div>
              </div>
            </form>
          </div>
          <section className="comments__display">
            <ul className="comments__list">
                {comments.map((comment)=>{
                    return(<li key={comment.id}>
                        <div>{comment.name}</div>
                        <div>{formatDate(comment.timestamp)}</div>
                        <div>{comment.comment}</div>
                    </li>);
                })}







              {/* <li className="comment">
                <div className="comment__avatar-wrapper">
                  <div className="comment__avatar"></div>
                </div>
                <div className="comment__content">
                  <div className="comment__head">
                    <p className="comment__author">Connor Walton</p>
                    <div className="comment__head-right">
                      <p className="comment__date">02/17/2021</p>
                    </div>
                  </div>
                  <div className="comment__text">
                    <p className="comment__par">
                      This is art. This is inexplicable magic expressed in the
                      purest way, everything that makes up this majestic work
                      deserves reverence. Let us appreciate this for what it is
                      and what it contains.
                    </p>
                  </div>
                </div>
              </li>
              <li className="comment">
                <div className="comment__avatar-wrapper">
                  <div className="comment__avatar"></div>
                </div>
                <div className="comment__content">
                  <div className="comment__head">
                    <p className="comment__author">Emilie Beach</p>
                    <div className="comment__head-right">
                      <p className="comment__date">01/09/2021</p>
                    </div>
                  </div>
                  <div className="comment__text">
                    <p className="comment__par">
                      I feel blessed to have seen them in person. What a show!
                      They were just perfection. If there was one day of my life
                      I could relive, this would be it. What an incredible day.
                    </p>
                  </div>
                </div>
              </li>
              <li className="comment">
                <div className="comment__avatar-wrapper">
                  <div className="comment__avatar"></div>
                </div>
                <div className="comment__content">
                  <div className="comment__head">
                    <p className="comment__author">Miles Acosta</p>
                    <div className="comment__head-right">
                      <p className="comment__date">12/20/2020</p>
                    </div>
                  </div>
                  <div className="comment__text">
                    <p className="comment__par">
                      I can't stop listening. Every time I hear one of their
                      songs - the vocals - it gives me goosebumps. Shivers
                      straight down my spine. What a beautiful expression of
                      creativity. Can't get enough.
                    </p>
                  </div>
                </div>
              </li> */}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Comments;
