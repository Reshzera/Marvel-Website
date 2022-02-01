import {createStore} from 'redux'

const InitialState = {
	currentProduct: {noProduct: true},
	cart: [],
}

//reducer
function Reducer(state = InitialState, action) {
	switch (action.type) {
		case 'CHANGE_PRODUCT':
			return {...state, currentProduct: action.payload}
		case 'ADD_CART':
			return{...state, cart: [...state.cart, state.currentProduct]}
		case 'RESET':
			return InitialState
		default:
			return state
	}
}

//store

const store = createStore(Reducer);

export default store;