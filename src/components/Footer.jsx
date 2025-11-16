import "./../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Murugavelraj — MERN Stack Developer
    </footer>
  );
}