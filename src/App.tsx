import { useContext, useRef } from "react";
import {
  BioData,
  Clock,
  Desktop,
  DesktopModel,
  Music,
  Project,
  ProjectModel,
  Tip,
  Wallpaper,
} from "./components/Index";
import Swish from "./assets/music/Swish_Hit_1.wav";
import DesktopContext from "./context/DesktopContext";

const App = () => {
  const desktopRef = useRef<HTMLDivElement>(null);

  const sound = new Audio(Swish);
  const { show, wallpaper, showProject } = useContext(DesktopContext);
  return (
    <div
      ref={desktopRef}
      className="w-screen h-screen overflow-hidden relative flex justify-center items-center text-colorWhite font-semibold select-none"
      onClick={() => sound.play()}
    >
      <Clock />
      <BioData />
      <Desktop dragConstraints={desktopRef} />
      <Music dragConstraints={desktopRef} />
      <Wallpaper dragConstraints={desktopRef} />
      <Project dragConstraints={desktopRef} />
      <Tip />
      {show ? <DesktopModel dragConstraints={desktopRef} /> : null}
      {showProject ? <ProjectModel dragConstraints={desktopRef} /> : null}
      {wallpaper && (
        <img
          className="object-cover object-center h-screen w-screen"
          src={wallpaper}
        />
      )}
    </div>
  );
};

export default App;
