var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoList = require('TodoList');

describe('TodoList',()=>{
    it('should exist',()=>{
        expect(TodoList).toExist();
    });
});