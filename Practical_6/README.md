# Todo List with Zustand

A simple todo list app I built using React and Zustand to learn how global state management works without all the complexity of Redux or Context API.

---

## What This App Does

- Add new todos by typing and clicking Add
- Check off todos when you're done with them
- Delete todos you no longer need
- Clear all completed todos in one click
- See how many todos you have and how many are done
- Your todos stay saved even after you refresh the page

---

## Getting Started

Make sure you have **Node.js v18+** installed, then run:

```bash
npx create-vite@latest todo-zustand --template react
cd todo-zustand
npm install
npm install zustand
npm run dev
```

Then open **http://localhost:5173** in your browser and you're good to go.

---

## Folder Structure

```
src/
├── components/
│   ├── TodoInput.jsx     → the input field where you type new todos
│   ├── TodoItem.jsx      → each individual todo row
│   └── TodoList.jsx      → renders the full list of todos
├── store/
│   └── todoStore.js      → where all the state and actions live
└── App.jsx               → puts everything together
```

---

## How the Store Works

Everything about the todos — the data and the functions that change it — lives inside `todoStore.js`. Any component can tap into it directly without passing props around.

```js
// grab the list of todos in any component like this
const todos = useTodoStore((state) => state.todos)

// or grab just an action
const addTodo = useTodoStore((state) => state.addTodo)
```

The store has four actions:

| Action | What it does |
|---|---|
| `addTodo(text)` | Adds a new todo to the list |
| `toggleTodo(id)` | Marks a todo as done or not done |
| `removeTodo(id)` | Deletes a todo from the list |
| `clearCompleted()` | Removes everything that's been checked off |

---

## Persistence

Todos are automatically saved to `localStorage` using Zustand's built-in `persist` middleware. You don't have to write any extra code for this — just wrapping the store with `persist()` handles it.

```js
import { persist } from 'zustand/middleware'

const useTodoStore = create(
  persist(
    (set) => ({ ...storeDefinition }),
    { name: 'todo-storage' }
  )
)
```

---

## Tech Used

- **React** — for building the UI
- **Zustand** — for managing state
- **Vite** — for the dev server and build tooling