import { useState } from "react"; // Imports the React hook used to store component state.
import "./App.css"; // Imports the stylesheet applied to this todo component.

export default function TodoApp() { // Declares and exports the main todo app component.
  const [task, setTask] = useState(""); // Stores the text currently typed into the input field.
  const [todos, setTodos] = useState([]); // Stores all todo items that should appear in the list.

  function handleAddTask() { // Adds the current task to the todo list.
    if (task.trim() === "") return; // Stops blank or whitespace-only tasks from being added.

    setTodos([...todos, { id: Date.now(), text: task }]); // Appends a new todo object using the current task text.
    setTask(""); // Clears the input field after the task is added.
  } // Ends the add-task handler.

  function handleDelete(id) { // Removes one todo item that matches the provided id.
    setTodos(todos.filter((todo) => todo.id !== id)); // Keeps every todo except the one being deleted.
  } // Ends the delete handler.

  function handleTaskChange(e) { // Updates the task state whenever the user types in the input.
    setTask(e.target.value); // Copies the latest input value into state.
  } // Ends the input-change handler.

  return ( // Returns the JSX used to render the todo app.
    <div className="container"> {/* Wraps the entire todo app interface. */}
      <h2 className="title">ToDo List</h2> {/* Displays the title of the app. */}

      <div className="inputRow"> {/* Groups the input and add button on one row. */}
        {/* Renders the input with styling, the current value, a placeholder, an accessible label, and a change handler. */}
        <input className="input" type="text" value={task} placeholder="Enter a task..." aria-label="Task Description" onChange={handleTaskChange} />

        {/* Renders the button that adds the current task to the list when clicked. */}
        <button className="addButton" onClick={handleAddTask}>
          Add Task {/* Shows the label inside the add button. */}
        </button>
      </div>

      <TodoList todos={todos} onDelete={handleDelete} /> {/* Renders the todo list through a separate list component. */}
    </div>
  ); // Finishes returning the component markup.
} // Ends the todo app component.

function TodoList({ todos, onDelete }) { // Declares a separate component that renders the full todo list.
  return ( // Returns the JSX used for the list component.
    <ul className="list"> {/* Starts the unordered list that will display all todo items. */}
      {todos.map((todo) => ( // Loops through each todo and renders one item component per todo object.
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  ); // Finishes returning the list markup.
} // Ends the todo list component.

function TodoItem({ todo, onDelete }) { // Declares a separate component that renders one todo task.
  return ( // Returns the JSX used for a single todo item.
    <li className="listItem"> {/* Applies row styling to one todo item. */}
      <span>{todo.text}</span> {/* Displays the text for the current todo item. */}

      {/* Renders the delete button for the current todo item. */}
      <button className="deleteButton" onClick={() => onDelete(todo.id)}>
        Delete {/* Shows the label inside the delete button. */}
      </button>
    </li>
  ); // Finishes returning the item markup.
} // Ends the todo item component.