import { useEffect, useRef } from "react";
import Image from "next/image";
import { animated, to, useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";

function calcX(y: number, ly: number) {
  return -(y - ly - window.innerHeight / 2) / 20;
}
function calcY(x: number, lx: number) {
  return (x - lx - window.innerWidth / 2) / 400;
}

export function HeroImage() {
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1.3,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 400, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false } }
  );
  return (
    <div className="flex items-center justify-center h-full">
      <animated.div
        ref={domTarget}
        className="hero-nft"
        style={{
          transform: "perspective(600px)",
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
      >
        <animated.div className="relative">
          <Image
            src="/images/random-sneak-clown.png"
            alt="sneak with snakes hair"
            width="400"
            height="400"
          />
        </animated.div>
      </animated.div>
    </div>
  );
}
