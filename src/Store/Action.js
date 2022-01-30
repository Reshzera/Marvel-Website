const CHANGE_PRODUCT = "CHANGE_PRODUCT";
const ADD_CART = "ADD_CART";

//action
export function changeProduct(comicinfo) {
	return {
		type: CHANGE_PRODUCT,
		payload: comicinfo
	}
}

export function addCart() {
	return {
		type: ADD_CART,
		info: 'adicionando currentProduct no carrinho'
	}
}