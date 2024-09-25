import React from 'react'

function MailboxList({ mailboxes }) {
  return (
    <div>
      {mailboxes.map((mailbox) => (
        <div key={mailbox._id} className="mail-box">
          <h2>Box {mailbox._id}</h2>
          <p>Box Size: {mailbox.boxSize}</p>
          <p>Box Holder: {mailbox.boxholder}</p>
        </div>
      ))}
    </div>
  );
}

export default MailboxList; MailboxList