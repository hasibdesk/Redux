import store from './store';
import { bugAdded, bugResolved } from './actions';

/* Subscribe is the listener to notify all state chnages */
// const unsubscribe = store.subscribe(() => {
// 	console.log('Store changed', store.getState());
// });

store.dispatch(bugAdded('Bug1: Fix the user counter'));
store.dispatch(bugResolved(1));

// store.dispatch({
// 	type: actions.BUG_REMOVED,
// 	payload: {
// 		id: 1,
// 	},
// });

console.log(store.getState());
