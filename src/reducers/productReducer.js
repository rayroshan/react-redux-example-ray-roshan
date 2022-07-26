
import * as actions from '../actions/actions';

const initialValues = {
    products: [
        {
          _id: 1, 
          name: 'Apple',
          cost: 20
        },
        {
          _id: 2, 
          name: 'Banana',
          cost: 5
        },
        {
          _id: 3, 
          name: 'Orange',
          cost: 10
        },
        {
          _id: 4, 
          name: 'Grapes',
          cost: 15
        }
      ],
      cart: [],
      total: 0
}

const productReducer = (state=initialValues, action) => {

    if(action.type === actions.PURCHASE) {
        return {
            ...state,
            cart: [...state.cart, action.payload],
            total: state.total + parseInt(action.payload.price)
        }
    }
    
    if(action.type === actions.DELETE) {
        return {
            ...state, 
            cart: state.cart.filter((i, index) => index != action.payload.index),
            total: state.total - parseInt(action.payload.price)
        }
    }

    return state;
}

export default productReducer;