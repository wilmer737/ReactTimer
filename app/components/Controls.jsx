var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired,
    },

    handleStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        };
    },

    render: function () {
        var {countdownStatus} = this.props;
        var startStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.handleStatusChange('paused')}>Pause</button>;
            } else if (countdownStatus === 'paused'){
                return <button className="button primary" onClick={this.handleStatusChange('started')}>Start</button>;
            }
        };
        return (
            <div className="controls">
                {startStopButton()}
                <button className="button alert hollow" onClick={this.handleStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;