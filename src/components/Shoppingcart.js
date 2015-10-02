/**
 * Created by akopylov on 03.07.2015.
 */
var React = require('react');

var ShoppingCart = React.createClass({
    render() {
        if (!this.props.items || this.props.items.length == 0) {
            return (
                <h4>Your shopping cart is empty</h4>
            )
        } else {
            return (
                <div>
                    <h4>Yor shopping cart includes:</h4>
                    <ul>
                        {this.props.items.map((item, i) => {
                            var className = i % 2 ? 'bg-primary' : 'bg-warning';
                            return (
                                <li key={i} className={className}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }
});

module.exports = ShoppingCart;