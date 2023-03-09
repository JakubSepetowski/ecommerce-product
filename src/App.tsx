import { Fragment, useState } from 'react';
import { Main } from './layout/Main/Main';
import { Nav } from './layout/Nav/Nav';
import { Modal } from './layout/Modal/Modal';
import { Cart } from './layout/Nav/Cart/Cart';

export function App() {
	const [isModalShown, setisModalShown] = useState(false);
	const [product, setProduct] = useState(0);
	const [openCart, setOpenCart] = useState(false);

	const showModalHandler = (type: number) => {
		setProduct(type);
		setisModalShown(true);
	};
	const closeModalHandler = () => {
		setisModalShown(false);
	};
	const changeImgHandler = (num: number) => {
		if (num === 0) {
			setProduct(0);
		}
		if (num === 1) {
			setProduct(1);
		}
		if (num === 2) {
			setProduct(2);
		}
		if (num === 3) {
			setProduct(3);
		}
	};
	const toogleCartHandler = () => {
		setOpenCart((prev) => !prev);
	};

	return (
		<Fragment>
			<Nav onToogleCart={toogleCartHandler} />
			<Main onShowModal={showModalHandler} openCart={openCart} />
			{isModalShown && (
				<Modal type={product} onClsoeModal={closeModalHandler} onChangeImg={changeImgHandler} />
			)}
		</Fragment>
	);
}
