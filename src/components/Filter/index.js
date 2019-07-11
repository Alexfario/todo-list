import React from "react";
import PropTypes from "prop-types";

const completedFilterDictionary = {
    showAll: null,
    showCompleted: true,
    showIncompleted: false
}


const Filter = ({setCompletedFilter}) => (
    <>
        <button onClick={() => setCompletedFilter(completedFilterDictionary.showAll)}>All</button>
        <button onClick={() => setCompletedFilter(completedFilterDictionary.showCompleted)}>Completed</button>
        <button onClick={() => setCompletedFilter(completedFilterDictionary.showIncompleted)}>Incompleted</button>
    </>
);


Filter.propTypes = {
    setCompletedFilter: PropTypes.func.isRequired,
};

export default Filter;
export {completedFilterDictionary};