import { useContext } from "react";
import {BioData, Desktop, Drag, Model, Music, Project, ProjectModel, Tip, Wallpaper} from "./components/Index";
import Swish from "./assets/music/Swish_Hit_1.wav";
import DesktopContext from "./context/DesktopContext";



export default function App() {
  const sound = new Audio(Swish);
  const { show, wallpaper,showProject } = useContext(DesktopContext);
  return (
    <div
      className="w-screen h-screen flex justify-center items-center text-colorWhite font-semibold"
      onClick={() => sound.play()}
    >
      <Drag>
        <BioData/>
        <Desktop />
        <Music />
        <Wallpaper />
        <Project/>
        <Tip />
        {show ? <Model /> : null}
        {showProject ? <ProjectModel /> : null}
        {wallpaper && (
          <img
          className="object-cover object-center h-screen w-screen"
          src={wallpaper}
          />
          )}
      </Drag>
    </div>
  );
}
