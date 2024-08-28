import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faVideo,
  faBolt,
  faMusic,
  faCode,
  faFutbol,
  faTv,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const SidePanel = () => {
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <aside className="p-2 shadow-lg col-span-2 h-screen">
      <ul className="mb-4 text-sm">
        <li className="mb-2 cursor-pointer flex items-center p-2 hover:bg-[#717171] rounded-lg">
          <FontAwesomeIcon icon={faHouse} className="text-xl" />
          <span className="ml-4">Home</span>
        </li>
        <li className="mb-2 cursor-pointer flex items-center p-2 hover:bg-[#717171] rounded-lg">
          <FontAwesomeIcon icon={faVideo} className="text-xl" />
          <span className="ml-4">Shorts</span>
        </li>
        <li className="mb-2 cursor-pointer flex items-center p-2 hover:bg-[#717171] rounded-lg">
          <FontAwesomeIcon icon={faBolt} className="text-xl" />
          <span className="ml-4">Live</span>
        </li>
      </ul>
      <hr className="my-4 border-gray-200" />
      <h2 className="font-semibold text-sm text-gray-500 mb-4 px-2">Explore</h2>
      <ul className="text-sm">
        <li className="mb-2 cursor-pointer flex items-center p-2 hover:bg-[#717171] rounded-lg">
          <FontAwesomeIcon icon={faMusic} className="text-lg" />
          <span className="ml-4">Music</span>
        </li>
        <li className="mb-2 cursor-pointer flex items-center p-2 hover:bg-[#717171] rounded-lg">
          <FontAwesomeIcon icon={faCode} className="text-lg" />
          <span className="ml-4">Web Development</span>
        </li>
        <li className="mb-2 cursor-pointer flex items-center p-2 hover:bg-[#717171] rounded-lg">
          <FontAwesomeIcon icon={faFutbol} className="text-lg" />
          <span className="ml-4">Sports</span>
        </li>
        <li className="mb-2 cursor-pointer flex items-center p-2 hover:bg-[#717171] rounded-lg">
          <FontAwesomeIcon icon={faTv} className="text-lg" />
          <span className="ml-4">Entertainment</span>
        </li>
        <li className="mb-2 cursor-pointer flex items-center p-2 hover:bg-[#717171] rounded-lg">
          <FontAwesomeIcon icon={faGamepad} className="text-lg" />
          <span className="ml-4">Gaming</span>
        </li>
      </ul>
    </aside>
  );
};

export default SidePanel;
