/**
 * Created by akopylov on 03.07.2015.
 */

var alt = require('../../alt');

var ItemActions = require('../actions/ItemActions');
var ItemSource = require('../sources/ItemSource');

class ItemStore {
    constructor() {
        this.items = [];

        this.bindListeners({
            handleGetItems: ItemActions.FETCH_ACTIONS
        });
    }

    handleGetItems() {
        this.items = [];
    }
}

module.exports = alt.createStore(ItemStore, 'ItemStore');