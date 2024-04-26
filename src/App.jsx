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
  const [searchTerm, setSearch] = useState('')

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  if (searchTerm) {
    filteredEmails = filteredEmails.filter((email) => email.sender.toLowerCase().includes(searchTerm.toLowerCase()) || email.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <div className="app">
      <Header setSearch={setSearch} searchTerm={searchTerm}/>
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
