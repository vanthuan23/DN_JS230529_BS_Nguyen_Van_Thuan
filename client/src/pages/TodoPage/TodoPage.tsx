import axios from "axios";
import TodoForm from "../../components/todo-form/TodoForm";
import TodoList from "../../components/todo-list/TodoList";
import "./TodoPage.css"
import { useEffect } from "react";

const TodoPage =()=>{
    const handleCallApi= async()=>{
        try {
            const res = await axios.get("http://localhost:8080/api/v1/tasks");
            console.log("res",res);
            
        } catch (error) {
            console.log("eroor",error);
            
        }
    }
    useEffect(() => {
        handleCallApi();
      }, []);
    return <div className="container">
        <header>
            <h2>Todo List</h2>
            <p>Get thing done , one item at time</p>
            <div></div>
        </header>
        <div style={{margin:"30px 0 40px"}}>
            <TodoList />
            <p style={{textAlign : "right", marginRight:"50px",marginTop:"20px"}}>Move done item at the end?</p>
        </div>
        
        <TodoForm />
    </div>

};
export default TodoPage;