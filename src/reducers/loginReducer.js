import * as actions from '../actions/actions';

const initialValues = {
      users: ['admin', 'manager', 'user'],
      loginDetails: 'none'
}

const loginReducer = (state=initialValues, action) => {
    
    if(action.type === actions.LOGIN) {
        return {
            ...state, 
            loginDetails: action.loginDetails
        }
    }

    return state;
}

export default loginReducer;