import mainImg from '../../../assets/imgs/image-product-1.jpg';
import thumbnail1 from '../../../assets/imgs/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../../assets/imgs/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../../assets/imgs/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../../assets/imgs/image-product-4-thumbnail.jpg';
import { MouseEvent } from 'react';
import { Buttons } from '../../UI/Buttons';

type Props = {
	onShowModal: (type: number) => void;
};

export const ItemPreview = (props: Props) => {
	const onnClickHandler = (e: MouseEvent) => {
		const type = (e.target as HTMLElement).dataset.id!;
		props.onShowModal(Number(type));
	};

	return (
		<div className='hidden md:flex md:flex-col'>
			<img className='w-[27rem] rounded-lg shadow-md' src={mainImg} alt='Fall limited sneakers' />
			<Buttons onClickHandler={onnClickHandler} />
		</div>
	);
};
