import { Fragment } from 'react';
import img1 from '../../assets/imgs/image-product-1.jpg';
import img2 from '../../assets/imgs/image-product-2.jpg';
import img3 from '../../assets/imgs/image-product-3.jpg';
import img4 from '../../assets/imgs/image-product-4.jpg';

export const ModalImg = (props: { img: string }) => {
	const setImg = () => {
		switch (props.img) {
			case 'product-1':
				return <img className=' rounded-lg' src={img1} alt='product picture' />;
			case 'product-2':
				return <img className=' rounded-lg' src={img2} alt='product picture' />;
			case 'product-3':
				return <img className=' rounded-lg' src={img3} alt='product picture' />;
			case 'product-4':
				return <img className=' rounded-lg' src={img4} alt='product picture' />;
			default:
				return <img className=' rounded-lg' src={img1} alt='product picture' />;
		}
	};

	return <Fragment>{setImg()}</Fragment>;
};
