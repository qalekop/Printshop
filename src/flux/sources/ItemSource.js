/**
 * Created by akopylov on 06.08.2015.
 */

var ItemActions = require('../actions/ItemActions');

var ItemSource = {
    fetchItems() {
        return {
            remote() {
                return new Promise(function(resolve, reject) {
                    resolve([{id: 0, src: '/gallery/P1020607.jpg', descr: 'This is a description'}]);
                });
            },

            local() { return null; },

            success:    ItemActions.fetchItems,
            error:      ItemActions.fetchFailed
        }
    }
};

module.exports = ItemSource;