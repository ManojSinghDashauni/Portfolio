import React from "react";
import { motion } from "framer-motion";

interface DraggableProps {
  dragConstraints?: React.RefObject<HTMLDivElement>;
}

const Draggable: React.FC<DraggableProps> = ({ dragConstraints }) => {
  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      dragTransition={{
        power: 0, // Reduces the resistance to drag, making it smoother
        bounceStiffness: 100, // Adjusts stiffness of the bounce (lower = smoother)
        bounceDamping: 10, // Adjusts damping of the bounce (lower = smoother)
      }}
      style={{
        position: "absolute",
      }}
    >
      Drag Me
    </motion.div>
  );
};

export default Draggable;
