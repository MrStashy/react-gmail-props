import { useState } from 'react'
import initialEmails from './data/emails'
import './styles/App.css'
import Header from './Components/Header.jsx'
import LeftNavBar from './Components/LeftNavBar.jsx'
import EmailList from './Components/EmailList.jsx'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header />
      <LeftNavBar currentTab={currentTab} setCurrentTab={setCurrentTab} emails={emails} setHideRead={setHideRead} hideRead={hideRead} />
      <EmailList filteredEmails={filteredEmails} setEmails={setEmails}/>
    </div>
  )
}

export default App
