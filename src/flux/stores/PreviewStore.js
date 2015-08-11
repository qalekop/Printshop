/**
 * Created by akopylov on 10.08.2015.
 */

var alt = require('../../alt');

var ItemActions = require('../actions/ItemActions');

class PreviewStore {
    constructor() {
        this.src = null;
        this.description = null;

        this.bindListeners({
            handleItemSelected: ItemActions.ITEM_SELECTED
        });
    }

    handleItemSelected(src) {
        this.src = src;
        this.description = 'Etiam placerat porttitor nunc, vel vehicula felis. Cras non dolor a lectus dignissim luctus et vitae tortor. '
            + 'Aliquam non libero imperdiet, interdum mi quis, dignissim ipsum. Nam mauris ipsum, euismod et rhoncus eu, '
            + 'tincidunt a turpis. Nulla iaculis egestas arcu sed convallis. Nullam pellentesque, nunc eu accumsan '
            + 'fringilla, urna nisi facilisis sapien, in eleifend urna tellus non libero. Quisque sit amet finibus neque, eget condimentum nisi.';
    }
}

module.exports = alt.createStore(PreviewStore, 'PreviewStore');