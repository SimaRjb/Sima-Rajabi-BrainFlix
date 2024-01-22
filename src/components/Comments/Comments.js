import "./Comments.scss";
import formatDate from "../../utils/dateUtils";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import addCommentIcon from "../../assets/icons/add_comment.svg";

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
    <section className="information">
      <section className="info">
        <section className="info__wrapper">
          <div className="info__content">
            <div className="info__title-wrapper">
              <h1 className="info__title">{title}</h1>
            </div>

            <div className="info__details-wrapper">
              <div className="info__details info__details-first">
                <div className="info__channel-wrapper">
                  <h3 className="info__channel">By {channel}</h3>
                </div>

                <div className="info__date-wrapper">
                  <p className="info__date">{formatDate(timestamp)}</p>
                </div>
              </div>

              <div className="info__details info_details-second">
                <div className="info__details-content info__views-wrapper">
                  <div className="info__icon-wrapper info__views-icon">
                    <img className="info__icon" src={viewsIcon} alt="views" />
                  </div>
                  <div className="info__details-txt info__views-txt">
                    <p className="info__views">{views}</p>
                  </div>
                </div>

                <div className="info__details-content info__likes-wrapper">
                  <div className="info__icon-wrapper info__likes-icon">
                    <img className="info__icon" src={likesIcon} alt="likes" />
                  </div>
                  <div className="info__details-txt info__likes-txt">
                    <p className="info__likes">{likes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="description">
            <div className="description__content">
              <p>{description}</p>
            </div>
          </section>
        </section>
      </section>

      <section className="comments">
        <div className="comments__container">
          <h3 className="comments__count">{comments.length} Comments</h3>
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
                <label className="comments__header">
                  Join the Conversation
                </label>
                <div className="form__right">
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
                        minLength="1"
                        maxLength="300"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="form__button-wrapper">
                    <img className="form__button-icon" src={addCommentIcon} alt="add"/>
                    <button className="form__button" type="submit">
                      COMMENT
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <section className="comments__display">
            <ul className="comments__list">
              {comments.map((comment) => {
                return (
                  <div>
                    {/* <li key={comment.id}>
                      <div>{comment.name}</div>
                      <div>{formatDate(comment.timestamp)}</div>
                      <div>{comment.comment}</div>
                    </li> */}

                    <li key={comment.id} className="comment">
                      <div className="comment__avatar-wrapper">
                        <div className="comment__avatar"></div>
                      </div>
                      <div className="comment__content">
                        <div className="comment__head">
                          <p className="comment__author">{comment.name}</p>
                          <div className="comment__head-right">
                            <p className="comment__date">{formatDate(comment.timestamp)}</p>
                          </div>
                        </div>
                        <div className="comment__text">
                          <p className="comment__par">
                          {comment.comment}
                          </p>
                        </div>
                      </div>
                    </li>
                  </div>
                );
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
    </section>
  );
}

export default Comments;
