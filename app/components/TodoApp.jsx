var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function(){
        return{
            showComplated: false,
            searchText: '',
            todos:TodoAPI.getTodos()
        };
    },
    componentDidUpdate:function(){
        TodoAPI.setTodos(this.state.todos);

    },
    handleAddTodo: function(text){
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    },
    handleToggle: function(id){
        var updatedTodos = this.state.todos.map((todo)=>{
            if (todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
            }
            
            return todo;
        });

        this.setState({todos: updatedTodos});
    },
    handleSearch: function(showComplated,searchText){
        this.setState({
            showComplated: showComplated,
            searchText: searchText.toLowerCase()
        })
    },
    render: function(){
        var {todos,showComplated,searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos,showComplated,searchText);
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;