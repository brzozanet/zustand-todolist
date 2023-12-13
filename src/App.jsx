import { TodoList } from "./components/TodoList/TodoList";
import css from "./App.module.css";

export function App() {
  return (
    <div className={css.container}>
      <TodoList />
    </div>
  );
}
