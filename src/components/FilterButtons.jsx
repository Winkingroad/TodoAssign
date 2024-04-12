// FilterButtons.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted } from '../redux/actions';

const FilterButtons = () => {
  // Accessing current filter state from Redux store
  const currentFilter = useSelector((state) => state.filter);
  
  // Accessing dispatch function from Redux store
  const dispatch = useDispatch();

  // Function to handle filter change
  const handleFilter = (filter) => {
    // Dispatching action to update filter in Redux store
    dispatch(filterTodos(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
      {/* Dropdown for selecting filter */}
      <select
        className="text-sm px-2 py-1 rounded-xl border border-slate-900 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      {/* Button to mark all todos as completed */}
      <button
        className="text-sm px-2 py-1 bg-slate-500 text-white rounded-xl ml-2"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
