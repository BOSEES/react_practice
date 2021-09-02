import React from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListitem";

const TodoList = ({todos}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo}/>
      })}
    </div>
  )
}

export default TodoList;