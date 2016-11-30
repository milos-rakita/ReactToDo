var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function(){
        var {text,id,completed,createdAt,completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-complated' : 'todo';
        var renderData = () =>{
            var message = 'Created ';
            var timestamp = createdAt;

            if(completed){
                message = 'Completed';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('DD.MM.YYYY HH:mm:ss');
        };

        return(
            <div className={todoClassName} onClick={()=>{
                this.props.onToggle(id);
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo-subtext">{renderData()}</p>
                </div>
                
            </div>
        );
    }
});

module.exports = Todo;
