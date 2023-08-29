import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";


export function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: { clientX: any; clientY: any; }) {
      setMousePos({ x: event.clientX, y: event.clientY });
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorSpring = useSpring({
    to: { left: `${mousePos.x}px`, top: `${mousePos.y}px` },
    config: { tension: 2000, friction: 800 },
  });

  return (
    <animated.div
      id="cursor-shadow"
      className="rounded-full"
      style={cursorSpring}
    ></animated.div>
  );
}

