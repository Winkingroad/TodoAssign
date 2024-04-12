import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';
import { FaCheckCircle, FaTrashAlt, FaEdit, FaTimesCircle } from 'react-icons/fa';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch(); // Using useDispatch hook to get the dispatch function

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">
          {index + 1}.
        </span>
        <span>
          {todo.text}
        </span>
      </div>
      <div className='space-x-3 ml-8'>
        <button
          className={`mr-2 text-sm ${todo.completed ? 'text-green-500' : 'text-blue-500'} sm:px-2 px-1 py-1 rounded`}
          onClick={() => dispatch(toggleTodo(index))} // Dispatching toggleTodo action when button is clicked
        >
          {todo.completed ? <FaCheckCircle /> : <FaEdit />} {/* Conditional rendering of icon based on completed status */}
        </button>
        <button
          className="mr-2 text-sm bg-slate-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))} // Dispatching removeTodo action when button is clicked
        >
          <FaTrashAlt />
        </button>
        {!todo.completed && (
          <button
            className="text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))} // Dispatching markCompleted action when button is clicked
          >
            <FaCheckCircle />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))} // Dispatching markIncomplete action when button is clicked
          >
            <FaTimesCircle />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
