import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const projects = createSlice({
	name: 'Projects',
	initialState: [],
	reducers: {
		projectAdded: (project, action) => {
			project.push({ id: ++lastId, name: action.payload.name });
		},
	},
});

export const { projectAdded } = projects.actions;
export default projects.reducer;
