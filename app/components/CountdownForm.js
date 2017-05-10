var React=require('react');

var CountdownForm=React.createClass({

    onSubmit: function (e) {
        e.preventDefault();

        var timerValue=this.refs.timerInput.value;

        if(timerValue.match(/^[0-9]*$/)){

            this.refs.timerInput.value='';

            this.props.onSetCountdown(parseInt(timerValue,10));
        }
    },
    render:function () {
       return(
           <div>
           <form ref="form" onSubmit={this.onSubmit} className="count-down-form">
                <input type="text" ref="timerInput" placeholder="Enter time is seconds"/>
                <button className="button expanded">Start Countdown Timer</button>
           </form>
           </div>
       );
   }
});

module.exports=CountdownForm;
