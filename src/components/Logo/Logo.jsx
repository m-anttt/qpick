import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src="./images/logo.svg" className="logo-icon" alt="Qpick-logo" />
    </Link>
  );
};

export default Logo;
