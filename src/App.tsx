import { Fragment, useState } from 'react';
import { Main } from './layout/Main/Main';
import { Nav } from './layout/Nav/Nav';

export function App() {
	return (
		<Fragment>
			<Nav />
			<Main />
		</Fragment>
	);
}
