import "./Contact.scss";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__section">
        <h1 className="contact__section--header">Get In Touch</h1>
        <p className="contact__section--text">
          I'm always looking for new opportunities. Contact me and lets talk!
        </p>
        <p> +34 • 722 280 416</p>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
