import { DraggableProps } from "../types/Type";
import { motion } from "framer-motion";
import Photo from "../assets/icons/photo.png";
import { ChangeEvent, useContext, useRef } from "react";
import DesktopContext from "../context/DesktopContext";

const Wallpaper: React.FC<DraggableProps> = ({ dragConstraints }) => {
    const inputRef = useRef<HTMLInputElement>(null!)

    const {setWallpaper} = useContext(DesktopContext);
    
    const handleChooseImage = () => {
        inputRef.current.click()
    }

    const handleImage = (e:ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) { 
            const imageUrl = URL.createObjectURL(file);
            setWallpaper(imageUrl);
          } else {
            alert("Please upload a valid image file.");
          }
}
    return (
        <motion.div
            drag
            dragConstraints={dragConstraints}
            dragTransition={{
                power: 0, 
                bounceStiffness: 100, 
                bounceDamping: 10,
            }}
            className="absolute top-56 right-96 w-16 h-16  cursor-grab flex justify-center items-center flex-col"
            onClick={handleChooseImage}
        >
            <img draggable="false"  src={Photo} alt="photo" className=" hover:scale-110 transition-all" />
            <h1>Wallpaper</h1>
            <input type="file" ref={inputRef} onChange={handleImage} className="hidden"></input>
        </motion.div>
    );
}

export default Wallpaper