import heroImg from "../assets/hero.jpg";
const Avatar = () => {
  return (
    <div className="-rotate-12 bg-[url(../assets/bg.jpeg)]">
      <img src={heroImg} alt="hero" className="m-3" />
    </div>
  );
};

export default Avatar;
