import React from "react";
import SidePanel from "./SidePanel";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <main className="grid grid-cols-12 grid-flow-col">
      <SidePanel />
      <MainContainer />
    </main>
  );
};

export default Body;
