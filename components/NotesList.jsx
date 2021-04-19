import { useState, useRef } from "react";

export default function NotesList({ notesList, updateUserNotes }) {
  return (
    <div>
      <TodoList todos={notesList} setTodos={updateUserNotes} />
      <AddToDo updateUserNotes={updateUserNotes} />
    </div>
  );
}

function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    // if t.id === todo.id => changes done value to opposite
    // else, do nothing
    const updatedTodos = todos.map((t) => {
      return (t.id === todo.id
        ? {
          ...t,
          done: !t.done
        }
        : t)
    })
    setTodos(updatedTodos)
  }

  if (!todos.length) {
    return <p>No todos left!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          onClick={() => handleToggleTodo(todo)}
          style={{
            textDecoration: todo.done ? "line-through" : ""
          }}
          key={todo.id}
        >
          {todo.text}
          {/* pass todo data down as a prop to DeleteTodo */}
          <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  )
}

function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do you want to delete this?");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todo.id);
      });
    }
  }

  return (
    <span
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer"
      }}
    >
      x
    </span>
  );
}

function AddToDo({ setTodos }) {
  const inputRef = useRef();

  function handleAddTodo(event) {
    event.preventDefault()
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text,
      done: false
    };
    setTodos(prevTodos => {
      return prevTodos.concat(todo)
    })
    inputRef.current.value = "";
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  )
}