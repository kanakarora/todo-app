
import React from 'react'

import './TodoApp.css';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { useState } from 'react';

function TodoApp() {

 
  return (
    <div className="app">
     <div className="todos">
            <div className='todos__content'>
                <h2>My todo app</h2>
             
                <CreateTodo  />
                <TodoList />
            </div>
        </div>
    </div>
  );
}

export default TodoApp;