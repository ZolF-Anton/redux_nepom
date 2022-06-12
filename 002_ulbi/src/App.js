import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

import './App.css';
import {
    addCustomerAction,
    removeAllCustomerAction,
    removeCustomerAction,
} from './store/customerReducer';
import { fetchCustomers } from './asycActions/customers';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cashReducer.cash);
    const customersSelector = useSelector((state) => state.customerReducer.customers);
    const customersSelectorReducerValue = useSelector((state) => state.customerReducer);
    const refCashAmount = useRef(0);
    const refCustomerName = useRef(null);

    const addCash = (cashAmount) => {
        dispatch({ type: 'ADD_CASH', payload: Number(cashAmount.current.value) });
    };
    const getCash = (cashAmount) => {
        dispatch({ type: 'GET_CASH', payload: Number(cashAmount.current.value) });
    };

    const addCustomer = (name) => {
        const customerObj = {
            name: name.current.value,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customerObj));
    };
    const removeCustomer = (customerRemoveName) => {
        dispatch(removeCustomerAction(customerRemoveName.id));
    };
    const removeAllCustomer = () => {
        dispatch(removeAllCustomerAction());
    };

    const showCashAmount = (cashAmount) => {
        console.log(Number(cashAmount.current.value));
    };
    const showCustomer = (custName) => {
        console.log(custName.current.value);
        console.log(customersSelector);
        console.log('customersSelectorReducerValue', customersSelectorReducerValue);
    };
    return (
        <div className='App'>
            <h1>{cash} $</h1>
            <input type='number' defaultValue={0} ref={refCashAmount} />
            <div className='App-wrap'>
                <button onClick={() => addCash(refCashAmount)} className='App-btn'>
                    Пополнить счёт
                </button>
                <button onClick={() => getCash(refCashAmount)} className='App-btn'>
                    Снять со счёта
                </button>
                <button onClick={() => showCashAmount(refCashAmount)} className='App-btn'>
                    SHow
                </button>
            </div>
            <input type='text' defaultValue={'John'} ref={refCustomerName} />
            <div className='App-wrap'>
                <button onClick={() => addCustomer(refCustomerName)} className='App-btn'>
                    Add Customer
                </button>
                <button onClick={() => dispatch(fetchCustomers())} className='App-btn'>
                    Add Customers from fetch
                </button>
                <button onClick={() => removeAllCustomer()} className='App-btn'>
                    Remove Customer
                </button>
                <button onClick={() => showCustomer(refCustomerName)} className='App-btn'>
                    SHow Customer
                </button>
            </div>

            {customersSelector.length > 0 ? (
                <div className='customers-wrap'>
                    {customersSelector.map((customer) => (
                        <div onClick={() => removeCustomer(customer)} className='customer'>
                            {customer.name}
                        </div>
                    ))}
                </div>
            ) : (
                <div className='customers'>No CUSTOMERS!</div>
            )}
        </div>
    );
}

export default App;
