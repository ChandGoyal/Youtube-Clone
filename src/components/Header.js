import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { LOGO, USER_PROFILE_ICON } from "../utils/constants";

const Header = () => {
  return (
    <header className="grid grid-cols-12 grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <FontAwesomeIcon icon={faBars} className="h-6 cursor-pointer" />
        <img src={LOGO} alt="logo" className="mx-4 w-24 h-6 cursor-pointer" />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="search"
          placeholder="Search"
          className="w-2/5 px-4 py-1 border border-[#303030] rounded-l-full"
        />
        <button className="px-4 py-1 rounded-r-full border border-[#303030]">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="col-span-1 text-center">
        <img src={USER_PROFILE_ICON} alt="user-icon" className="h-8" />
      </div>
    </header>
  );
};

export default Header;
