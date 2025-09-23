"use client";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";

const FollowArrow = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const arrowRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        arrowRef.current,
        { scale: 0, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.7)", 
        }
      );
    } else {
      gsap.to(arrowRef.current, {
        scale: 0,
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [visible]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      {visible && (
        <div
          ref={arrowRef}
          className="absolute pointer-events-none"
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-white/40">
            <IoIosArrowRoundForward size={36} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FollowArrow;
