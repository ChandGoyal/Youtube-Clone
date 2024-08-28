import React, { useRef, useEffect } from "react";
import Button from "./Button";

const ButtonsList = () => {
  const scrollContainerRef = useRef(null);

  // Function to handle horizontal scroll
  const handleScroll = (event) => {
    if (scrollContainerRef.current) {
      event.preventDefault(); // Prevent default vertical scroll behavior
      scrollContainerRef.current.scrollLeft += event.deltaY * 0.6; // Scroll horizontally based on vertical scroll
    }
  };

  // Disable page scroll when mouse is over the div
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const disablePageScroll = (event) => {
      event.preventDefault();
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll, {
        passive: false,
      });
      scrollContainer.addEventListener("wheel", disablePageScroll, {
        passive: false,
      });
    }

    // Clean up event listeners on unmount
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleScroll);
        scrollContainer.removeEventListener("wheel", disablePageScroll);
      }
    };
  }, []);

  const list = [
    "All",
    "Web Development",
    "Music",
    "Live",
    "Gaming",
    "Cricket",
    "Football",
    "Trending",
    "JavaScript",
    "Comedy",
    "Watched",
    "News",
    "Cuisines",
    "India",
    "Travel",
    "Finance",
    "Crypto",
    "New To You",
    "Most Viewed",
  ];

  return (
    <div
      className="flex overflow-x-auto whitespace-nowrap"
      onWheel={handleScroll}
      ref={scrollContainerRef}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar on Windows
    >
      {list.map((title, index) => (
        <Button key={index} title={title} />
      ))}
    </div>
  );
};

export default ButtonsList;
