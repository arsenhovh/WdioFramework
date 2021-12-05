const Page = require('./Page');

class PageAfterSearch extends Page {

    get searchedProduct() {
        return $('.s-image')
    }

    get addToBag() {
        return $('#add-to-cart-button')
    }

}

module.exports = new PageAfterSearch();
