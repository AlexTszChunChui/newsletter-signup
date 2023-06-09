import SubscribePage from "./components/SubscribePage";
import SuccessPage from "./components/SuccessPage";
import { useState } from "react";

function App() {
  const [showPage, setShowPage] = useState("SubscribePage");

  let content

  if (showPage === "SubscribePage") {
    content = <SubscribePage setShowPage={setShowPage}/>
  } else if (showPage === "SuccessPage") {
    content = <SuccessPage setShowPage={setShowPage}/>
  } else {
    content = <></>
  }
  
  
  return (
    <div className="bg-[#242742] flex items-center justify-center h-screen">
        {content}
    </div>
  );
}

export default App;
