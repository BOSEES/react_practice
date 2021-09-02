import React from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListitem";

const TodoList = ({todos, onRemove, onToggle}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
      })}
    </div>
  )
}

export default React.memo(TodoList);