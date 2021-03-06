var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList',()=>{
    it('should exist',()=>{
        expect(TodoList).toExist();
    });

    it('should rander on todo component for each tofo item',()=>{
        var todos = [
            {
                id:1,
                text:'Do something'
            },
            {
                id:2,
                text:'check mail'
            }];
            var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
            var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);

            expect(todosComponents.length).toBe(todos.length);
    });
});


