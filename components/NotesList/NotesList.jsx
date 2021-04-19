import { useRef} from 'react'
// custom components
import InlineEdit from './InlineEdit';
// generate unique IDs for notes
import { v4 as uuidv4 } from 'uuid';

export default function NotesContainer({ notesList, setNotesList }) {
  return (
    <div className="song-list">
      <NotesList notesList={notesList} setNotesList={setNotesList} />
      <AddItem notesList={notesList} setNotesList={setNotesList} />
    </div>
  )
}

function AddItem({ notesList, setNotesList }) {
  const inputRef = useRef();
  function addItem(event) {
    event.preventDefault()
    const text = event.target.elements.addItem.value;
    const note = {
      id: uuidv4(),
      text,
      done: false
    };
    setNotesList(notesList.concat(note))
    inputRef.current.value = "";
  }
  return (
    <form onSubmit={addItem}>
      <input name="addItem" placeholder="Add item" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  )
}

function NotesList({ notesList, setNotesList }) {
  function updateItem(id, newText) {
    const newNoteList = notesList.map((note, idx) => {
      if (note.id === id) {
        return {
          ...note,
          text: newText
        }
      }
      return note
    })
    setNotesList(newNoteList)
  }

  if (!notesList.length) {
    return <p>No notes left!</p>;
  }

  return (
    <div>
      {notesList.map((note, index) => (
        <div
          className="song-item"
          key={note.id}
          style={{ textDecoration: note.isCompleted ? "line-through" : "" }}
        >
          <span className="song-item-link">
            <InlineEdit
              text={note.text}
              onSetText={text => updateItem(note.id, text)}
            />
          </span>
          <DeleteNote id={note.id} notesList={notesList} setNotesList={setNotesList} />
        </div>
      ))}
    </div>
  )
}

function DeleteNote({ id, notesList, setNotesList }) {
  function deleteNote() {
    setNotesList(notesList.filter((t) => t.id !== id))
  }

  return (
    <div style={{ margin: '5px' }}>
      <button onClick={deleteNote}>x</button>
    </div>
  )
}