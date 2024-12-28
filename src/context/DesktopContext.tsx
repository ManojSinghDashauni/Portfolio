import React, {SetStateAction, createContext, useState } from 'react'
import { childrenProps } from '../types/Type';
import wall1 from "../assets/wall1.jpg"

type ModelProps = {
    show:true | false,
    setShow :React.Dispatch<React.SetStateAction<boolean>>,
    setWallpaper:React.Dispatch<React.SetStateAction<string>>,
    wallpaper:string,
}


const DesktopContext = createContext({} as ModelProps);

export const DesktopContextProvider:React.FC<childrenProps> = ({children}) => {
    const [show, setShow] = useState<true|false>(false);
    const [wallpaper, setWallpaper] = useState<string>(wall1);
  return (
    <DesktopContext.Provider value={{show,setShow,wallpaper,setWallpaper}}>
        {children}
    </DesktopContext.Provider>
  )
}

export default DesktopContext