import create from "zustand";

const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, { ...todo, id: state.todos.length + 1 }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));

export { useStore };
