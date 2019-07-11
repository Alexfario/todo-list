import React from "react";
import {completedFilterDictionary} from "../Filter/index";
import TodoItem from "../TodoItem";
import PropTypes from "prop-types";


const Index = ({
                   textFilter,
                   todoItems,
                   completedFilter,
                   editTodoItemHandler,
                   toggleCompletedHandler,
                   removeTodoItemHandler,
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
                <TodoItem
                    key={todoItem.id}
                    todoItem={todoItem}
                    editTodoItemHandler={editTodoItemHandler(todoItem.id)}
                    toggleCompletedHandler={() => {toggleCompletedHandler(todoItem.id);}}
                    removeTodoItemHandler={() => {removeTodoItemHandler(todoItem.id);}}
                    {...rest}
                />
        )
    )

}


Index.propTypes = {
    textFilter: PropTypes.string.isRequired,
    todoItems: PropTypes.array.isRequired,
    completedFilter: PropTypes.any,
    addTodoItemHandler: PropTypes.func.isRequired,
    toggleCompletedHandler: PropTypes.func.isRequired,
    removeTodoItemHandler: PropTypes.func.isRequired,
    editTodoItemHandler: PropTypes.func.isRequired,
};


export default Index;