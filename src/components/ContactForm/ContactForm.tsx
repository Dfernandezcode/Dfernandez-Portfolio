import { useState, FormEvent } from 'react';
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("xaygeoan");
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [emailError, setEmailError] = useState(false); 
  const [messageError, setMessageError] = useState(false); 
  const validate = () => {
    setEmailError(!email);
    setMessageError(message.length < 20);
    return email && message.length >= 20;
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (validate()) {
      handleSubmit(e);
    } else {
      e.preventDefault();
    }
  };

  if (state.succeeded) {
    return <p>Thanks! We'll talk soon!</p>;
  }

  return (
    <form onSubmit={handleFormSubmit} className="form-email">
      <label className="form-email__address" htmlFor="email">
        Email Address:
      </label>
      <input
        className="form-email__input"
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      {emailError && <p className='form-email__input-error'>Please input an email.</p>}
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      
      <textarea
        className="form-email__textarea"
        id="message"
        name="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      {messageError && <p className='form-email__input-error'>Please input a message with at least 20 characters</p>}
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      
      <div className="form-email__btn-wrapper">
        <button
          className="form-email__submit"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
