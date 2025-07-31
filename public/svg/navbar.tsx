import "../../styles/components/navbar.scss";
import SearchInput from "./search";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  return (
    <nav className="navbar">
      <button className="menuButton" onClick={onToggleSidebar}>
        <RxHamburgerMenu color="#213f7d" size={16} />
      </button>

      <div className="navbar-left">
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <SearchInput />
      </div>

      <div className="navbar-right">
        <span className="docs-link">Docs</span>
        <img src="/icons/bell.svg" alt="bell icon" className="bell-icon" />
        <div className="profile">
          <img src="/images/avatar.svg" alt="avatar" className="avatar" />
          <span className="username">Adedeji</span>
          <img
            src="/icons/down.svg"
            alt="down icon"
            className="dropdown-icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
