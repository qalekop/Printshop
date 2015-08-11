/**
 * Created by akopylov on 03.07.2015.
 */
var React = require('react');
var AltContainer = require('alt/AltContainer');

var ShoppingCart = require('./Shoppingcart');
var Button = require('./Button');
var ItemStore = require('../flux/stores/ItemStore');
var ShoppingCartStore = require('../flux/stores/ShoppingCartStore');
var ItemActions = require('../flux/actions/ItemActions');

var Item = React.createClass({

    handleClick() {
        ItemActions.itemSelected(this.props.src);
    },

    render() {
        var thumbnailSource = '/thumbnails/' + this.props.src;
        var className = this.props.index % 2 == 0 ? 'bg-success' : 'bg-info';
        return(
            <li onClick={this.handleClick} className={className}>
                <img src={thumbnailSource}/>
                <span>{this.props.descr}</span>
                <Button itemId={this.props.src}/>
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
                        <Item key={i} src={item.src} descr={item.descr} index={i}/>
                    );
                })}
            </ul>
        )
    }
});

var Showcase = React.createClass({

    componentDidMount() {
        ItemStore.fetchItems();
    },

    render() {
        var outerClassName = 'col-md-6';
        return (
            <div className={outerClassName}>
                <h3>
                    Praesent consequat.
                </h3>
                <p>
                    Curabitur posuere posuere facilisis. Aliquam sodales sagittis purus vel luctus.
                    Morbi quis diam sodales sapien ultrices bibendum. Aenean suscipit purus id ultrices posuere.
                    Praesent fringilla tempor erat, et vulputate purus. Nulla dictum, felis quis tincidunt tempor, mi
                    diam luctus orci, vitae commodo ante arcu in nunc. Ut ornare neque in tellus pulvinar,
                    eu ultrices est consectetur.
                </p>
                <AltContainer store={ItemStore}>
                    <Items/>
                </AltContainer>
                <AltContainer store={ShoppingCartStore}>
                    <ShoppingCart />
                </AltContainer>
            </div>
        )
    }
});

module.exports = Showcase;