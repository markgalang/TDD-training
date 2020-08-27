import React from "react";
import { Trash2, Edit2 } from "react-feather";

export default function Todo() {
  return (
    <div className="todo">
      <h1 className="todo__title">TODO</h1>
      <div className="todo__actions">
        <Edit2 className="todo__icon" />
        <Trash2 className="todo__icon" />
      </div>
    </div>
  );
}
