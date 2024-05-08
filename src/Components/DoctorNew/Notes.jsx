import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const Notes = ({ testId }) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const notesRef = useRef(null);

  useEffect(() => {
    // Fetch notes from the backend when the component mounts
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      // const response = await axios.get('/api/notes'); // Replace '/api/notes' with your backend endpoint for fetching notes
      
      var token = localStorage.getItem("token");
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      var response = axios.get('http://localhost:8080/test/getNotes',
      {
        params: {
          testId: testId,
        }
      }
    )
      .then(response => {
        console.log(response);
        setNotes(response.data); // Update state with the fetched notes
        scrollToBottom();
      })
      .catch(error => {
        console.error(error);
      });
      // setNotes(response.data); // Update state with the fetched notes
      // scrollToBottom(); // Scroll to bottom after fetching notes
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const postNote = async () => {
    try {
      // Send a POST request to the backend to add a new note
      // await axios.post('/api/notes', { user: 'User', text: newNote }); // Replace '/api/notes' with your backend endpoint for posting notes
      // console.log('ppp');
      console.log(testId);
      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      var response = await axios.post('http://localhost:8080/test/addNote', {
        "message": newNote,
        "testId": testId,
      });

      setNewNote(''); // Clear the input field after posting the note
      fetchNotes(); // Fetch updated notes after posting a new note
    } catch (error) {
      console.error('Error posting note:', error);
    }
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      postNote(); // Call postNote function to add the new note
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

  // Existing code...

return (
  <div className="flex flex-col h-full bg-gray-200 rounded-lg p-4">
    <h2 className="text-lg font-semibold mb-2">Notes</h2>
    <div className="overflow-y-auto flex-grow" style={{ height: '250px' }} ref={notesRef}>
      {notes.map((note, index) => (
        <div key={index} className="bg-white p-2 m-1 rounded">
          <strong>{note.sender}:</strong> {note.message}
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
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Enter your note..."
        className="w-full px-2 py-1 border rounded focus:outline-none"
      />
    </div>
  </div>
);

};

export default Notes;
