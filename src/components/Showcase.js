/**
 * Created by akopylov on 03.07.2015.
 */
var React = require('react');
var AltContainer = require('alt/AltContainer');

var ShoppingCart = require('./Shoppingcart');
var ItemStore = require('../flux/stores/ItemStore');

var Item = React.createClass({
    // todo add 'Buy' button and bind it to Event system
    render() {
        console.log('Item.render');
        return(
            <li>
                <img src={this.props.src}/>
                <span>{this.props.descr}</span>
            </li>
        )
    }
});

var Items = React.createClass({

    render() {
        console.log('Items.render');
        return (
            <ul>
                {this.props.items.map((item, i) => {
                    return (
                        <Item key={item.id} src={item.src} descr={item.descr}/>
                    );
                })}
            </ul>
        )
    }
});

var Showcase = React.createClass({

    componentDidMount() {
        console.log('Showcase.componentDidMount()');
        ItemStore.fetchItems();
    },

    render() {
        console.log('Showcase.render');
        var outerClassName = 'col-md-5';
        return (
            <div className={outerClassName}>
                <h2>
                    Praesent consequat neque vitae ante dapibus, at vestibulum velit molestie. Mauris tincidunt quam accumsan accumsan condimentum.
                </h2>
                <div className="content">
                    Curabitur posuere posuere facilisis. Aliquam sodales sagittis purus vel luctus.
                    Morbi quis diam sodales sapien ultrices bibendum. Aenean suscipit purus id ultrices posuere.
                    Praesent fringilla tempor erat, et vulputate purus. Nulla dictum, felis quis tincidunt tempor, mi
                    diam luctus orci, vitae commodo ante arcu in nunc. Ut ornare neque in tellus pulvinar,
                    eu ultrices est consectetur.
                </div>
                <AltContainer store={ItemStore}>
                    <Items/>
                </AltContainer>
                <ShoppingCart />
            </div>
        )
    }
});

module.exports = Showcase;