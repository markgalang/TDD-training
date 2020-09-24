import React, { useState, useEffect } from "react";
import Todo from "components/Todo";
import TextField from "@material-ui/core/TextField";
import { CornerDownLeft } from "react-feather";
import DeleteModal from "components/DeleteModal";

// redux
import { connect } from "react-redux";
import { getAllTodos, addTodo } from "redux/actions/todoActions";

const TodoMenu = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [todoDetails, setTodoDetails] = useState({});
  const { todoList } = props;
  const { getAllTodos, addTodo } = props;

  useEffect(() => {
    getAllTodos();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addTodo(newTodo);
    } catch (err) {
      console.log(err);
    }

    setNewTodo("");
  };

  const handleModalHide = () => {
    setShowDeleteModal(false);
    getAllTodos();
  };

  const handleOpenDeleteModal = (todoDetails) => {
    setTodoDetails(todoDetails);
    setShowDeleteModal(true);
  };

  const TodoListMarkup =
    todoList.length > 0 ? (
      todoList.map((todo, index) => (
        <Todo
          key={index}
          todoDetails={todo}
          handleOpenDeleteModal={handleOpenDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
        />
      ))
    ) : (
      <em>You have no task todo.</em>
    );
  return (
    <div className="todo-menu">
      <div className="todo-menu__header">
        <h1 className="todo-menu__heading">Todo List</h1>
        <form className="todo-menu__todo-form" onSubmit={handleSubmit}>
          <TextField
            name="newTodo"
            className="todo-menu__todo-input"
            value={newTodo}
            placeholder="Add New Task here"
            onChange={handleChange}
          />
          <button className="todo-menu__submit-button">
            <CornerDownLeft />
          </button>
        </form>
      </div>

      <div className="todo-menu__items">{TodoListMarkup}</div>

      <DeleteModal
        open={showDeleteModal}
        onClose={handleModalHide}
        todoDetails={todoDetails}
        getAllTodos={getAllTodos}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todoList: state.TodoList };
};

const mapActionsToProps = { getAllTodos, addTodo };

export default connect(mapStateToProps, mapActionsToProps)(TodoMenu);
