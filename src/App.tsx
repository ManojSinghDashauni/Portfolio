import { useContext } from "react";
import Desktop from "./components/Desktop";
import Drag from "./components/Drag";
import { Model } from "./components/Model";
import DesktopContext from "./context/DesktopContext";
import Music from "./components/Music";
import Wallpaper from "./components/Wallpaper";
import Swish from "./assets/music/Swish_Hit_1.wav";
import Tip from "./components/Tip";

export default function App() {
  const sound = new Audio(Swish);
  console.log(sound);
  const { show, wallpaper } = useContext(DesktopContext);
  return (
    <div
      className="w-screen h-screen flex justify-center items-center text-colorWhite font-semibold"
      onClick={() => sound.play()}
    >
      <Drag>
        <h1 className="absolute selection:not-sr-only text-2xl w-1/2 bottom-20 left-14 cursor-default">
          Hi, I'm <span className="font text-3xl"> Manoj Singh Dashauni</span>, a web developer specializing in JavaScript, React.js,
          TypeScript, HTML, and CSS. I create modern, responsive websites with
          clean design and seamless user experiences.
        </h1>
        <Desktop />
        <Music />
        <Wallpaper />
        <Tip />
        {show ? <Model /> : null}
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
