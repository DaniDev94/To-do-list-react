import React from "react";

export function TodoList({ list }) {
    return (
        <ul>
            {list.map((todo) => (
                <li>{todo.task}</li>
            ))}
        </ul>
    )
}