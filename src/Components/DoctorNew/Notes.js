import React, { useState, useRef, useEffect } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const notesRef = useRef(null);

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, { user: 'User', text: newNote }]);
      setNewNote('');
    }
  };

  // Scroll to bottom on initial load and when new notes are added
  useEffect(() => {
    if (notesRef.current) {
      notesRef.current.scrollTop = notesRef.current.scrollHeight;
    }
  }, [notes]);

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-y-auto flex-grow" style={{ height: '250px' }} ref={notesRef}>
        {notes.map((note, index) => (
          <div key={index} className="bg-base-100 p-2 m-1 rounded">
            <strong>{note.user}:</strong> {note.text}
          </div>
        ))}
        {/* Add empty div to maintain fixed height */}
        <div style={{ height: '0', marginBottom: '-4px' }}></div>
      </div>
      <div className="p-2">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter your note..."
          className="w-full px-2 py-1 border rounded focus:outline-none"
        />
        <button
          onClick={handleAddNote}
          className="mt-2 w-full bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Notes;
