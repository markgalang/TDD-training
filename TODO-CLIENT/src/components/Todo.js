import React from "react";
import { Trash2, Edit2 } from "react-feather";

export default function Todo(props) {
  const { _id, isComplete, name } = props.todoDetails;
  return (
    <div className="todo">
      <h1 className="todo__title">{name}</h1>
      <div className="todo__actions">
        <Edit2 className="todo__icon" />
        <Trash2 className="todo__icon" />
      </div>
    </div>
  );
}
