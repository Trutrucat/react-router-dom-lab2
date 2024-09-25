import React, { useState } from 'react';

function MailboxForm() {
  const [boxSize, setBoxSize] = useState('');
  const [boxholder, setBoxholder] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
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