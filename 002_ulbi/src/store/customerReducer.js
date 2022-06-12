import { defaultCustomersState } from './defaultState';

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const REMOVE_ALL_CUSTOMER = 'REMOVE_ALL_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export const customerReducer = (state = defaultCustomersState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return { ...state, customers: [...state.customers, ...action.payload] };
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] };

        case REMOVE_CUSTOMER:
            return {
                ...state,
                customers: [
                    ...state.customers.filter(
                        (everyCustomer) => everyCustomer.id !== action.payload
                    ),
                ],
            };
        case REMOVE_ALL_CUSTOMER:
            return {
                ...state,
                customers: [],
            };

        default:
            return state;
    }
};

export const addCustomerAction = (payload) => ({
    type: ADD_CUSTOMER,
    payload,
});
export const addManyCustomerAction = (payload) => ({
    type: ADD_MANY_CUSTOMERS,
    payload,
});
export const removeCustomerAction = (payload) => ({
    type: REMOVE_CUSTOMER,
    payload,
});
export const removeAllCustomerAction = (payload) => ({
    type: REMOVE_ALL_CUSTOMER,
    payload,
});
