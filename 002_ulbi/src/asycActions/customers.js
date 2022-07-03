import { addManyCustomerAction } from '../store/customerReducer';

export const fetchCustomersY = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => dispatch(addManyCustomerAction(json)));
    };
};
export const fetchCustomersX = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch(addManyCustomerAction(data));
    };
};
export const fetchCustomers = () => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    dispatch(addManyCustomerAction(data));
};
