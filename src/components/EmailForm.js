import { useContext } from "react";
import EmailContext from "../context/email";

function EmailForm({setShowPage}) {

  const { email, changeEmail } = useContext(EmailContext);
  
  function handleSubmit(event) {
    event.preventDefault();
    setShowPage("SuccessPage")
  }

  function handleChange(event) {
    changeEmail(event.target.value)
  }

  return (
    <form className="row needs-validation" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="mb-2" htmlFor="email" id="email-label">Email address</label>
        <input
          id="email"
          name="email"
          className="cursor-pointer form-control mb-2"
          type="email"
          value={email}
          placeholder="email@company.com"
          onChange={handleChange}
          required
        ></input>
        <div className="valid-feedback">Looks Good!</div>
        <button className="btn btn-dark mt-3">
          Subscribe to monthly newsletter
        </button>
        </div>
    </form>
  );
}

export default EmailForm