/**
 * Created by akopylov on 03.07.2015.
 */

var alt = require('../../alt');

var ItemActions = require('../actions/ItemActions');
var ItemSource = require('../sources/ItemSource');

class ItemStore {
    constructor() {
        this.items = [];
        this.errorMessage = null;

        this.bindListeners({
            handleGetItems: ItemActions.FETCH_ITEMS
        });

        this.exportAsync(ItemSource);
    }

    handleGetItems(items) {
        this.items = items;
        this.errorMessage = null;
    }
}

module.exports = alt.createStore(ItemStore, 'ItemStore');