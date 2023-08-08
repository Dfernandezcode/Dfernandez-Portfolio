import { useRef, useEffect } from "react";
import "./MouseFollower.scss";

const MouseFollower = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      const { clientX, clientY } = event;

      blobRef.current?.animate(
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
