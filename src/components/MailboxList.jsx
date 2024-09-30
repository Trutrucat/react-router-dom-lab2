import React from 'react';
import { Link } from 'react-router-dom';

function MailboxList({ mailboxes }) {
  return (
    <div>
      <h1>Mailbox List</h1>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              Box {mailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MailboxList;