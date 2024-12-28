
import overlay from "../assets/SmokeOverlayEffect.mp4"
const Ovelay = () => {
  return (
    <div >
    <video className="mix-blend-multiply" autoPlay loop muted >
      <source className="mix-blend-multiply"
        src={overlay}
        type="video/mp4"
      />
    </video>
  </div>
  )
}
  

export default Ovelay