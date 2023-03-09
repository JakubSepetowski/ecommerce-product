import { Fragment, useState } from 'react';
import { Main } from './layout/Main/Main';
import { Nav } from './layout/Nav/Nav';
import { Modal } from './layout/Modal/Modal';

export function App() {
	const [isModalShown, setisModalShown] = useState(false);
	const [product, setProduct] = useState(0);
	const [openCart, setOpenCart] = useState(false);
	const [itemCounter, setItemCounter] = useState(1);
	const [isAddToCart, setIsAddToCart] = useState(false);

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
	const addProductHandler = () => {
		setItemCounter((prev) => prev + 1);
	};
	const removeProductHandler = () => {
		if (itemCounter > 1) setItemCounter((prev) => prev - 1);
	};
	const addToCartHandler = () => {
		if (itemCounter >= 1) setIsAddToCart(true);
	};
	const removeFromCartHandler = () => {
		setIsAddToCart(false);
		setOpenCart(false);
		setItemCounter(1);
	};

	return (
		<Fragment>
			<Nav onToogleCart={toogleCartHandler} itemCounter={itemCounter} addToCart={isAddToCart} />
			<Main
				onShowModal={showModalHandler}
				openCart={openCart}
				itemCounter={itemCounter}
				onAddProduct={addProductHandler}
				onRemoveProduct={removeProductHandler}
				onAddToCart={addToCartHandler}
				addToCart={isAddToCart}
				removeFromCart={removeFromCartHandler}
			/>
			{isModalShown && (
				<Modal type={product} onClsoeModal={closeModalHandler} onChangeImg={changeImgHandler} />
			)}
		</Fragment>
	);
}
