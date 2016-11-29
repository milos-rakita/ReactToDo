var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function(){
        return{
            todos:[
                {
                    id:1,
                    text:'Walk the dog'
                },
                {
                    id:2,
                    text:'Clean the yard'
                },
                {
                    id:3,
                    text:'Leav mail on porch'
                },
                {
                    id:4,
                    text:'Play video games'
                },
            ]
        };
    },
    handleAddTodo: function(text){
        alert('new todo: '+text)
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