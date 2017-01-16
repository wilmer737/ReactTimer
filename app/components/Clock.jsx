var React = require('react');

var Clock = React.createClass({
    getDefaultProps: function () {
        return {
            totalSeconds: 0,
        };
    },

    propTypes: {
        totalSeconds: React.PropTypes.number,
    },

    formatSeconds: function (totalSeconds) {
        var seconds = totalSeconds % 60;
        var minute = Math.floor(totalSeconds / 60);

        if (seconds < 10)
            seconds = `0${seconds}`; // prepend 0 to seconds when less than 10

        if (minute < 10)
            minute = `0${minute}`;

        return `${minute}:${seconds}`;
    },

    render: function () {
        var {totalSeconds} = this.props;

        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }
});

module.exports = Clock;