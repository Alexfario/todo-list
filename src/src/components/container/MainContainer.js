import React, {Component} from "react";
import InputContainer from "../container/InputContainer";
import TodoItemListContainer from "./TodoItemListContainer";
import CompletedFilter, {completedFilterDictionary} from "../presentational/CompletedFilter";
import Summary from "../presentational/Summary";

let counter = 0;

class MainContainer extends Component {
    constructor() {
        super();

        this.state = {
            completedFilter: completedFilterDictionary.showAll,
            textFilter: '',
            todoItems: []
        };

    }

    addTodoItem = (text) => {
        if (text) {
            this.setState({
                todoItems: [...this.state.todoItems, {id: counter++, text: text, isCompleted: false}]
            });
        }
    };

    removeTodoItem = (id) => {
        const index = this.getTodoItemIndexById(id);
        let todoItems = [...this.state.todoItems];
        todoItems.splice(index, 1);
        this.setState({todoItems: todoItems});
    };


    editTodoItem = (id, text) => {
        const index = this.getTodoItemIndexById(id);
        let todoItems = [...this.state.todoItems];
        todoItems[index].text = text;
        this.setState({todoItems: todoItems});
    };

    toggleCompleted = (id) => {
        const index = this.getTodoItemIndexById(id);
        let todoItems = [...this.state.todoItems];
        todoItems[index].isCompleted = !todoItems[index].isCompleted;
        this.setState({todoItems: todoItems});
    };


    setTextFilter = (text) => {
        this.setState({textFilter: text});
    };

    setCompletedFilter = (val) => {
        this.setState({completedFilter: val});
    };

    getTodoItemIndexById = (id) => this.state.todoItems.findIndex((item) => item.id === id);

    render() {
        const todoItems = this.state.todoItems;

        return (
            <div>
                <InputContainer
                    addItemHandler={this.addTodoItem}
                    filterItemsHandler={this.setTextFilter}
                    clearTextFilter={() => this.setTextFilter('')}
                />

                <CompletedFilter setCompletedFilter={this.setCompletedFilter}/>
                <TodoItemListContainer
                    completedFilter={this.state.completedFilter}
                    textFilter={this.state.textFilter}
                    todoItems={this.state.todoItems}
                    addTodoItemHandler={this.addTodoItem}
                    removeTodoItemHandler={this.removeTodoItem}
                    editTodoItemHandler={this.editTodoItem}
                    toggleCompletedHandler={this.toggleCompleted}
                />
                <Summary
                    summaryCount={todoItems.length}
                    completedCount={todoItems.filter((item) => item.isCompleted).length}
                />
            </div>
        );
    }
}

export default MainContainer;
