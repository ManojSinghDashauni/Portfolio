
const FoggyBackground = () => {
  return (
    <div className="foggy-background -z-40">
      <div className="fog" style={{ top: "10%", left: "20%" }}></div>
      <div className="fog" style={{ top: "50%", left: "60%" }}></div>
      <div className="fog" style={{ top: "80%", left: "30%" }}></div>
    </div>
  );
};

export default FoggyBackground;
