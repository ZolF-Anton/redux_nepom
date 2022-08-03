import { useDispatch } from 'react-redux';
import { resetToDefaults } from './reset-action';
export const ResetApp = () => {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(resetToDefaults())}>Reset</button>;
};
