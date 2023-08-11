import "./Contact.scss";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-wrapper__header">Get In Touch</h1>
      <p className="contact-wrapper__text">
        I'm always looking for new opportunities. Contact me and lets talk!
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
