import EmailItem from './EmailItem'

export default function EmailList ({filteredEmails, setEmails, currentDisplay, setDisplay}) {
    return (
        <main className="emails">
        <ul>
          {filteredEmails.map((email) => (
            <EmailItem key={email.id} email={email} setEmails={setEmails} currentDisplay={currentDisplay} setDisplay={setDisplay}/>
          ))}
        </ul>
      </main>
    )
  
}