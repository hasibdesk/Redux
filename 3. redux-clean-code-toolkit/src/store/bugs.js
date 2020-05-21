import { createAction, createReducer } from '@reduxjs/toolkit';

// Action Creators
export const bugAdded = createAction('bugAdded');
export const bugResolved = createAction('bugResolved');
export const bugRemoved = createAction('bugRemoved');

/* Reducers */
let lastId = 0;

/* export default function reducer(state = [], action) {
	switch (action.type) {
		case bugAdded.type:
			return [...state, { id: ++lastId, description: action.payload.description, resolved: false }];
		case bugRemoved.type:
			return state.filter((bug) => bug.id !== action.payload.id);
		case bugResolved.type:
			return state.map((bug) => (bug.id !== action.payload.id ? bug : { ...bug, resolved: true }));
		default:
			return state;
	}
} */

const bugReducer = createReducer([], {
	// key: value
	// actiontype : functions (event => event handler)
	[bugAdded.type]: (state, action) => {
		state.push({ id: ++lastId, description: action.payload.description, resolved: false });
	},
	[bugResolved.type]: (state, action) => {
		const bugIndex = state.findIndex((bug) => bug.id === action.payload.id);
		state[bugIndex].resolved = true;
	},
	[bugRemoved.type]: (state, action) => {
		return state.filter((bug) => bug.id !== action.payload.id);
	},
});

export default bugReducer;
