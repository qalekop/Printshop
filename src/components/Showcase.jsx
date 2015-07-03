/**
 * Created by akopylov on 03.07.2015.
 */
var React = require('react');

var ShoppingCart = require('react');

var Item = React.createClass({
    render() {
        return(
            <div>
                <img src={this.props.src}/>
                <span>{this.props.descr}</span>
            </div>
        )
    }
});

var Showcase = React.createClass({
    render() {
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
                <ul>
                    {this.props.items.map((item, i) => {
                        return (
                            <li><Item /></li>
                        );
                    })}
                </ul>
                <ShoppingCart />
            </div>
        )
    }
});

module.exports = Showcase;