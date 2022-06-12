import { addManyCustomerAction } from '../store/customerReducer';

// export const fetchCustomers = () => {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then((json) => dispatch(addManyCustomerAction(json)));
//     };
// };
export const fetchCustomers = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch(addManyCustomerAction(data));
    };
};
