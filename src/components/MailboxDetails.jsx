
import React from 'react'
import { useParams } from 'react-router-dom'

function MailboxDetails({ mailboxes}) {
const { mailboxId } = useParams();
const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

if (!selectedBox) {
  return <div>Mailbox not found</div>;
}

return (
  <div>
    <h2>Mailbox {selectedBox._id}</h2>
    <p>Box Size: {selectedBox.boxSize}</p>
    <p>Box Holder: {selectedBox.boxholder}</p>
  </div>
)
}
export default MailboxDetails