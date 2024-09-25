// src/components/MailboxDetails.jsx
import React from 'react'
import { useParams } from 'react-router-dom'

function MailboxDetails(props) {
const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
);

return (
  <div>
    <h2>Mailbox {selectedBox._id}</h2>
    <p>Box Size: {selectedBox.boxSize}</p>
    <p>Box Holder: {selectedBox.boxholder}</p>
  </div>
)
}
export default MailboxDetails