import React from "react";
import PropTypes from "prop-types";

const Input = ({value, onKeyPress, addItemHandler, handleChange, clearInputHandler}) => (
    <>
        <input onKeyPress={onKeyPress} onChange={handleChange} value={value}/>
        <button onClick={addItemHandler}>Add</button>
        <button onClick={clearInputHandler}>Clear</button>
    </>
);


Input.propTypes = {
    value: PropTypes.string.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    addItemHandler: PropTypes.func.isRequired,
    clearInputHandler: PropTypes.func.isRequired
};

export default Input;