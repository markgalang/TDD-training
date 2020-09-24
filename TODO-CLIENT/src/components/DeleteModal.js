import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

// redux
import { connect } from "react-redux";
import { deleteTodo } from "redux/actions/todoActions";

const DeleteModal = (props) => {
  const { todoDetails, ...rest } = props;
  const { title, _id } = todoDetails;
  const { deleteTodo } = props;

  const handleDelete = async () => {
    try {
      deleteTodo(_id);
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
};

const mapActionsToProps = { deleteTodo };

export default connect(null, mapActionsToProps)(DeleteModal);
