import React from "react";
import ButtonsList from "./ButtonsList";
import VideosContainer from "./VideosContainer";

const MainContainer = () => {
  return (
    <section className="col-span-10">
      <ButtonsList />
      <VideosContainer />
    </section>
  );
};

export default MainContainer;
