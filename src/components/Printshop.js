/**
 * Created by akopylov on 03.07.2015.
 */

var React = require('react');
var Preview = require('./Preview');
var Showcase = require('./Showcase');

var Printshop = React.createClass({

    getInitialState() {
        return {
            preview: {src: '/gallery/P1020701.jpg', descr: 'This is a description'}
        }
    },

    render() {
        return (
          <div className="content">
              <div className="row">
                  <Preview
                      src={this.state.preview.src}
                      descr={this.state.preview.descr}
                  />
                  <Showcase />
              </div>
          </div>
        );
    }
});

module.exports = Printshop;