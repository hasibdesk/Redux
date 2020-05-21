import configureStore from './store/configureStore';
import { bugAdded, bugResolved, bugRemoved } from './store/bugs';

const store = configureStore();

store.dispatch(bugAdded({ description: 'Bug1: Fix the user counter' }));
store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugRemoved({ id: 1 }));

console.log(store.getState());
