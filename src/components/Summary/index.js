import React from "react";
import PropTypes from "prop-types";

const Summary = ({summaryCount, completedCount}) => (
    <>
        <p>All: {summaryCount}</p>
        <p>Completed: {completedCount}</p>
        <p>Incompleted: {summaryCount - completedCount}</p>
    </>
);


Summary.propTypes = {
    summaryCount: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
};

export default Summary;
