import React from "react";
import {completedFilterDictionary} from "../presentational/CompletedFilter";
import TodoItemContainer from "./TodoItemContainer";
import PropTypes from "prop-types";


const TodoItemListContainer = ({
                                   textFilter,
                                   todoItems,
                                   completedFilter,
                                   editTodoItemHandler,
                                   ...rest
                               }) => {

    const isFilterMatched = (todoItemText) => todoItemText.indexOf(textFilter) > -1;

    return (
        todoItems.filter(
            (todoItem) =>
                isFilterMatched(todoItem.text)
                && (
                    todoItem.isCompleted === completedFilter
                    || completedFilter === completedFilterDictionary.showAll
                )
        ).map(
            (todoItem) =>
                <TodoItemContainer
                    key={todoItem.id}
                    todoItem={todoItem}
                    editTodoItemHandler={editTodoItemHandler(todoItem.id)}
                    {...rest}
                />
        )
    )

}


TodoItemListContainer.propTypes = {
    textFilter: PropTypes.string.isRequired,
    todoItems: PropTypes.array.isRequired,
    completedFilter: PropTypes.any,
    addTodoItemHandler: PropTypes.func.isRequired,
    toggleCompletedHandler: PropTypes.func.isRequired,
    removeTodoItemHandler: PropTypes.func.isRequired,
    editTodoItemHandler: PropTypes.func.isRequired,
};


export default TodoItemListContainer;