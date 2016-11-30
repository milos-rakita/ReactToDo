var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function(){
        var {text,id,completed,createdAt,completedAt} = this.props;
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
            <div onClick={()=>{
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderData()}</p>
            </div>
        );
    }
});

module.exports = Todo;
