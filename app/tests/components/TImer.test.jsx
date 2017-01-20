var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
       expect(Timer).toExist();
    });

    describe('set timer', () => {
        it('should set state to started and start timer', () => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
        });

    });
});