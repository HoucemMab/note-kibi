import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NoteWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  jusitfy-content: center;
  align-items: center;
  &:hover {
    transform: translateY(-5px);
  }
`;

const NoteTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const NoteDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`;

const NoteImage = styled.img`
  max-width: 80%;
  height: auto;
  margin: 10px 0;
`;

const EditButton = styled.button`
  width: 100px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SaveButton = styled.button`
  width: 100px;

  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e7e34;
  }
`;

const DeleteButton = styled.button`
  margin-top: 5px;
  margin-left: -10px;
  width: 100px;

  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }
`;

const NoteEditor = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

function Note({ note, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(note.description);

  useEffect(() => {
    console.log(note);
  }, []);

  const handleDelete = () => {
    onDelete(note.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate(note.id, description);
  };

  return (
    <NoteWrapper>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteImage src={note.image} alt={note.title} />

      {isEditing ? (
        <>
          <NoteEditor
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </>
      ) : (
        <>
          <NoteDescription>{description}</NoteDescription>
          <EditButton onClick={handleEdit}>Edit</EditButton>
        </>
      )}
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      <p>Created on: {note.createdAt}</p>
    </NoteWrapper>
  );
}

export default Note;
