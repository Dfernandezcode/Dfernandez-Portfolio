import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("xaygeoan");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="form-email">
      <label className="form-email__address" htmlFor="email">
        Email Address:
      </label>
      <input
        className="form-email__input"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea className="form-email__textarea" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="form-email__submit"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
