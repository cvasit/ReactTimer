var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var  TestUtils=require('react-addons-test-utils');
var Clock=require('Clock');

describe('Clock',()=>{
    it('should exists',function () {
        expect(Clock).toExist();
    });

    describe('render',()=> {
        it('shoould render clock to output', () => {

            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);

            //creating a jQuery selector
            var el =$(ReactDOM.findDOMNode(clock));

            //Using the selector to navigate to the specific attribute
            var actualText=el.find('.clock-text').text();

            expect(actualText).toBe('01:02');
        });

    });

    describe('formatseconds',()=>{

        it('should format seconds',()=>{

            var clock=TestUtils.renderIntoDocument(<Clock/>);

            expect(clock.formatSeconds(616)).toBe('10:16');
        });

        it('should format seconds when min/seconds < 10 ',()=>{

            var clock=TestUtils.renderIntoDocument(<Clock/>);

            expect(clock.formatSeconds(62)).toBe('01:02');
        });

    });
});