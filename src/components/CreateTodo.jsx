import { useContext } from "react";
import uuid from "react-uuid";
import "./Todos.css";
import { TodoItemsContext } from "../store/context";

const CreateTodo = ()=>{
  
const {newTodo,setNewTodo,handleAddTodo,toggleCreateBtn}=useContext(TodoItemsContext);
     
  

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setNewTodo((newTodo) => (
        { ...newTodo,id:uuid() ,[name]: value ,completed:false})
    )};

    function handleSubmit(e){
        e.preventDefault()
        handleAddTodo(newTodo);
        setNewTodo({id:"",name:"",dueDate:"",completed:null})
        }

    return (
        <div className="todos__forms">
            <form className="todos__form " onSubmit={handleSubmit} >
                <input type="text" className="todos__input mr-2" name= "name" value={newTodo.name} placeholder="Add todo" onChange={handleInputChange} />
                <input type = "date" className="todos__input" name = "dueDate" value={newTodo. dueDate} placeholder="Add todo" onChange={handleInputChange} />
                {toggleCreateBtn?<button className="todos__add__btn">edit</button>:<button className='todos__add__btn' >
                create
            </button>}
            </form>

          

        </div>
    )
}
export default CreateTodo;