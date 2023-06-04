import signUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../assets/images/icon-list.svg";
import EmailForm from "./EmailForm";


function SubscribePage({setShowPage}) {

  
  return (
    <dialog id="subscribe-page" className="d-flex" open>
      <div className="d-flex justify-content-center">
        <div className="m-5">
          <div className="mt-5 mb-4">
            <h1>Stay updated!</h1>
          </div>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="mb-5">
            <li className="mb-3 d-flex">
              <img src={iconList} alt="icon list" className="me-3"/>
              Product discovery and building what matters
            </li>
            <li className="mb-3 d-flex">
              <img src={iconList} alt="icon list" className="me-3"/>
              Measuring to ensure updates are a success
            </li>
            <li className="mb-3 d-flex">
              <img src={iconList} alt="icon list" className="me-3"/>
              And much more!
            </li>
          </ul>
          <EmailForm setShowPage={setShowPage}/>
        </div>
        <div className="m-5">
          <img src={signUpDesktop} alt="sign-up"></img>
        </div>
      </div>
    </dialog>
  );
}

export default SubscribePage;
