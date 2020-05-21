import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
	name: 'bugs',
	initialState: [],
	reducers: {
		//only actions => action handler
		bugAdded: (state, action) => {
			state.push({ id: ++lastId, description: action.payload.description, resolved: false });
		},
		bugResolved: (state, action) => {
			const bugIndex = state.findIndex((bug) => bug.id === action.payload.id);
			state[bugIndex].resolved = true;
		},
		bugRemoved: (state, action) => {
			return state.filter((bug) => bug.id !== action.payload.id);
		},
	},
});

export const { bugAdded, bugResolved, bugRemoved } = slice.actions;
export default slice.reducer;
