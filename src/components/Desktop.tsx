import { useContext } from "react";
import Folder from "../assets/icons/folder.png";
import { DraggableProps } from "../types/Type";
import { motion } from "framer-motion";
import  DesktopContext  from "../context/DesktopContext";


const Desktop: React.FC<DraggableProps> = ({ dragConstraints }) => {
    const {setShow,show} = useContext(DesktopContext);

    return (
        <motion.div
            drag
            dragConstraints={dragConstraints}
            dragTransition={{
                power: 0,
                bounceStiffness: 100, 
                bounceDamping: 10, 
            }}
            className="absolute top-20 sm:right-96 right-40 w-16 h-16  cursor-grab flex justify-center items-center flex-col"
            onClick={() => setShow(!show)}
        >
            <img draggable="false"  src={Folder} alt="folder" className="hover:scale-110 transition-all" />
            <h1>Desktop</h1>
        </motion.div>
    );
};

export default Desktop;
