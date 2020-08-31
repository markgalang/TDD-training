import React, { useState, useEffect } from "react";
import axios from "axios";
import { Trash2, Edit2 } from "react-feather";
import TextField from "@material-ui/core/TextField";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export default function Todo(props) {
  const { _id, isComplete } = props.todoDetails;
  const { handleOpenDeleteModal } = props;
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

  const toggleCompletion = async () => {
    try {
      await axios.put(`/todo/${_id}/complete`);
      props.getAllTodos();
    } catch (err) {
      console.log(err);
    }
    setIsEditClicked(false);
  };

  return (
    <div className="todo">
      <div className="todo__title-container">
        {!isEditClicked && (
          <input
            type="checkbox"
            className="todo__checkbox"
            checked={isComplete}
            onChange={toggleCompletion}
          />
        )}
        <h1
          className={`todo__title ${isComplete && "todo__title--completed"}`}
          onClick={toggleCompletion}
        >
          {isEditClicked ? (
            <ClickAwayListener onClickAway={handleTodoUpdate}>
              <form onKeyDown={(e) => e.keyCode === 13 && handleTodoUpdate(e)}>
                <TextField
                  fullWidth
                  value={todoTitle}
                  placeholder="Add Todo Tile Here"
                  onChange={handleChange}
                  onClick={(e) => e.stopPropagation()}
                />
              </form>
            </ClickAwayListener>
          ) : (
            todoTitle
          )}
        </h1>
      </div>

      {!isEditClicked && (
        <div className="todo__actions">
          <Edit2
            className="todo__icon"
            onClick={() => setIsEditClicked(true)}
          />
          <Trash2
            className="todo__icon"
            onClick={() => handleOpenDeleteModal(props.todoDetails)}
          />
        </div>
      )}
    </div>
  );
}
