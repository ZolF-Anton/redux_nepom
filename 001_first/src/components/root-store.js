import { createStore } from 'redux';
import { loadState, saveState } from './local-storage';
import { rootReducer } from './root-reducer';

export const store = createStore(rootReducer);

export const configureStore = () => {
    const persistedState = loadState();

    const store1 = createStore(
        rootReducer,
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    store1.subscribe(() => {
        saveState(store1.getState());
    });
    return store1;
};
