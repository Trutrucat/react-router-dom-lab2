import { Link } from "react-router-dom"

export default function NavBar(props) {
  return (
    <header>
      <div className='navBar'>
        <Link to='/'style={{ marginRight: '20px' }}>Home</Link>
        <Link to='/mailboxes'style={{ marginRight: '20px' }}>Mailboxes</Link>
        {props.mailboxId && <Link to={`/mailboxes/${props.mailboxId}`}>Mailbox {props.mailboxId}</Link>}
        <Link to='/new-mailbox'style={{ marginRight: '20px' }}>New Mailbox</Link>
      </div>
    </header>
  )
}