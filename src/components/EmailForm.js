import { useContext } from "react";
import EmailContext from "../context/email";
import Schema from "../Validation";

function EmailForm({setShowPage}) {

  const { email, changeEmail, error, changeError } = useContext(EmailContext);
  
  function handleSubmit(event) {
    event.preventDefault();
    const { error } = Schema.validate({email});
    if (error) {
      changeError(error);
    } else {
      changeError(null);
      setShowPage("SuccessPage")
    }
  }

  function handleChange(event) {
    changeEmail(event.target.value)
  }

  const errorMsg = <p className="text-red-500 font-bold text-sm">Valid Email Required</p>

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold" htmlFor="email" id="email-label">Email address</label>
          {error && errorMsg}
        </div>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          className="block w-full border-2 rounded-lg p-4 cursor-pointer"
          placeholder="email@company.com"
          onChange={handleChange}
        ></input>
        <button className="bg-[#242742] w-full rounded-lg py-4 px-auto block text-white
        hover:bg-gradient-to-r from-[#ff5478] to-[#ff673e]">
          Subscribe to monthly newsletter
        </button>
        </div>
    </form>
  );
}

export default EmailForm