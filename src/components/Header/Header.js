import "./Header.scss";
import logo from "../../assets/icons/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header>
      <section className="header__content">
        <div className="header__logo-wrapper">
          <img className="header__logo" src={logo} alt="BrainFlix logo" />
        </div>

        <form className="header__form">
            <div className="header__search-avatar-wrapper">
          <div class="header__search-wrapper">
            <input class="header__search" type="text" placeholder="Search" />
          </div>
          <div className="header__avatar header__avatar-mobile">
            <img className="header__avatar-img" src={avatar} alt="avatar"></img>
          </div>
          </div>
          <div className="header__btn-wrapper">
            <button className="header__btn">UPLOAD</button>
          </div>
        </form>

        <div className="header__avatar header__avatar-tablet">
          <img className="header__avatar-img" src={avatar} alt="avatar"></img>
        </div>
      </section>
    </header>
  );
}

export default Header;
