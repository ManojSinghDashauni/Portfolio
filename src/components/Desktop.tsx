import { useState } from "react";
import Folder from "../assets/icons/folder.png"
import { Model } from "./Model";



const Desktop = () => {
    const[show,setShow] =useState<true | false>(false)

    return (
        <div>
            <button className="w-16 h-16 hover:scale-110 transition-all" onClick={()=>setShow(true)}>
                <img src={Folder} alt="github" />
            </button>

            {
                show ? <Model setShow={setShow}/> : null
            }
        </div>
    )
}

export default Desktop