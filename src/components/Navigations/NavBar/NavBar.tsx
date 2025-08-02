import React, { type Dispatch, type SetStateAction } from "react";
import "./NavBar.modules.scss";
import { PiList } from "react-icons/pi";
import SearchInput from "../../common/SearchInput/searchInput";

type NavBarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

function NavBar({ setSidebarOpen }: NavBarProps) {
  return (
    <div className="navbar">
      <nav className="container">
        <button
          className="menuButton"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <PiList className="icon" />
          <img src="/svg/logo.svg" alt="logo" className="mobile-logo" />
        </button>
        <img src="/svg/logo.svg" alt="logo" className="logo" />
        <SearchInput />

        <div className="profile-container">
          <span className="docs">Docs</span>
          <img src="/svg/bell.svg" alt="userBell icon" className="bell-icon" />
          <div className="profile">
            <img src="/svg/avatar.svg" alt="avatar" className="avatar" />
            <span className="username">Adedeji</span>
            <img src="/svg/down.svg" alt="downIcon" className="dropdown-icon" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
