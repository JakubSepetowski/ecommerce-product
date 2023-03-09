import { Fragment, useState } from 'react';
import { Main } from './layout/Main/Main';
import { Nav } from './layout/Nav/Nav';
import { Modal } from './layout/Modal/Modal';

export function App() {
	const [isModalShown, setisModalShown] = useState(false);
	const [product, setProduct] = useState('product-1');

	const showModalHandler = (type: string) => {
		setProduct(type);
		setisModalShown(true);
	};
	const closeModalHandler = () => {
		setisModalShown(false);
	};
	

	return (
		<Fragment>
			<Nav />
			<Main onShowModal={showModalHandler} />
			{isModalShown && (
				<Modal
					type={product}
					onClsoeModal={closeModalHandler}
					
				/>
			)}
		</Fragment>
	);
}
