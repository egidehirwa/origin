import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-0 right-0 mb-6 mr-6 p-4 bg-greenish text-white rounded-full shadow-lg hover:bg-darkgreen"
          onClick={handleClick}
        >
          Back to Top
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
