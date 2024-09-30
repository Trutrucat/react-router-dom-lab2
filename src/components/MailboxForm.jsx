import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MailboxForm({ mailboxes = [], addBox }) {
  const [boxSize, setBoxSize] = useState('');
  const [boxholder, setBoxholder] = useState('');
  const Navigate = useNavigate();
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
    Navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Boxholder:
        <input type="text" value={boxholder} onChange={(event) => setBoxholder(event.target.value)} />
      </label>
      <label>
        Box Size:
        <select value={boxSize} onChange={(event) => setBoxSize(event.target.value)}>
          <option value="">Select a size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MailboxForm;