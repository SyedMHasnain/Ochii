"use client";

import React, { useEffect, useState } from "react";

function Eyes() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach((eye) => {
      const rect = eye.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX); // Swapped coordinates for correct direction
        const moveX = Math.cos(angle) * (rect.width / 4); 
      const moveY = Math.sin(angle) * (rect.height / 4);

      setPosition({ x: moveX, y: moveY });
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-4 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* Eye 1 */}
          <div className="eye flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="flex items-center justify-center w-1/2 h-1/2 rounded-full bg-black relative">
              <div
                className="dot absolute w-[2vw] h-[2vw] rounded-full bg-white"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}></div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="eye flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="flex items-center justify-center w-1/2 h-1/2 rounded-full bg-black relative">
              <div
                className="dot absolute w-[2vw] h-[2vw] rounded-full bg-white"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
