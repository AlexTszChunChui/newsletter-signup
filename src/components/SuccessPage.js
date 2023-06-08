import iconSuccess from "../assets/images/icon-success.svg";
import { useContext } from "react";
import EmailContext from "../context/email";

function SuccessPage({ setShowPage }) {
  function handleClcik() {
    setShowPage("SubscribePage");
  }

  const { email } = useContext(EmailContext);

  return (
    <div className="bg-white flex flex-col justify-start space-y-5 p-12">
      <img className="object-none h-20 w-16" src={iconSuccess} alt="iconSuccess"></img>
      <h1 className="text-6xl font-bold">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to {email}. Please open it and click
        the button inside to confirm your subscription
      </p>
      <div>
        <button
          className="bg-[#242742] w-full rounded-lg py-4 px-auto block text-white
        hover:bg-gradient-to-r from-[#ff5478] to-[#ff673e]"
          onClick={handleClcik}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
