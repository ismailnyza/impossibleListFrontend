import React from "react";
import { Card, Checkbox, Space } from "antd";

export default function TodoItem(todo) {
  return (
    <div className="todoItem">
      {todo.todo.name}
      <Checkbox> </Checkbox>
      <br />
      {todo.todo.description !== undefined ? todo.todo.description : "NAN"}
      <br />
      <hr />
    </div>
  );
}
