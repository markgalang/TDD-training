import React, { useState, useEffect } from "react";
import { Trash2, Edit2 } from "react-feather";
import TextField from "@material-ui/core/TextField";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

// redux
import { connect } from "react-redux";
import { editTodo, toggleCompletion } from "redux/actions/todoActions";

const Todo = (props) => {
  const { _id, isComplete } = props.todoDetails;
  const { handleOpenDeleteModal } = props;
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const { editTodo, toggleCompletion } = props;

  useEffect(() => {
    setTodoTitle(props.todoDetails.title);
  }, [props]);

  const handleTodoUpdate = async (e) => {
    e.preventDefault();
    try {
      editTodo(_id, todoTitle);
    } catch (err) {
      console.log(err);
    }
    setIsEditClicked(false);
  };

  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const toggleStatus = () => {
    try {
      toggleCompletion(_id);
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
            onChange={toggleStatus}
          />
        )}
        <h1
          className={`todo__title ${isComplete && "todo__title--completed"}`}
          onClick={toggleStatus}
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
};

const mapActionsToProps = {
  editTodo,
  toggleCompletion,
};
export default connect(null, mapActionsToProps)(Todo);
