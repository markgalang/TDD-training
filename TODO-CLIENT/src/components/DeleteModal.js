import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import axios from "axios";

export default function DeleteModal(props) {
  const { todoDetails, getAllTodos, ...rest } = props;
  const { title, _id } = todoDetails;

  const handleDelete = async () => {
    try {
      await axios.delete(`/todo/${_id}`);
      getAllTodos();
      props.onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      {...rest}
      className="delete-modal"
      BackdropProps={{ transitionDuration: 4 }}
    >
      <div className="delete-modal__body">
        <h2 className="delete-modal__heading">
          Are you sure you want to delete this task?
        </h2>

        <div className="delete-modal__content">
          <h1>{title}</h1>
        </div>
        <div className="delete-modal__action-buttons">
          <Button
            variant="contained"
            color="secondary"
            className="delete-modal__button"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            className="delete-modal__button"
            onClick={props.onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}
