import { useState } from "react";
import styles from "./addTodo.module.css";
import { GrAdd } from "react-icons/gr";
const AddTodo = ({ handleNewTodo }) => {
  const [newTodo, setNewTodo] = useState({ name: "", dueDate: "" });
  
  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setNewTodo((newTodo) => (
        { ...newTodo, [name]: value })
    )};

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
   handleNewTodo(newTodo);
   setNewTodo({name:"",dueDate:""})
  };
  return (
    <div className="container mt-5   text-center">
      <form onSubmit={handleAddButtonClicked}>
      
      
      <div className={`${styles.TodoInput} row`}>
        <div className="col-4  mx-2 h-100 ">
          <input
           
            type="text"
            onChange={handleInputChange}
            name="name"
            value={newTodo.name}
            className="w-100 h-100 p-2"
          />
        </div>
        <div className="col  mx-2 h-25 ">
          <input
           
            type="date"
            name="dueDate"
            value={newTodo.dueDate}
            onChange={handleInputChange}
            className={`${styles.inputfield} w-100 h-100 p-2`}
          />
        </div>
        <div className="col  mx-2  border-0">
          <button
          className="btn btn-primary w-50 p-2"
          >
            <span>Add</span> <GrAdd />
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};
export default AddTodo;
