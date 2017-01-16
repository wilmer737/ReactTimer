var React = require('react');

var App = (props) => {
    return (
        <div>
            <div>
                <div>
                    <p>App.jsx rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = App;
