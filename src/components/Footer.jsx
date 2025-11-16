import "./../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} YourName — MERN Stack Developer
    </footer>
  );
}