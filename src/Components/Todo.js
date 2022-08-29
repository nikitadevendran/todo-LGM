import React, { useState } from 'react';
import Todoy from "./Todoy";
import Todox from "./Todox";

export default function Todo(){

    const [todos,setTodos]=useState([]);

    const addTask=task => {
        if(!task.text){
            return
        }
        const newTodos=[task,...todos];
        setTodos(newTodos);
    }

    const removeTask=id=>{
        let updatedTasks=[...todos].filter(task=>task.id !== id)
        setTodos(updatedTasks)
    }

    const completeTask=id=>{
        let updatedTasks=todos.map(todo=>{
            if(todo.id==id){
                todo.isComplete=true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }

    return <div>
        <Todoy addTask={addTask}></Todoy>
        <Todox todos={todos} completeTask={completeTask} removeTask={removeTask}></Todox>
    </div>;
    
}