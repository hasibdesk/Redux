// Ducks Pattern with Toolkit

-import configureStore from reduxjs/Toolkit 

wrap it with this method and pass the reducer, do not need to add devtools it enable by default

    configureStore({
		reducer: reducer,
	});

========


=> createAction function from redux/toolkit 
  import { createAction } from 'redux/toolkit

this function return the type and payload. when it called need to store in a variable and then need to pass the data or object with the variable it will return the payload 

export const action = createAction('fetchPosts') // the action type will be 'fetchPosts'
action({id:1}) // it will pass this object to payload


=======

Create Reducers
--

=> createReducer function from redux/toolkit 
  import { createReducer } from 'redux/toolkit

export default createReducer([], {

	action.type: (state, action) => {
		// your statement . no need to spread the state , just neeed to push 
	},

});