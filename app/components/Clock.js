var React=require('react');

var Clock =React.createClass({

    getDefaultProps:function () {
        totalSeconds:0
    },

    propTypes:{
        totalSeconds:React.PropTypes.number,
    },

    formatSeconds:function (totalSeconds) {

        var mins= Math.floor(totalSeconds/60);

        var seconds=totalSeconds% 60;

        if(mins <10 ) mins='0' + mins;

        if(seconds<10) seconds='0' + seconds;

        return `${mins}:${seconds}`;

    },
    render: function () {
        var {totalSeconds}=this.props;
        return (<div className="clock">
            <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
        </div>)
    }
});

module.exports=Clock;
