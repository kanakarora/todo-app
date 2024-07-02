
import { createContext, useReducer,useState ,useEffect} from "react";
// import { useNavigate } from "react-router-dom";

export const ACTIONS = {
    ADD_TODO: 'add_todo',
    TOGGLE_TODO: 'toggle_todo',
    DELETE_TODO: 'delete_todo',
    UPDATE_TODO: 'update_todo',
    
}
export const TodoItemsContext = createContext({
    todoItems:[],
    newTodo:{},
    setNewTodo:()=>{},
    handleAddTodo:()=>{},
    handleRemoveTodo:()=>{},
    handleToggleTodo:()=>{},
   handleEditTodo:()=>{}
   
})

const reducer = (todoItems,action)=>{
    let updatedTodoItems = todoItems;
     const {type,payload} = action;
    switch (type){
     case ACTIONS.ADD_TODO:
       
  const {newTodo,setIsEditItem,toggleCreateBtn,setToggleCreateBtn,setNewTodo,isEditItem,setShowMessage} = payload;
 
        if(newTodo.name==="" && newTodo.dueDate===""){
            setShowMessage(true);
            
        }
        else if (newTodo && toggleCreateBtn){
        updatedTodoItems= todoItems.map(item=>{
                if(item.id === isEditItem){
                   return {...item,name:newTodo.name,dueDate:newTodo.dueDate}
                                  
                }
                return item;
            })
            setToggleCreateBtn(true);
            return (updatedTodoItems);
           
        }
        else{
            updatedTodoItems
             = [...todoItems,newTodo]
             
            return updatedTodoItems;
            
        }
        console.log("Hii");
        setNewTodo("");
        console.log("processing");
         setIsEditItem(null);
         console.log(isEditItem);
         console.log("bye");
        
         
       break;

      case ACTIONS.DELETE_TODO:
        updatedTodoItems
         = todoItems.filter(todo=>todo.id !== action.payload)
        return updatedTodoItems ;   
    
     case ACTIONS.TOGGLE_TODO:
         updatedTodoItems
          = todoItems.map((todo) =>{
        if(todo.id === payload){
          return { ...todo, completed: !todo.completed }
        }
         return todo;
    })
      return updatedTodoItems;
  
     case ACTIONS.UPDATE_TODO:
 
       let NewEditItem = todoItems.find(item=>item.id === payload.todoId);
       payload.setNewTodo(NewEditItem);
       payload.setToggleCreateBtn(!payload.toggleCreateBtn);
       payload.setIsEditItem(payload.todoId);
      return updatedTodoItems;
  
     default:
        return todoItems;  
    
}
}
const TodoItemsContextProvider = ({children})=>{
     const initialState =[]
    const [todoItems,dispatch] = useReducer(reducer,initialState) 
    const [newTodo,setNewTodo] = useState({id:"",name:"",dueDate:"",completed:null})
    
      const [isEditItem,setIsEditItem] = useState(null);
  const [toggleCreateBtn,setToggleCreateBtn] = useState(false);
  const [showMessage,setShowMessage] = useState(false);

     const handleAddTodo = (newTodo)=>{
        dispatch({type:ACTIONS.ADD_TODO,payload:{newTodo,toggleCreateBtn,isEditItem,setToggleCreateBtn,setNewTodo,setIsEditItem,setShowMessage}})
    }

    const  handleRemoveTodo = (todoId)=>{
        dispatch({type:ACTIONS.DELETE_TODO,payload:todoId})
    }
    const handleToggleTodo =(todoId)=>{
         dispatch ({type:ACTIONS.TOGGLE_TODO,payload:todoId})
    }
    const handleEditTodo = (todoId) =>{
         dispatch ({type:ACTIONS.UPDATE_TODO,payload:{todoId,toggleCreateBtn,setToggleCreateBtn,setIsEditItem,setNewTodo}})
    }

  

   
    return(
        <TodoItemsContext.Provider value={{todoItems,handleRemoveTodo,handleToggleTodo,toggleCreateBtn,handleAddTodo,handleEditTodo,newTodo,setNewTodo,showMessage}}>
            {children}
            </TodoItemsContext.Provider>
    )

}
export default TodoItemsContextProvider;
