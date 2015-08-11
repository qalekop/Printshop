/**
 * Created by akopylov on 11.08.2015.
 */
var alt = require('../../alt');

var ItemActions = require('../actions/ItemActions');

class ShoppingCartStore {
    constructor() {
        this.items = [];
        this.bindListeners({
           handleItemAdded: ItemActions.ITEM_ADDED,
           handleItemRemoved: ItemActions.ITEM_REMOVED
        });
    }

    handleItemAdded(src) {
        this.items.push(src);
    }

    handleItemRemoved(src) {
        var index = this.items.indexOf(src);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

module.exports = alt.createStore(ShoppingCartStore, 'ShoppingCartStore');