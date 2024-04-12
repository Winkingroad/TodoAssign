// Importing action types
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from './actionTypes';

// Initial state for the todo reducer
const initialState = { todos: [], filter: 'ALL', searchTerm: '' };

// Reducer function for managing todo state
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // Adding a new todo to the state
      return {
        todos: [...state.todos, { text: action.payload.text, completed: false }], // Add new todo to the array
        filter: state.filter, // Maintain current filter
        searchTerm: state.searchTerm, // Maintain current search term
      };

    case TOGGLE_TODO:
      // Toggling completion status of a todo
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ), // Toggle completion status of the selected todo
        filter: state.filter, // Maintain current filter
        searchTerm: state.searchTerm, // Maintain current search term
      };

    case REMOVE_TODO:
      // Removing a todo from the state
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id), // Remove todo with matching index
        filter: state.filter, // Maintain current filter
        searchTerm: state.searchTerm, // Maintain current search term
      };

    case MARK_COMPLETED:
      // Marking a todo as completed
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ), // Mark selected todo as completed
        filter: state.filter, // Maintain current filter
        searchTerm: state.searchTerm, // Maintain current search term
      };

    case MARK_INCOMPLETE:
      // Marking a todo as incomplete
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ), // Mark selected todo as incomplete
        filter: state.filter, // Maintain current filter
        searchTerm: state.searchTerm, // Maintain current search term
      };

    case FILTER_TODOS:
      // Applying a filter to todos
      return {
        todos: state.todos, // Maintain current todos
        filter: action.payload.filter, // Set new filter
        searchTerm: state.searchTerm, // Maintain current search term
      };

    case UPDATE_SEARCH_TERM:
      // Updating the search term
      return {
        todos: state.todos, // Maintain current todos
        filter: state.filter, // Maintain current filter
        searchTerm: action.payload.searchTerm, // Update search term
      };

    case MARK_ALL_COMPLETED:
      // Marking all todos as completed
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })), // Mark all todos as completed
        filter: state.filter, // Maintain current filter
        searchTerm: state.searchTerm, // Maintain current search term
      };

    default:
      return state; // Return current state for unknown action types
  }
};

export default todoReducer; // Exporting the todo reducer function
