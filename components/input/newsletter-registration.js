import { useState, useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const [invalid, setInvalid] = useState(false);

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    if (enteredEmail === '' || !enteredEmail.includes('@')) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            placeholder="Your email"
            aria-label="Your email"
          />

          <button>Register</button>
        </div>
        {invalid && (
          <div style={{ color: '#a10808' }}>
            <p>Please Insert A Valid Email. Try Again!</p>
          </div>
        )}
      </form>
    </section>
  );
}

export default NewsletterRegistration;
