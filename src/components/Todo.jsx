import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../redux/actions';

const Todo = () => {
  // Accessing state variables from Redux store
  const todos = useSelector((state) => state.todos); // Retrieve todos from the store
  const filter = useSelector((state) => state.filter); // Retrieve filter from the store

  // Getting dispatch function from Redux
  const dispatch = useDispatch();

  // State variables for new todo text and search term
  const [newTodoText, setNewTodoText] = useState(''); // State variable to track new todo text
  const [searchTerm, setSearchTerm] = useState(''); // State variable to track search term

  // Function to add a new todo
  const handleAddTodo = (text) => {
    dispatch(addTodo(text)); // Dispatching addTodo action with the new todo text
  };

  // Event handler for clicking the "Add Todo" button
  const handleAddTodoClick = () => {
    // Check if new todo text is not empty
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim()); // Add the new todo
      setNewTodoText(''); // Clear the new todo text input
    }
  };

  // Event handler for changing the search term
  const handleSearchChange = (value) => {
    setSearchTerm(value); // Update the search term state variable
    dispatch(updateSearchTerm(value)); // Dispatching updateSearchTerm action with the new search term
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-blue-200 rounded-2xl">
      {/* Title */}
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>TODO APP</h2>

      {/* Add Todo Input */}
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-blue-400 focus:outline-none focus:border-slate-500 rounded-xl"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)} // Update new todo text state variable
        />
        <button
          className="ml-4 p-2 bg-red-500 text-slate rounded-xl hover:bg-green-600 focus:outline-none"
          onClick={handleAddTodoClick} // Event handler for clicking "Add Todo" button
        >
          <BsPlus size={20} /> {/* Plus icon */}
        </button>
      </div>

      {/* Filter and Search Input */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons /> {/* Component for filter buttons */}
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-slate-500 rounded-xl"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)} // Event handler for changing search term
          />
          <button className="ml-4 p-2 bg-green-500 text-white rounded-xl hover:bg-slate-600 focus:outline-none">
            <BsSearch size={20} /> {/* Search icon */}
          </button>
        </div>
      </div>

      {/* Todo List */}
      <TodoList />
    </div>
  );
};

export default Todo;
