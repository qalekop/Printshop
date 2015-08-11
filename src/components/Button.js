/**
 * Created by akopylov on 10.08.2015.
 */
var React = require('react');

var ItemActions = require('../flux/actions/ItemActions');
var Button = React.createClass({

    getInitialState() {
        return {buying: true};
    },

    handleClick() {
        if (this.state.buying) {
            ItemActions.itemAdded(this.props.itemId);
            this.setState({buying: false});
        } else {
            ItemActions.itemRemoved(this.props.itemId);
            this.setState({buying: true});
        }
    },

    render() {
        var text = this.state.buying ? 'Buy' : 'Unbuy';
        return (
            <button className='btn btn-primary' type='button' onClick={this.handleClick}>{text}</button>
        )
    }
});

module.exports = Button;