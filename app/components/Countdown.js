var React=require('react');
var Clock=require('Clock');
var CountdownForm=require('CountdownForm');

var Countdown =React.createClass({

    getInitialState:function () {
        return{
            count:0
        }
    },
    handleSetCountDown:function (totalSeconds) {
        this.setState({
            count:totalSeconds,
        });
    },
    render: function () {

        var {count}=this.state;

        return (<div>
            <Clock totalSeconds={count}/>
            <CountdownForm onSetCountdown={this.handleSetCountDown}/>
        </div>)
    }
});

module.exports=Countdown;
