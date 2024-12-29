import { useContext } from "react";
import Drive from "../assets/icons/drive.png";
import { DraggableProps } from "../types/Type";
import { motion } from "framer-motion";
import  DesktopContext  from "../context/DesktopContext";


const Project: React.FC<DraggableProps> = ({ dragConstraints }) => {
    const {setShowProject,showProject} = useContext(DesktopContext);

    return (
        <motion.div
            drag
            dragConstraints={dragConstraints}
            dragTransition={{
                power: 0,
                bounceStiffness: 100, 
                bounceDamping: 10, 
            }}
            className="absolute top-20 sm:right-60 right-10 w-16 h-16  cursor-grab flex justify-center items-center flex-col"
            onClick={() => setShowProject(!showProject)}
        >
            <img draggable="false"  src={Drive} alt="Drive" className="hover:scale-110 transition-all" />
            <h1>Projects</h1>
        </motion.div>
    );
};

export default Project;
