import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ list }) {
    return (
        <ul>
            {list.map((item) => (
                <TodoItem key={item.id} todo={item}/>
            ))}
        </ul>
    )
}