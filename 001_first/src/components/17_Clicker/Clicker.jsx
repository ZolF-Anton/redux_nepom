import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../18_Todo/store';

import './clicker.css';

export default function Clicker() {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch(); // same as store.dispatch

    return (
        <div className="clicker">
            <h1>Hello CodeSandbox</h1>
            <h2>{count}</h2> */
            <h3>!@#$</h3>
            <h3>0000</h3>
            <div className="button_wrap">
                <button className="btn" onClick={() => dispatch(decrement)}>
                    MINUS
                </button>
                <button className="btn" onClick={() => dispatch(increment)}>
                    PLUS
                </button>
                <button className="btn" onClick={() => dispatch(reset)}>
                    RESET
                </button>
            </div>
        </div>
    );
}
