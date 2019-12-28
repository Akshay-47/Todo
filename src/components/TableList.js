import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "./Button";
import EditForm from "./Form";
import Modal from "./Modal";

import { deleteTodo, reOpenTodo, markDone } from "../store/todo";

const TableList = ({ todos, deleteTodo, reOpenTodo, markDone }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [isOpenDescriptionModal, setIsOpenDescriptionModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleDelete = postId => {
    setDeleteModalIsOpen(true);
    setDeleteItem(postId);
  };

  const handleDone = postId => {
    markDone(postId);
  };

  const onDeleteConfirmation = () => {
    deleteTodo(deleteItem);
    setDeleteItem(null);
    setDeleteModalIsOpen(false);
  };

  const handleOnReOpen = postId => {
    reOpenTodo(postId);
  };

  const handleEdit = postId => {
    setEditModalIsOpen(true);
  };

  const onEditDismiss = () => {
    setEditModalIsOpen(false);
  };

  const openDescriptionModal = postId => {
    const item = todos.find(todo => todo.id === postId);
    const renderDescription = (
      <div>
        <p>Title: {item.title}</p>
        <p>Description: {item.description}</p>
        <p>Created At: {item.createdAt}</p>
        <p>Due Date: {item.dueDate}</p>
        <p>Priority: {item.priority}</p>
        <p>Current State: {item.currentState === true ? "Done" : "Open"}</p>
      </div>
    );
    setModalContent(renderDescription);
    setIsOpenDescriptionModal(true);
  };

  const handleTableRowClick = (e, postId) => {
    e.persist();
    e.stopPropagation();
    if (e.target.matches(".delete")) {
      handleDelete(postId);
    } else if (e.target.matches(".done")) {
      handleDone(postId);
    } else if (e.target.matches(".edit")) {
      handleEdit(postId);
    } else if (e.target.matches(".re-open")) {
      handleOnReOpen(postId);
    } else {
      openDescriptionModal(postId);
    }
  };

  const renderTableRow = todos => {
    return todos.map((todo, index) => (
      <tr key={index} onClick={e => handleTableRowClick(e, todo.id)}>
        <td
          className={
            "table-data " + (todo.currentState ? "complete" : "in-complete")
          }
        >
          {todo.title}
        </td>
        <td
          className={
            "table-data " + (todo.currentState ? "complete" : "in-complete")
          }
        >
          {todo.priority}
        </td>
        <td
          className={
            "table-data " + (todo.currentState ? "complete" : "in-complete")
          }
        >
          {todo.createdAt}
        </td>
        <td
          className={
            "table-data " + (todo.currentState ? "complete" : "in-complete")
          }
        >
          {todo.dueDate}
        </td>
        <td
          className={
            "table-data " + (todo.currentState ? "complete" : "in-complete")
          }
        >
          {actions(todo.currentState)}
        </td>
      </tr>
    ));
  };

  const actions = currentState => {
    if (currentState)
      return (
        <div className="todo-item action">
          <Button name={"Re-Open"} class_="re-open" />
        </div>
      );
    return (
      <div className="todo-item action">
        <Button name="Edit" class_="edit" />
        <Button name="Delete" class_="delete" />
        <Button name="Done" class_="done" />
      </div>
    );
  };

  return (
    <>
      <tbody>{renderTableRow(todos)}</tbody>
      <Modal
        show={editModalIsOpen}
        onDismiss={onEditDismiss}
        title="Edit"
        content={<EditForm />}
        actions={<Button name="Save" />}
      />
      <Modal
        show={deleteModalIsOpen}
        onDismiss={() => setDeleteModalIsOpen(false)}
        title="Delete"
        content={<p>Are you sure you want to Delete</p>}
        actions={
          <>
            <Button
              name="Yes! I'm sure"
              onClick={onDeleteConfirmation}
              class_="delete"
            />
            <Button
              name="No! Keep it"
              onClick={() => setDeleteModalIsOpen(false)}
              class_="warning"
            />
          </>
        }
      />
      <Modal
        show={isOpenDescriptionModal}
        onDismiss={() => setIsOpenDescriptionModal(false)}
        title="View Item"
        content={modalContent}
        actions={
          <Button
            name="Okay!"
            onClick={() => setIsOpenDescriptionModal(false)}
          />
        }
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: postId => dispatch(deleteTodo(postId)),
    reOpenTodo: postId => dispatch(reOpenTodo(postId)),
    markDone: postId => dispatch(markDone(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
