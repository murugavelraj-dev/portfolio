import "./../styles/hero.css";
import profileimg from "../assets/profileimg.jpeg"

export default function Hero() {
  return (
    <section id="hero" className="hero">
        <div className="d-flex align-items-center justify-content-center mb-2"><img src={profileimg} className="profileimg"/></div>
      <h1>Hello, I'm <span>Murugavelraj</span></h1>
      <h3>MERN Stack Developer</h3>
      <p>I build modern, fast and scalable web applications.</p>

      <div className="d-flex align-items-center justify-content-center mt-3">
        <a href="#projects" className="themebtn">View My Work</a>
        </div>
    </section>
  );
}