import "./Header.scss";
import logo from "../../assets/icons/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg"

function Header() {
  return (
    <header>
      <section className="header__content">
        <div className="header__logo-wrapper">
          <img className="header__logo" src={logo} alt="BrainFlix logo" />
        </div>

        <div className="header__right">
          <form className="header__form">
            <div className="header__search-avatar-wrapper">
              <div className="header__search-wrapper">
                <img className="header__search-icon" src={searchIcon} alt="serach"/>
                <input
                  className="header__search"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="header__avatar header__avatar-mobile">
                <img
                  className="header__avatar-img"
                  src={avatar}
                  alt="avatar"
                ></img>
              </div>
            </div>
            <div className="header__btn-wrapper">
              <img className="header__btn-icon" src={uploadIcon}/>
              <button className="header__btn">UPLOAD</button>
            </div>
          </form>

          <div className="header__avatar header__avatar-tablet">
            <img className="header__avatar-img" src={avatar} alt="avatar"/>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
