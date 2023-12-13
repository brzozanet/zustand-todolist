// import { useStore } from "../store/store";
// import { TodoItem } from "../TodoItem/TodoItem";

// export const TodoList = () => {
//   const todos = useStore((state) => state.todos);
//   const addTodo = useStore((state) => state.addTodo);
//   const toggleTodo = useStore((state) => state.toggleTodo);

//   const handleAddTodo = () => {
//     const text = prompt("Enter new todo:");
//     if (text) {
//       addTodo({ text, completed: false });
//     }
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <button onClick={handleAddTodo}>Add Todo</button>
//       {todos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           onToggle={() => toggleTodo(todo.id)}
//         />
//       ))}
//     </div>
//   );
// };

export const TodoList = () => {
  return <h2>TodoList</h2>;
};
