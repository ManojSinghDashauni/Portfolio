import { Github, Gmail, LinkedIn, Folder } from "../assets/icons/Index";
import { useContext } from "react";
import { motion } from "framer-motion";
import DesktopContext from "../context/DesktopContext";
import { DraggableProps } from "../types/Type";

const DesktopModel: React.FC<DraggableProps> = ({ dragConstraints }) => {
  const { setShow } = useContext(DesktopContext);
  return (
      <motion.div
        drag
        dragConstraints={dragConstraints}
        dragTransition={{
          power: 0,
          bounceStiffness: 100,
          bounceDamping: 10,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-[20%] left-[60%] bg-colorgray w-[550px] h-[250px] rounded-xl grid grid-rows-[_40px_1fr] cursor-grab"
      >
        <div className="grid grid-cols-[_100px_1fr]">
          <div className=" flex gap-1 p-3">
            <button
              className="btn bg-colorred"
              onClick={() => setShow(false)}
            ></button>
            <button
              disabled
              className="btn bg-colororange cursor-not-allowed"
            ></button>
            <button
              disabled
              className="btn bg-colorgreen cursor-not-allowed"
            ></button>
          </div>
          <div className="flex justify-center items-center mr-[100px] gap-2">
            <img src={Folder} alt="github" className="size-6" />
            <h1>Files</h1>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6 grid-flow-row bg-colordark p-6 rounded-b-xl">
          <button className="w-16 h-16 hover:hover:scale-110 transition-all">
            <a
              href="https://github.com/ManojSinghDashauni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="github" />
            </a>
          </button>
          <button className="w-16 h-16 hover:hover:scale-110 transition-all">
            <a
              href="mailto:Dashuni007@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Gmail} alt="Gmail" />
            </a>
          </button>
          <button className="w-16 h-16 scale-90 hover:scale-100 transition-all">
            <a
              href="https://www.linkedin.com/in/manoj-dashauni-216a8233a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="Linkedin" />
            </a>
          </button>
        </div>
      </motion.div>
  );
};

export default DesktopModel;
