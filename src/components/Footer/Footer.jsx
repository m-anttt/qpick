import Logo from "../Logo/Logo";
import disableLink from "../../utils/navLinks";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <Logo />
        <ul className="footer__nav">
          <li className="footer__nav-item">
            <a
              className="footer__nav-link"
              href="#"
              onClick={(e) => {
                disableLink(e);
              }}
            >
              Избранное
            </a>
          </li>
          <li className="footer__nav-item">
            <a
              className="footer__nav-link"
              href="#"
              onClick={(e) => {
                disableLink(e);
              }}
            >
              Корзина
            </a>
          </li>
          <li className="footer__nav-item">
            <a
              className="footer__nav-link"
              href="#"
              onClick={(e) => {
                disableLink(e);
              }}
            >
              Контакты
            </a>
          </li>
        </ul>
        <div className="footer__links">
          <a
            className="footer__nav-link"
            href="#"
            onClick={(e) => {
              disableLink(e);
            }}
          >
            Условия сервиса
          </a>
          <div className="footer__website-links">
            <img
              src="./../images/icons/lang.svg"
              alt="website-icon"
              className="footer__website-icon"
            />
            <a
              className="footer__website-link footer__website-link--active"
              href="#"  onClick={(e) => {
                disableLink(e);
              }}
            >
              Рус
            </a>
            <a className="footer__website-link" href="#"  onClick={(e) => {
                disableLink(e);
              }}>
              En
            </a>
          </div>
        </div>

        <div className="footer__socials-wrapper">
          <ul className="footer__socials">
            <li className="footer__social-element">
              <a
                className="footer__social-link"
                href="https://vk.com/neoflex_ru"
                target="_blank"
              >
                <img
                  className="footer__social-icon"
                  src="./../images/icons/vk.svg"
                  alt="vk-icon"
                />
              </a>
            </li>
            <li className="footer__social-element">
              <a
                className="footer__social-link"
                href="https://t.me/neoflexcareers"
                target="_blank"
              >
                <img
                  className="footer__social-icon"
                  src="./../images/icons/telegram.svg"
                  alt="telegram-icon"
                />
              </a>
            </li>
            <li className="footer__social-element">
              <a
                className="footer__social-link"
                href="https://wtsp.cc/79261475102"
                target="_blank"
              >
                <img
                  className="footer__social-icon"
                  src="./../images/icons/whatsapp.svg"
                  alt="whatsapp-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
