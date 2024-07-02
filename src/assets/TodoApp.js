import { useState } from "react";
import todoArray from "./todoItems";
import TodoList from "./TodoList";
import AddTodo from "./addTodo";


const TodoApp = ()=>{
  
    const [todoItems,setTodoItems] = useState(todoArray);

    const handleNewTodo = (todoItem) =>{
             setTodoItems(todoItems=>([...todoItems,todoItem]))
      }
       
  const handleDelete = (itemName) =>{
         setTodoItems(todoItems=>todoItems.filter(todo=>(todo.name !== itemName)))
  }
 
    return(<>
    <div className="bg-primary text-center mw-100 pb-1">
    <h1 className="display-1  font-weight-bold">
        Todo App
      </h1>
    </div>
    <div>
     <AddTodo handleNewTodo={handleNewTodo}  />
     {todoItems.length > 0 ? <TodoList handleDelete={handleDelete} todoItems={todoItems}/> :<h3 className="mt-4 bg-dark text-info">Add New Todo</h3>}
     </div>
     </>)
}
export default TodoApp;