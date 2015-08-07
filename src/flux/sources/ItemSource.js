/**
 * Created by akopylov on 06.08.2015.
 */

var ItemActions = require('../actions/ItemActions');

var ItemSource = {
    fetchItems() {
        return {
            remote() {
                return new Promise(function(resolve, reject) {
                    $.get('/images/', function(data) {
                            resolve(data);
                        },
                        'json'
                    );
                    //resolve([{id: 0, src: '/thumbnails/P1000315.jpg', descr: 'This is a description'}]);
                });
            },

            local() { return null; },

            success:    ItemActions.fetchItems,
            error:      ItemActions.fetchFailed
        }
    }
};

module.exports = ItemSource;