export const PURCHASE = 'PURCHASE';
export const DELETE = 'DELETE';
export const LOGIN = 'LOGIN';

export const validateUser = (loginDetails) => {
    return dispatch => {
        //API call or async functions will go here
        setTimeout(() => {
            dispatch({type: LOGIN, loginDetails: loginDetails})
        }, 2000)
    }   
} 