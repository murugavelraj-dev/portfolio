import "./../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form className="mt-3">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
      <div className="d-flex align-items-center justify-content-center mt-3">

        <button className="themebtn">Send Message</button>
        </div>
      </form>
    </section>
  );
}
