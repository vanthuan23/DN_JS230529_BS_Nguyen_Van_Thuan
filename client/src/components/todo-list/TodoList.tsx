import { MdDelete } from "react-icons/md";
import "./TodoList.css"
const TodoList = () => {
  return (
    <div className="todo-list">
      <p>Learn React Typescript</p>
      <div className="icon-item">
        <input type="checkbox" /> 
        <MdDelete />
      
      </div>
    </div>
  )
}

export default TodoList
