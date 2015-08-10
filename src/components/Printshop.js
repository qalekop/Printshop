/**
 * Created by akopylov on 03.07.2015.
 */

var React = require('react');
var AltContainer = require('alt/AltContainer');

var Preview = require('./Preview');
var Showcase = require('./Showcase');

var PreviewStore = require('../flux/stores/PreviewStore');

var Printshop = React.createClass({

    render() {
        return (
          <div className="content">
              <div className="row">
                  <AltContainer store={PreviewStore}>
                    <Preview />
                  </AltContainer>
                  <Showcase />
              </div>
          </div>
        );
    }
});

module.exports = Printshop;