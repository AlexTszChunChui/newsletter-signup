import SubscribePage from "./components/SubscribePage";
import SuccessPage from "./components/SuccessPage";
import { useState } from "react";

function App() {
  const [showPage, setShowPage] = useState("SubscribePage");
  const [email, setEmail] = useState("");
  
  let content

  if (showPage === "SubscribePage") {
    content = <SubscribePage setShowPage={setShowPage}/>
  } else if (showPage === "SuccessPage") {
    content = <SuccessPage setShowPage={setShowPage}/>
  } else {
    content = <></>
  }
  
  
  return (
    <div className="container d-flex">
        {content}
    </div>
  );
}

export default App;
