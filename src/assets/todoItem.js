import { RiDeleteBin6Fill } from "react-icons/ri";
 const TodoItem = ({Todo,handleDelete}) =>{

   
    return(
        <>
       <div className="col-4 bg-dark text-info  mx-2 h-100 ">
       <h3>{Todo.name}</h3>
       </div>
       <div className="col bg-dark text-info mx-2 h-25 ">
       <h3>{Todo.dueDate}</h3>
       </div>
       <div className="col  mx-2  border-0">
         <button onClick={()=>handleDelete(Todo.name)} type="button" className="btn btn-primary  w-50 p-2 " >
          <span>Remove</span> <RiDeleteBin6Fill />
         </button>
       </div>
      
       </>
    )
 }
 export default TodoItem;