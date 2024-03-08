import "./TodoForm.css"
const TodoForm = () => {
  return (
    <div className="todo-form">
        <h3>Add to the todo list</h3>
        <form className="">
        <input type="text" name="todo" id="todo" /> 
          <button type="submit">ADD ITEM</button>
        
        </form>
      
    </div>
  )
}

export default TodoForm
