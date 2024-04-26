export default function DisplayEmail ({currentDisplay, setDisplay, emails}) {
    const title = emails[Number(currentDisplay) - 1].title
    const sender = emails[Number(currentDisplay) - 1].sender
    return(
        <div>
        <p>This is email {currentDisplay} from {sender} and the only content we have is: {title} </p>
        <button onClick={() => setDisplay('emails')}>Back</button>
        </div>
    )
}