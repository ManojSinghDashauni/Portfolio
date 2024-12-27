import Backward from "../icons/Backward";
import Forward from "../icons/Forward";
import Play from "../icons/Play";
import { motion } from "framer-motion";

interface DraggableProps {
  dragConstraints?: React.RefObject<HTMLDivElement>;
}

const Card: React.FC<DraggableProps> = ({ dragConstraints }) => {
  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      dragTransition={{
        power: 0, // Reduces the resistance to drag, making it smoother
        bounceStiffness: 100, // Adjusts stiffness of the bounce (lower = smoother)
        bounceDamping: 10, // Adjusts damping of the bounce (lower = smoother)
      }}
      className="absolute top-40 left-36 bg-colorgray h-36 w-72 rounded-xl grid grid-rows-[_40px_1fr] cursor-grabbing"
    >
      <div className=" flex gap-1 p-3">
        <button className="btn bg-colorred"></button>
        <button className="btn bg-colororange"></button>
        <button className="btn bg-colorgreen"></button>
      </div>
      <div className="flex flex-col justify-center items-center bg-colordark rounded-b-xl ">
        <h1 className="text-white">Hello World</h1>
        <div className="flex justify-center items-center mt-2">
          <button>
            <Backward />
          </button>
          <button>
            <Play />
          </button>
          <button>
            <Forward />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
