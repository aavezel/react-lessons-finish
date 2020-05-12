import updateBooksList from "./books-list";
import updateShopingCart from "./shoping-cart";

const reducer = (state, action) => {
    return {
        booksList: updateBooksList(state, action),
        shopingCart: updateShopingCart(state, action),
    };
}

export default reducer;