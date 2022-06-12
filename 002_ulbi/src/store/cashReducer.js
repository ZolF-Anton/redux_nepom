import { defaultCashState } from './defaultState';

const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';

export const cashReducer = (state = defaultCashState, action) => {
    switch (action.type) {
        case ADD_CASH:
            console.log(
                'state:',
                state,
                'state.cash:',
                state.cash,
                'action.:',
                action,
                'action.payload',
                action.payload
            );
            return {
                ...state,
                cash: state.cash + action.payload,
            }; /* state в Redux не изменяемо, т.е. каждый раз возвращаем новый объект, поэтому создаём новый объект в него разворачиаем с помошью ...spred старое состояние и изменяем уже какое-то конкретное поле.*/

        case GET_CASH:
            return { ...state, cash: state.cash - action.payload };

        default:
            return state;
    }
};
