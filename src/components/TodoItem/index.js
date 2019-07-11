import React, { useState } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


const TodoItemContainer = ({todoItem: {isCompleted, text}, removeTodoItemHandler, editTodoItemHandler, toggleCompletedHandler}) => {
    const [isModifiable, setIsModifiable] = useState(false);

    return <TodoItem
        isCompleted={isCompleted}
        isModifiable={isModifiable}
        text={text}
        removeTodoItemHandler={removeTodoItemHandler}
        editTodoItemHandler={editTodoItemHandler}
        toggleIsModifiable={() => setIsModifiable(!isModifiable)}
        toggleCompletedHandler={toggleCompletedHandler}
    />
}


TodoItemContainer.propTypes = {
    todoItem: PropTypes.object.isRequired,
    toggleCompletedHandler: PropTypes.func.isRequired,
    removeTodoItemHandler: PropTypes.func.isRequired,
    editTodoItemHandler: PropTypes.func.isRequired,
};

export default TodoItemContainer;