import React, { useRef } from "react";

interface DesktopProps {
  children: React.ReactNode;
}

const Drag: React.FC<DesktopProps> = ({ children }) => {
  const desktopRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={desktopRef}
      className="w-screen h-screen overflow-hidden relative"
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { dragConstraints: desktopRef })
          : child
      )}
    </div>
  );
};

export default Drag;
