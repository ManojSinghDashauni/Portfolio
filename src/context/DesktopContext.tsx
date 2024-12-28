import React, { createContext, useState } from 'react'
import { childrenProps } from '../types/Type';
import wall1 from "../assets/wall1.jpg"

type ModelProps = {
    show:true | false,
    setShow :(value:true|false)=>void,
    setWallpaper:(url:string)=>void,
    wallpaper:string,
    setShowProject:(value:true|false)=>void,
    showProject:true | false,
}


const DesktopContext = createContext({} as ModelProps);

export const DesktopContextProvider:React.FC<childrenProps> = ({children}) => {
    const [show, setShow] = useState<true|false>(false);
    const [showProject, setShowProject] = useState<true|false>(false);
    const [wallpaper, setWallpaper] = useState<string>(wall1);
  return (
    <DesktopContext.Provider value={{show,setShow,wallpaper,setWallpaper,showProject,setShowProject}}>
        {children}
    </DesktopContext.Provider>
  )
}

export default DesktopContext
