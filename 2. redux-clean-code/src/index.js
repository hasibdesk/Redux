import configureStore from './store/configureStore';
import { bugAdded, bugResolved } from './store/bugs';

const store = configureStore();

store.dispatch(bugAdded('Bug1: Fix the user counter'));
store.dispatch(bugResolved(1));

console.log(store.getState());
