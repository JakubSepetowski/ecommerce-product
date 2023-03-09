import thumbnail1 from '../../assets/imgs/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/imgs/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/imgs/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/imgs/image-product-4-thumbnail.jpg';
import { MouseEvent } from 'react';

export const Buttons = (props: any) => {
	const clickHandler = (e: MouseEvent<HTMLElement>) => {
		props.onClickHandler(e);
	};

	return (
		<div className='flex justify-between mt-7  '>
			<button
				onClick={clickHandler}
				className='w-24 hover:scale-105 border-orange-900 hover:border transition-all rounded-lg duration-300'>
				<img data-id='0' className='rounded-md' src={thumbnail1} alt='sneakers picture' />
			</button>
			<button
				onClick={clickHandler}
				className='w-24 hover:scale-105 border-orange-900 hover:border transition-all rounded-lg duration-300'>
				<img data-id='1' className='rounded-md' src={thumbnail2} alt='sneakers picture' />
			</button>
			<button
				onClick={clickHandler}
				className='w-24 hover:scale-105 border-orange-900 hover:border transition-all rounded-lg duration-300'>
				<img data-id='2' className='rounded-md' src={thumbnail3} alt='sneakers picture' />
			</button>
			<button
				onClick={clickHandler}
				className='w-24 hover:scale-105 border-orange-900 hover:border transition-all rounded-lg duration-300'>
				<img data-id='3' className='rounded-md' src={thumbnail4} alt='sneakers picture' />
			</button>
		</div>
	);
};
