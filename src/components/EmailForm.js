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
    <form onSubmit={handleSubmit}>
      <div className="space-y-3">
        <label className="text-sm font-bold" htmlFor="email" id="email-label">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          className="block w-full border-2 rounded-lg p-4 cursor-pointer"
          placeholder="email@company.com"
          onChange={handleChange}  
          required
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