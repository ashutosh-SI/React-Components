import { useState } from "react";
import TodoBanner from "./TodoBanner";
import TodoRow from "./TodoRow";
import TodoCreator from "./TodoCreator";

export default function TodoContainer() {
  let name = "Ashutosh";
  const todoList = [
    { action: "Attend Meeting", done: true },
    { action: "Buy Flowers", done: true },
    { action: "Book Train Tickets", done: false },
    { action: "Go to Gym", done: false }
  ];

  const [todoItems, setTodoItems] = useState(todoList);

  // Add the new todo item received from the child to the todoItems state variable
  const addNewTodoItem = (task) => {
    if (!todoItems.find(x => x.action === task)) {
      setTodoItems([...todoItems, { action: task, done: false }]);
    }
  }

  // Toggle done status every time the checked event is triggered from the tr element
  const toggleTodo = (item) => 
    setTodoItems(
      todoItems.map(x => x.action === item.action ? { ...x, done: !x.done } : x)
    );

  // Call the array.map method to generate TodoRow for every element in the todoItems
  const generateTodoRows = todoItems.map((x, i) => 
    <TodoRow key={i} 
      item={x}
      callback={toggleTodo}
    />
  );

  return (
    <>
      <TodoBanner name={name} tasks={todoItems} />
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {generateTodoRows}
        </tbody>
      </table>
      <TodoCreator callback={addNewTodoItem}></TodoCreator>
    </>
  );
}
