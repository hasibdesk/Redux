import { configureStore } from '@reduxjs/toolkit';

import reducer from './bugs';
import projects from './projects';

export default function () {
	const store = configureStore({
		reducer: projects,
	});
	return store;
}
