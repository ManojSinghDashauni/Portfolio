import { Gmail, LinkedIn, Drive } from "../assets/icons/Index";
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
            className="absolute top-[20%] left-[20%] bg-colorgray w-[550px] h-[250px] rounded-xl grid grid-rows-[_40px_1fr] cursor-grab"
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
            <div className="grid grid-cols-4 gap-6 grid-flow-row bg-colordark p-6 rounded-b-xl">
                {
                   ProjectList && ProjectList.map((project)=>(
                    <a
                    key={project.id}
                    href={project.projectLink}
                    target="_blank"
                    className="flex flex-col justify-start items-center w-32"
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
