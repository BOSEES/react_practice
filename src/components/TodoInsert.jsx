import React, { useCallback, useState } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({onInsert}) => {
  const [value , setValue] = useState("");
  
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  },[]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  },[onInsert, value]);

  return(
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할일을 입력해주세요" value={value} onChange={onChange}/>
      <button type="submmit">
        <MdAdd />
      </button>
    </form>
  )
}

export default TodoInsert;