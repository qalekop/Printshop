/**
 * Created by akopylov on 10.08.2015.
 */
var React = require('react');

var Button = React.createClass({
    render() {
        return (
            <button className='btn btn-primary' type='button'>Buy</button>
        )
    }
});

module.exports = Button;