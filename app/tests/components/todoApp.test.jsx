var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp',()=>{
    it('should exist',()=>{
        expect(TodoApp).toExist();
    });

    if('should add todo to the todos state on handleAddTodo',()=>{
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({todos:[]});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle complated value when handleToggle called',()=>{
        var todoData = {
            id:11,
            text: 'test features',
            completed:false
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos:[todoData]});

        // check that todos first item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call handleToggle with 11
        todoApp.handleToggle(11);
        //verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});