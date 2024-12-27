import Github from "../assets/icons/github.png";
import LinkedIn from "../assets/icons/linkedin.webp";
import Gmail from "../assets/icons/gmail.png";
import { SetStateAction } from "react";

type ModelProps = {
    setShow : React.Dispatch<SetStateAction<boolean>>;
}

export const Model = ({setShow}:ModelProps) => {
    return (
        <div className="bg-colorgray w-[550px] h-[250px] rounded-xl grid grid-rows-[_40px_1fr]">
            <div className=" flex gap-1 p-3">
                <button className="btn bg-colorred" onClick={()=> setShow(false)}></button>
                <button className="btn bg-colororange"></button>
                <button className="btn bg-colorgreen"></button>
            </div>
            <div className="grid grid-cols-6 gap-6 grid-flow-row bg-colordark p-6 rounded-b-xl">
                <button className="w-16 h-16 hover:hover:scale-110 transition-all">
                    <a href="https://github.com/ManojSinghDashauni" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt="github" />
                    </a>
                </button>
                <button className="w-16 h-16 hover:hover:scale-110 transition-all">
                    <a href="https://github.com/ManojSinghDashauni" target="_blank" rel="noopener noreferrer">
                        <img src={Gmail} alt="github" />
                    </a>
                </button>
                <button className="w-16 h-16 scale-90 hover:scale-100 transition-all">
                    <a href="https://github.com/ManojSinghDashauni" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt="github" />
                    </a>
                </button>

            </div>
        </div>
    );
};
