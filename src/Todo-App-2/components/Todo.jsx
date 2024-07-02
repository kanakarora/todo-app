import React, { useState,useContext }  from 'react'
import {TodoItemsContext} from "../store/context"
import './Todo.css';



function Todo({todo}) {
   const {handleRemoveTodo,handleToggleTodo,handleEditTodo} = useContext(TodoItemsContext);

  

   
    return (
        <div className="todo" >
            <div className='todo__item'>
            <div className="todo__title bg-success" style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.name}</div>
            <div  className="todo__title bg-success">{todo.dueDate}</div>
            </div>
            <div className="todo__buttons">
                <button className="todo__toggle" onClick= {()=>handleToggleTodo(todo.id)}>
                    Task Done
                </button>
                <button className="todo__delete" onClick= {()=>handleRemoveTodo(todo.id)}>
                    Delete
                </button>
                <div >
                    <div>
              
                <button className='todo__edit' onClick  = {()=>handleEditTodo(todo.id)} >
                    edit
                </button>
                </div>
                </div>
            </div>

            

            
        </div>
    )
}

export default Todo;
