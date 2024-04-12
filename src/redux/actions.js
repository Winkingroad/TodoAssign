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

// Action creator for adding a new todo
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }, // Payload contains the text of the new todo
});

// Action creator for toggling the completion status of a todo
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }, // Payload contains the id of the todo to be toggled
});

// Action creator for removing a todo
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id }, // Payload contains the id of the todo to be removed
});

// Action creator for marking a todo as completed
export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id }, // Payload contains the id of the todo to be marked as completed
});

// Action creator for marking a todo as incomplete
export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id }, // Payload contains the id of the todo to be marked as incomplete
});

// Action creator for filtering todos based on a filter option
export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter }, // Payload contains the filter option to apply
});

// Action creator for marking all todos as completed
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

// Action creator for updating the search term for filtering todos
export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm }, // Payload contains the new search term
});
