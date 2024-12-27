import Card from "./components/Card";
import Desktop from "./components/Desktop";
import Drag from "./components/Drag";
import Draggable from "./components/Draggable";
import { Model } from "./components/Model";

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-coloryellow">
      <Drag>
      {/* <Desktop/> */}
      <Card/>
      {/* <Model/> */}
      <Draggable />
      <Draggable />
      <Draggable />
    </Drag>
    </div>
  )
}