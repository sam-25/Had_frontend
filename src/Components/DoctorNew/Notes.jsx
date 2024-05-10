import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Notes = React.memo(({ testId }) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const notesRef = useRef(null);

  useEffect(() => {
    fetchNotes();
  }, [testId]);

  const fetchNotes = async () => {
    try {
      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const response = await axios.get('http://localhost:8080/test/getNotes', {
        params: {
          testId: testId,
        },
      });
      setNotes(response.data);
      scrollToBottom();
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };


  const postNote = async () => {
    try {
      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await axios.post('http://localhost:8080/test/addNote', {
        message: newNote,
        testId: testId,
      });
      setNewNote('');
      fetchNotes();
    } catch (error) {
      console.error('Error posting note:', error);
    }
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      postNote();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddNote();
    }
  };

  const scrollToBottom = () => {
    if (notesRef.current) {
      notesRef.current.scrollTop = notesRef.current.scrollHeight;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-200 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Notes</h2>
      <div className="overflow-y-auto flex-grow" style={{ height: '250px' }} ref={notesRef}>
        {notes.map((note, index) => (
          <div key={index} className="bg-white p-2 m-1 rounded">
            <strong>{note.sender}:</strong> {note.message}
          </div>
        ))}
        <div style={{ height: '0', marginBottom: '-4px' }}></div>
      </div>
      <div className="p-2">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="Enter your note..."
          className="w-full px-2 py-1 border rounded focus:outline-none"
        />
      </div>
    </div>
  );
});

export default Notes;
