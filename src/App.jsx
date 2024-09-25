import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import NavBar from './components/NavBar';

function App() {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBox) => {
    const newMailbox = {
       _id: mailboxes.length + 1,
      boxSize: newBox.boxSize,
      boxholder: newBox.boxholder,
  }

    setMailboxes([...mailboxes, newBox]);
}

  return (
    <div>
      <NavBar mailboxId={null} />
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
      <Route path="/new-mailbox" element={<MailboxForm mailboxes={mailboxes} addBox={addBox}/>} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
    </Routes>
    </div>
  );
}

export default App;
