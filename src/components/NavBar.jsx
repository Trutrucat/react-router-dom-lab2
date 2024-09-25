import { Link } from "react-router-dom"

export default function NavBar(props) {
  return (
    <header>
      <div className='navBar'>
        <Link to='/'>Home</Link>
        <Link to='/mailboxes'>Mailboxes</Link>
        {props.mailboxId && <Link to={`/mailboxes/${props.mailboxId}`}>Mailbox {props.mailboxId}</Link>}
        <Link to='/new-mailbox'>New Mailbox</Link>
      </div>
    </header>
  )
}