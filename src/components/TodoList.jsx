import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Selecting and filtering todos from the Redux store
  const filteredTodos = useSelector((state) => {
    // Destructuring state to access todos, filter, and searchTerm
    const { todos, filter, searchTerm } = state;

    // Convert search term to lowercase for case-insensitive search
    const searchTermLowerCase = searchTerm.toLowerCase();

    // Filtering todos based on filter and search term
    return todos.filter((todo) => {
      // Checking if todo matches the filter criteria
      const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      // Checking if todo's text matches the search term
      const matchesSearch = todo.text.toLowerCase().includes(searchTermLowerCase);

      // Returning true only if todo matches both filter and search criteria
      return matchesFilter && matchesSearch;
    });
  });

  // Logging filtered todos to console for debugging
  console.log('Filtered Todos:', filteredTodos);

  // Rendering the list of filtered todos
  return (
    <ul>
      <li className="my-2 text-sm italic">Todo List below</li>
      {/* Mapping through filteredTodos and rendering TodoItem component for each todo */}
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
