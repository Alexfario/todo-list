import React from "react";
import PropTypes from "prop-types";

const TodoItemModifiable = ({text, editTodoItemHandler, toggleIsModifiable}) => (
    <>
        <input type="text" onChange={(e) => editTodoItemHandler(e.target.value)} onKeyPress={(evt) => {
            if (evt.charCode === 13) {
                toggleIsModifiable(evt);
            }
        }} value={text}/>
        <button onClick={toggleIsModifiable}>Save</button>
    </>
);


TodoItemModifiable.propTypes = {
    text: PropTypes.string.isRequired,
    editTodoItemHandler: PropTypes.func.isRequired,
    toggleIsModifiable: PropTypes.func.isRequired,
};

export default TodoItemModifiable;