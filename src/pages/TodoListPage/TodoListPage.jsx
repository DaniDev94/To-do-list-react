import React, { useState, useRef } from "react";
import { v4 as v4Id } from 'uuid';
import { TodoList } from "../../components/TodoList";


export function TodoListPage() {

    const [todos, setTodos] = useState([{ id: 1, task: 'Tarea 1', completed: false }]);

    const addTaskRef = useRef();

    const handleAddTask = () => {
        const task = addTaskRef.current.value;
        if(task == '') return; 

        //Le pasamos una funcion(en setTodos) para acceder al estado previo. Retornamos una copia, indicando en el primer parametro el anterior estado y en el segundo parametro el nuevo.
        setTodos((prevTask) => {
            return [...prevTask, { id: v4Id(), task, completed: false } ]
        })

        //Resetar el valor del input
        addTaskRef.current.value = null;
    }

    return (
        <>
            <TodoList list={todos} />
            <input ref={addTaskRef} type="text" placeholder="Nueva Tarea" />
            <button onClick={handleAddTask}>➕</button>
            <button>🗑️</button>
        </>
    )
}