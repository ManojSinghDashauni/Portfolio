import { Drive } from "../assets/icons/Index";
import { useContext } from "react";
import { motion } from "framer-motion";
import DesktopContext from "../context/DesktopContext";
import { DraggableProps } from "../types/Type";
import { ProjectList } from "../data/ProjectList";

const ProjectModel: React.FC<DraggableProps> = ({ dragConstraints }) => {
    const { setShowProject } = useContext(DesktopContext);
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
            className="absolute top-[20%] sm:left-[20%] left[20%] bg-colorgray sm:w-[550px] sm:h-[250px] w-80 rounded-xl grid grid-rows-[_40px_1fr] cursor-grab"
        >
            <div className="grid grid-cols-[_100px_1fr]">
                <div className=" flex gap-1 p-3">
                    <button
                        className="btn bg-colorred"
                        onClick={() => setShowProject(false)}
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
                    <img src={Drive} alt="github" className="size-6" />
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-3 sm:gap-6 gap-4 grid-flow-row bg-colordark p-6 rounded-b-xl">
                {
                   ProjectList && ProjectList.map((project)=>(
                    <a
                    key={project.id}
                    href={project.projectLink}
                    target="_blank"
                    className="flex flex-col justify-start items-center sm:w-32 w-auto"
                >
                    <img
                        src={project.projectSrc}
                        alt={project.projectTitle}
                        className="rounded-2xl size-14  hover:hover:scale-110 transition-all object-cover"
                    />
                    <p className="text-xs text-center mt-2">
                        {project.projectTitle}
                    </p>
                </a>
                   ))
                }
            </div>
        </motion.div>
    );
};

export default ProjectModel;
