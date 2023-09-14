import React, { useState } from "react";
import styled from "styled-components";
import Note from "./Note";

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f2f2f2;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const NotesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Emanuel Lasker ",
      description: "When you see a good move look for a better one",
      image: "chessboard.png",
      createdAt: "2023-09-14",
    },
    {
      id: 2,
      title: "Pawns",
      description: "Pawns Theyre souls of chess",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Chess_piece_-_White_pawn.JPG/201px-Chess_piece_-_White_pawn.JPG",
      createdAt: "2023-09-14",
    },
  ]);
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
    image: "",
  });

  const addNote = () => {
    const noteToAdd = {
      id: notes.length + 1,
      ...newNote,
      createdAt: new Date().toLocaleDateString(),
    };

    setNotes([...notes, noteToAdd]);

    setNewNote({ title: "", description: "", image: "" });
  };

  const updateNote = (id, updatedDescription) => {
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex !== -1) {
      const updatedNote = {
        ...notes[noteIndex],
        description: updatedDescription,
      };

      const updatedNotes = [...notes];
      updatedNotes[noteIndex] = updatedNote;

      setNotes(updatedNotes);
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);
  };

  return (
    <AppWrapper>
      <Title>Notes App</Title>
      <Form>
        <Input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <TextArea
          placeholder="Description"
          value={newNote.description}
          onChange={(e) =>
            setNewNote({ ...newNote, description: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="Image URL"
          value={newNote.image}
          onChange={(e) => setNewNote({ ...newNote, image: e.target.value })}
        />
        <AddButton type="button" onClick={addNote}>
          Add Note
        </AddButton>
      </Form>
      <NotesWrapper>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        ))}
      </NotesWrapper>
    </AppWrapper>
  );
}

export default App;
