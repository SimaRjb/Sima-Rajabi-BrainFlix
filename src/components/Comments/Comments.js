import './Comments.scss';
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Comments() {
  return (

   <section class="comments">
        <div class="comments__container">
          <label className='comments__header'>Join the Conversation</label>
          <div class="form__wrapper">
            <form class="form" id="comment-form">
              <div class="form__avatar">
                <img
                  class="form__avatar-img"
                  src={avatar}
                  alt="Mohan-muruge image"
                />
              </div>
              <div class="form__new-comment">
                <div class="form__new-comment-container">
                  {/* <div class="form__section">
                    <label for="userName" class="form__label">NAME</label>
                    <input
                      class="form__field form__name"
                      type="text"
                      name="userName"
                      id="userName"
                      placeholder="Enter your name"
                      required
                    />
                  </div> */}
                  <div class="form__section">
                    {/* <label for="userComment" class="form__label">COMMENT</label> */}
                    <textarea
                      class="form__field form__comment"
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
                <div class="form__button-wrapper">
                  <button class="form__button" type="submit">COMMENT</button>
                </div>
              </div>
            </form>
          </div>
          <section class="comments__display">
            <ul class="comments__list">
            <li class="comment">
                <div class="comment__avatar-wrapper">
                  <div class="comment__avatar"></div>
                </div>
                <div class="comment__content">
                  <div class="comment__head">
                    <p class="comment__author">Connor Walton</p>
                    <div class="comment__head-right">
                      <p class="comment__date">02/17/2021</p>
                    </div>
                  </div>
                  <div class="comment__text">
                    <p class="comment__par">
                      This is art. This is inexplicable magic expressed in the
                      purest way, everything that makes up this majestic work
                      deserves reverence. Let us appreciate this for what it is
                      and what it contains.
                    </p>
                  </div>
                </div>
              </li>
              <li class="comment">
                <div class="comment__avatar-wrapper">
                  <div class="comment__avatar"></div>
                </div>
                <div class="comment__content">
                  <div class="comment__head">
                    <p class="comment__author">Emilie Beach</p>
                    <div class="comment__head-right">
                      <p class="comment__date">01/09/2021</p>
                    </div>
                  </div>
                  <div class="comment__text">
                    <p class="comment__par">
                      I feel blessed to have seen them in person. What a show!
                      They were just perfection. If there was one day of my life
                      I could relive, this would be it. What an incredible day.
                    </p>
                  </div>
                </div>
              </li>
              <li class="comment">
                <div class="comment__avatar-wrapper">
                  <div class="comment__avatar"></div>
                </div>
                <div class="comment__content">
                  <div class="comment__head">
                    <p class="comment__author">Miles Acosta</p>
                    <div class="comment__head-right">
                      <p class="comment__date">12/20/2020</p>
                    </div>
                  </div>
                  <div class="comment__text">
                    <p class="comment__par">
                      I can't stop listening. Every time I hear one of their
                      songs - the vocals - it gives me goosebumps. Shivers
                      straight down my spine. What a beautiful expression of
                      creativity. Can't get enough.
                    </p>
                  </div>
                </div>
              </li>

            </ul>
          </section>
        </div>
      </section>
  );
}

export default Comments;
