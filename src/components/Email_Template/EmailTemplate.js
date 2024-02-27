const EmailTemplate = ({ name, email, message }) => (
  <div>
    <h1>My Website Contact Form</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
