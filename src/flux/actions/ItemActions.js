/**
 * Created by akopylov on 20.07.2015.
 */

var alt = require('../../alt');

class ItemActions {
    fetchItems(items) {
        this.dispatch(items);
    }

    fetchFailed(errorMessage) {
        this.dispatch(errorMessage);
    }
}

module.exports = alt.createActions(ItemActions);