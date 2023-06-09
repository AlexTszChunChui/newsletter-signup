import iconSuccess from "../assets/images/icon-success.svg";
import { useContext } from "react";
import EmailContext from "../context/email";

function SuccessPage({ setShowPage }) {
  function handleClcik() {
    setShowPage("SubscribePage");
  }

  const { email } = useContext(EmailContext);

  return (
    <div className="bg-white flex flex-col space-y-10 md:px-20 md:py-16 max-w-xl rounded-3xl">
      <img className="object-fit h-16 w-16" src={iconSuccess} alt="iconSuccess"></img>
      <h1 className="text-6xl font-bold text=[#242742]">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span className="font-bold"> {email} </span>. Please open it and click
        the button inside to confirm your subscription
      </p>
      <div>
        <button
          className="bg-[#242742] w-full rounded-lg py-4 px-auto text-white
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
