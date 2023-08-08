import React, { useRef, useEffect } from "react";
import "./MouseFollower.scss";

const MouseFollower = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        {
          duration: 3000,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return (
    <div className="mouse">
      <div ref={blobRef} className="mouse__blob"></div>
      <div className="mouse__blur-effect"></div>
    </div>
  );
};

export default MouseFollower;
