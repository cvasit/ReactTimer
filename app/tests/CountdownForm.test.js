var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var TestUtils=require('react-addons-test-utils');
var $=require('jQuery');
var CountDownForm=require('CountdownForm');

describe('CountdownForm',()=>{
    it('should exist',()=>{
        expect(CountDownForm).toExist();
    });

    it('shooul call onSetCountDown if valid seconds is entered',()=>{

        var spy=expect.createSpy();

        var countdownForm=TestUtils.renderIntoDocument(<CountDownForm onSetCountdown={spy}/>);

        var $el=$(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.timerInput.value='90';

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(90);

    });

    it('shoul not call onSetCountDown if invalid seconds is entered',()=>{

        var spy=expect.createSpy();

        var countdownForm=TestUtils.renderIntoDocument(<CountDownForm onSetCountdown={spy}/>);

        var $el=$(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.timerInput.value='abc';

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();

    });

});