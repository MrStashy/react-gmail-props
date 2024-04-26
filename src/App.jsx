import { useState } from "react";
import initialEmails from "./data/emails";
import "./styles/App.css";
import Header from "./Components/Header.jsx";
import LeftNavBar from "./Components/LeftNavBar.jsx";
import EmailList from "./Components/EmailList.jsx";
import EmailDisplay from "./Components/EmailDisplay.jsx";

const getReadEmails = (emails) => emails.filter((email) => !email.read);
const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [currentDisplay, setDisplay] = useState('emails');

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <div className="app">
      <Header />
      <LeftNavBar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        emails={emails}
        setHideRead={setHideRead}
        hideRead={hideRead}
      />
      {currentDisplay === 'emails' && (
        <EmailList
          filteredEmails={filteredEmails}
          setEmails={setEmails}
          currentDisplay={currentDisplay}
          setDisplay={setDisplay}
        />
      )}
      {typeof currentDisplay === 'number' && <EmailDisplay setDisplay={setDisplay} currentDisplay={currentDisplay} emails={emails}/>}
    </div>
  );
}

export default App;
