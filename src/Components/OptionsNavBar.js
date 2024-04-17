// OptionsNavBar.js
import React, { useState } from 'react';
import './OptionsNavBar.css'; // Assuming you have a CSS file for styling

function OptionsNavBar() {
    const [viewingNotes, setViewingNotes] = useState(false);
    const [addingNotes, setAddingNotes] = useState(false);
    const [uploadingReport, setUploadingReport] = useState(false);
    const [noteText, setNoteText] = useState('');
    const [notes, setNotes] = useState([]);
    const [file, setFile] = useState(null);

    const handleViewNotesClick = () => {
        setViewingNotes(true);
        setAddingNotes(false);
        setUploadingReport(false);
    };

    const handleAddNotesClick = () => {
        setViewingNotes(false);
        setAddingNotes(true);
        setUploadingReport(false);
    };

    const handleUploadReportClick = () => {
        setViewingNotes(false);
        setAddingNotes(false);
        setUploadingReport(true);
    };

    const handleNoteChange = (e) => {
        setNoteText(e.target.value);
    };

    const handleNoteSubmit = (e) => {
        e.preventDefault();
        const newNote = { id: Date.now(), text: noteText };
        setNotes([...notes, newNote]);
        setNoteText('');
        setAddingNotes(false);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        // Implement file upload logic here
        console.log('File uploaded:', file);
        setUploadingReport(false);
    };

    return (
        <div className="options-navbar">
            {addingNotes && (
                <form onSubmit={handleNoteSubmit} className="note-form">
                    <textarea
                        value={noteText}
                        onChange={handleNoteChange}
                        placeholder="Enter your note..."
                        rows={5}
                    />
                    <button type="submit">Save Note</button>
                </form>
            )}
            {viewingNotes && (
                <div className="notes-list">
                    <h3>Notes:</h3>
                    <ul>
                        {notes.map((note) => (
                            <li key={note.id}>{note.text}</li>
                        ))}
                    </ul>
                </div>
            )}
            {uploadingReport && (
                <div className="file-upload">
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleFileUpload}>Upload</button>
                </div>
            )}
            <div className="option-buttons">
                <button className="option-button" onClick={handleViewNotesClick}>View Notes</button>
                <button className="option-button" onClick={handleAddNotesClick}>Add Notes</button>
                <button className="option-button" onClick={handleUploadReportClick}>Upload Final Report</button>
            </div>
        </div>
    );
}

export default OptionsNavBar;
