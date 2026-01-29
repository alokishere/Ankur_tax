import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.3,
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 1.5 });
      gsap.to(follower, { scale: 0.5 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1 });
      gsap.to(follower, { scale: 1 });
    };

    const onHover = () => {
      gsap.to(cursor, { scale: 2, background: "#FFFFFF" });
      gsap.to(follower, { scale: 1.5, borderColor: "#FFFFFF" });
    };

    const onLeave = () => {
      gsap.to(cursor, { scale: 1, background: "#10B981" });
      gsap.to(follower, { scale: 1, borderColor: "#10B981" });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea",
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div
        ref={followerRef}
        className="custom-cursor-follower hidden md:block"
      />
    </>
  );
}
