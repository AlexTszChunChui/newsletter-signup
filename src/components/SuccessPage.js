import iconSuccess from "../assets/images/icon-success.svg"
import { useContext } from "react";
import EmailContext from "../context/email";

function SuccessPage({ setShowPage }) {
    
    function handleClcik() {
        setShowPage("SubscribePage");
    }

    const { email } = useContext(EmailContext);

    return (
        <dialog id="success-page" open>
            <div className="m-5">
                <img src={iconSuccess} alt="iconSuccess" className="mb-5"></img>
                <h1 className="mb-5">Thanks for subscribing!</h1>
                <p className="mb-5">A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription</p>
                <div className="d-grid gap-2">
                <button className="btn btn-success" onClick={handleClcik}>Dismiss message</button>
                </div>
            </div>
        </dialog>
    )
}

export default SuccessPage