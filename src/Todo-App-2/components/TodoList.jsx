import { useContext } from "react";
import {TodoItemsContext} from "../store/context"
import Todo from "./Todo"
const TodoList = () =>{
   const {todoItems,showMessage}= useContext(TodoItemsContext);
  
   return (
        <div className="todos__todo">
        {showMessage && todoItems.length === 0?<h1>add New Todo</h1>:todoItems.map(todo =>{
            return <Todo key={todo.id} todo={todo}   /> 
        })}
    </div>
    )
}
export default TodoList;