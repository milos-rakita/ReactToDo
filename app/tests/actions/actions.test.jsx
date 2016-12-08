var expect = require('expect');
var actions = require('actions');

describe('Actions',()=>{
    it('should generate search text action',()=>{
        var action={
            type:'SET_SEARCH_TEXT',
            searchText:'Some search text'
        };
        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    if('should generate add todo action',()=>{
        var action = {
            type:'ADD_TODO',
            text:'Thing to do'
        };

        var res = action.addTodo(action.text);

        expect(res).toEqual(action);
    });

});