
import TodoItem from "./todoItem";
import styles from "./TodoList.module.css"
const TodoList = ({todoItems,handleDelete}) =>{
    return (
        <div className= "container mt-5   text-center">
          
         {todoItems.map((Todo)=>{
         return(      
          <div  className={`${styles.TodoList} mt-2 row`}>
        <TodoItem  Todo={Todo} handleDelete={handleDelete}/>
        </div>
     )}
     )}
     </div>
    
    )
}
export default TodoList;