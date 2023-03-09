import mainImg from '../../../assets/imgs/image-product-1.jpg';
import thumbnail1 from '../../../assets/imgs/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../../assets/imgs/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../../assets/imgs/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../../assets/imgs/image-product-4-thumbnail.jpg';
import { MouseEvent } from 'react';

type Props = {
	onShowModal: (type:string) => void;
};

export const ItemPreview = (props: Props) => {
	const onClickHandler = (e: MouseEvent) => {
		const type=(e.target as HTMLElement).dataset.imgType!;
		props.onShowModal(type)
	};

	return (
		<div className='hidden md:flex md:flex-col'>
			<img className='w-[27rem] rounded-lg shadow-md' src={mainImg} alt='Fall limited sneakers' />
			<div className='flex justify-between mt-4 '>
				<button onClick={onClickHandler} className='w-20'>
					<img
						data-img-type='product-1'
						className='rounded-md'
						src={thumbnail1}
						alt='sneakers picture'
					/>
				</button>
				<button onClick={onClickHandler} className='w-20'>
					<img
						data-img-type='product-2'
						className='rounded-md'
						src={thumbnail2}
						alt='sneakers picture'
					/>
				</button>
				<button onClick={onClickHandler} className='w-20'>
					<img
						data-img-type='product-3'
						className='rounded-md'
						src={thumbnail3}
						alt='sneakers picture'
					/>
				</button>
				<button onClick={onClickHandler} className='w-20'>
					<img
						data-img-type='product-4'
						className='rounded-md'
						src={thumbnail4}
						alt='sneakers picture'
					/>
				</button>
			</div>
		</div>
	);
};
