var React = require('react');
var Nav = require('Nav');

var App = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Nav />
                    <p>App.jsx rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = App;
