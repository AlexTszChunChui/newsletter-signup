import signUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../assets/images/icon-list.svg";
import EmailForm from "./EmailForm";

function SubscribePage({ setShowPage }) {
  return (
    <div className="bg-white rounded-2xl p-10">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0">
        <img className="md:order-2" src={signUpDesktop} alt="sign-up"></img>
        <div className="space-y-5 md:order-1 md:mr-8">
          <div>
            <h1 className="text-5xl font-bold">Stay updated!</h1>
          </div>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="space-y-3">
            <li className="flex">
              <img src={iconList} alt="icon list" className="me-3" />
              Product discovery and building what matters
            </li>
            <li className="flex">
              <img src={iconList} alt="icon list" className="me-3" />
              Measuring to ensure updates are a success
            </li>
            <li className="flex">
              <img src={iconList} alt="icon list" className="me-3" />
              And much more!
            </li>
          </ul>
          <EmailForm setShowPage={setShowPage} />
        </div>
      </div>
    </div>
  );
}

export default SubscribePage;
