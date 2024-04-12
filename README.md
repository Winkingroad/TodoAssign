# Todo App README

This repository contains a simple Todo App built with React and Redux. It allows users to add, remove, toggle completion status, mark all as completed, filter, and search todos.

## Features

- **Add Todo**: Users can add new todos to the list.
- **Remove Todo**: Users can remove todos from the list.
- **Toggle Completion Status**: Users can toggle the completion status of todos.
- **Mark All Completed**: Users can mark all todos as completed at once.
- **Filter Todos**: Users can filter todos based on completion status (All, Completed, or Incomplete).
- **Search Todos**: Users can search todos by entering a search term.

## Project Structure

- **src/components**: Contains React components for different parts of the application.
  - **Todo.jsx**: Main component rendering the todo list, add todo input, filter buttons, and search input.
  - **TodoList.jsx**: Component for rendering the list of todos.
  - **TodoItem.jsx**: Component representing individual todo items.
  - **FilterButtons.jsx**: Component for rendering filter buttons.
  - **src/redux**: Contains Redux-related files.
  - **actions.js**: Defines action creators for various actions.
  - **actionTypes.js**: Defines action types as constants.
  - **reducer.js**: Defines the Redux reducer function for managing todo state.
  - **store.js**: Creates the Redux store using the reducer.
  - **src/index.jsx**: Entry point of the application.
  - **tailwind.config.js**: Configuration file for Tailwind CSS.
  - **vite.config.js**: Configuration file for Vite.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone

## Setup Instructions

2. **Navigate to the project directory:**

    ```bash
    cd todo-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

5. **Open your browser and navigate to [http://localhost:3000](http://localhost:5173) to view the Todo App.**

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for JavaScript applications.
- **React-Redux**: Official Redux binding for React.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Logic Used

### Redux State Management

The application utilizes Redux for state management. Redux follows a unidirectional data flow pattern, where the application state is maintained in a single store and modified only through actions dispatched to reducers.

- **Actions**: Action creators are functions that return objects describing the action to be performed. These actions are dispatched to the Redux store.
- **Reducers**: Reducers are pure functions that take the current state and an action as arguments and return a new state based on the action type.
- **Store**: The Redux store holds the complete state tree of the application. It is created using the `createStore` function provided by Redux.

### Todo Operations

The application allows users to perform various operations on todos:

- **Add Todo**: When a user inputs a new todo and submits it, an `addTodo` action is dispatched with the todo text as payload. The reducer then adds the new todo to the list of todos in the state.
- **Toggle Completion Status**: Users can toggle the completion status of todos by clicking on the checkbox icon next to each todo. This dispatches a `toggleTodo` action with the todo index as payload, and the reducer toggles the completion status of the corresponding todo.
- **Remove Todo**: Clicking the delete icon next to a todo dispatches a `removeTodo` action with the todo index as payload. The reducer removes the todo from the list.
- **Mark All Completed**: Clicking the "Mark All Completed" button dispatches a `markAllCompleted` action. The reducer marks all todos as completed.
- **Filter Todos**: Users can filter todos based on completion status (All, Completed, or Incomplete) using the filter dropdown. Changing the filter dispatches a `filterTodos` action with the selected filter as payload. The reducer updates the filter in the state.
- **Search Todos**: Users can search todos by entering a search term in the search input field. Changing the search term dispatches an `updateSearchTerm` action with the new search term as payload. The reducer updates the search term in the state.

These actions and their corresponding reducers ensure that the application state remains consistent and up-to-date, providing a smooth user experience.
