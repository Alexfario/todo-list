import React from "react";
import PropTypes from "prop-types";

const TodoItemViewable = ({text, toggleIsModifiable}) => (
    <>
        <label onDoubleClick={toggleIsModifiable}>{text}</label>
        <button onClick={toggleIsModifiable}>Edit</button>
    </>
);


TodoItemViewable.propTypes = {
    text: PropTypes.string.isRequired,
    toggleIsModifiable: PropTypes.func.isRequired,
};

export default TodoItemViewable;