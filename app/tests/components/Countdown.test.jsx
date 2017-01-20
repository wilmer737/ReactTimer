var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist;
    });

    describe('set countdown', () => {
        it('should set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should never let count go negative', (done) => {
            var countDown = TestUtils.renderIntoDocument(<Countdown/>);
            countDown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countDown.state.count).toBe(0);
                done();
            }, 3000);
        });

        it('should pause countdown on paused status', (done) => {
            var countDown = TestUtils.renderIntoDocument(<Countdown/>);
            countDown.handleSetCountdown(3);
            countDown.handleStatusChange('paused');
            setTimeout(() => {
                expect(countDown.state.count).toBe(3);
                expect(countDown.state.countdownStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should stop countdown on stopped status', (done) => {
            var countDown = TestUtils.renderIntoDocument(<Countdown/>);
            countDown.handleSetCountdown(3);
            countDown.handleStatusChange('stopped');
            setTimeout(() => {
                expect(countDown.state.count).toBe(0);
                expect(countDown.state.countdownStatus).toBe('stopped');
                done();
            }, 1001);
        });

    });
});