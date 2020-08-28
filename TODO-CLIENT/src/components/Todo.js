import React, { useState, useEffect } from "react";
import axios from "axios";
import { Trash2, Edit2 } from "react-feather";
import TextField from "@material-ui/core/TextField";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export default function Todo(props) {
  const { _id, isComplete } = props.todoDetails;
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    setTodoTitle(props.todoDetails.title);
  }, [props]);

  const handleTodoUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/todo/${_id}`, { title: todoTitle });
      props.getAllTodos();
    } catch (err) {
      console.log(err);
    }
    setIsEditClicked(false);
  };

  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  };
  return (
    <div className="todo">
      <h1 className="todo__title">
        {isEditClicked ? (
          <ClickAwayListener onClickAway={handleTodoUpdate}>
            <form onKeyDown={(e) => e.keyCode === 13 && handleTodoUpdate(e)}>
              <TextField
                fullWidth
                value={todoTitle}
                placeholder="Add Todo Tile Here"
                onChange={handleChange}
              />
            </form>
          </ClickAwayListener>
        ) : (
          todoTitle
        )}
      </h1>
      {!isEditClicked && (
        <div className="todo__actions">
          <Edit2
            className="todo__icon"
            onClick={() => setIsEditClicked(true)}
          />
          <Trash2 className="todo__icon" />
        </div>
      )}
    </div>
  );
}
