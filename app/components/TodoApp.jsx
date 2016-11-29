var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function(){
        return{
            todos:[
                {
                    id:uuid(),
                    text:'Walk the dog'
                },
                {
                    id:uuid(),
                    text:'Clean the yard'
                },
                {
                    id:uuid(),
                    text:'Leav mail on porch'
                },
                {
                    id:uuid(),
                    text:'Play video games'
                },
            ]
        };
    },
    handleAddTodo: function(text){
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        })
    },
    handleSearch: function(showComplated,searchText){
        this.setState({
            showComplated: showComplated,
            searchText: searchText.toLowerCase()
        })
    },
    render: function(){
        var {todos} = this.state;
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;