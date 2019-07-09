import React, { useState } from "react";
import Input from './../presentational/Input';
import PropTypes from "prop-types";

const InputContainer = ({addItemHandler, filterItemsHandler, clearTextFilter}) => {
    const [text, setText] = useState('');

    const addItem = () => {
        addItemHandler(text);
    };

    const handleChange = (event) => {
        setText(event.target.value);
        filterItemsHandler(text);
    };

    const handleKeyPress = (event) => {
        if (text && event.charCode === 13) {
            addItemHandler(text);
        }
    };

    const clearInput = () => {
        setText('');
        clearTextFilter();
    };


    return (
        <Input
            value={text}
            onKeyPress={handleKeyPress}
            handleChange={handleChange}
            addItemHandler={addItem}
            clearInputHandler={clearInput}
        />
    );

}


InputContainer.propTypes = {
    addItemHandler: PropTypes.func.isRequired,
    filterItemsHandler: PropTypes.func.isRequired,
    clearTextFilter: PropTypes.func.isRequired
};

export default InputContainer;