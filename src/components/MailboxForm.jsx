import React, { useState } from 'react';

function MailboxForm({ mailboxes, addBox }) {
  const [boxSize, setBoxSize] = useState('');
  const [boxholder, setBoxholder] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    const newMailbox = {
        _id: mailboxes.length + 1,
        boxSize: boxSize,
        boxholder: boxholder,
    }
    addBox(newMailbox)
    setBoxSize('')
    setBoxholder('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Box Size:
        <input type="text" value={boxSize} onChange={(event) => setBoxSize(event.target.value)} />
      </label>
      <label>
        Boxholder:
        <input type="text" value={boxholder} onChange={(event) => setBoxholder(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MailboxForm;