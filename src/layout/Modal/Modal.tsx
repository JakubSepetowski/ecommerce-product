import thumbnail1 from '../../assets/imgs/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/imgs/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/imgs/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/imgs/image-product-4-thumbnail.jpg';
import arrowRight from '../../assets/icons/icon-next.svg';
import arrowLeft from '../../assets/icons/icon-previous.svg';
import closeIcon from '../../assets/icons/icon-close.svg';
import { Buttons } from '../UI/Buttons';
import { ModalImg } from './ModalImg';
import { useState, useEffect, MouseEvent } from 'react';

type Props = {
	onClsoeModal: () => void;
	onChangeImg: (num: number) => void;
	type: number;
};

export const Modal = (props: Props) => {
	const [counter, setCounter] = useState(props.type);

	const leftAarrowHandler = () => {
		if (counter >= 0) setCounter((prev) => prev - 1);
		if (counter <= 0) setCounter(3);
	};
	const rightAarrowHandler = () => {
		if (counter >= 0) setCounter((prev) => prev + 1);
		if (counter >= 3) setCounter(0);
	};
	useEffect(() => {
		props.onChangeImg(counter);
	}, [counter]);

	const closeModalHandler = () => {
		props.onClsoeModal();
	};
	const goToImgHandler = (e: MouseEvent<HTMLElement>) => {
		const imgId = (e.target as HTMLElement).dataset.id;
		props.onChangeImg(Number(imgId));
	};

	return (
		<div className='hidden md:flex fixed top-0 left-0 h-full w-full bg-black bg-opacity-70   justify-center items-center'>
			<div className=' relative w-2/4 max-w-xl'>
				<button
					onClick={closeModalHandler}
					className=' text-white text-xl p-4 absolute top-[-60px] right-0 z-40 hover:scale-125 transition-transform duration-300'>
					<img src={closeIcon} alt='close icon' />
				</button>
				<div className='relative'>
					<ModalImg img={props.type} />
					<button
						onClick={leftAarrowHandler}
						className='absolute top-2/4 left-[-16px] translate-y-[-50%] bg-white p-2 rounded-[100%] w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300'>
						<img className='w-3' src={arrowLeft} alt='arrow left icon' />
					</button>
					<button
						onClick={rightAarrowHandler}
						className='absolute top-2/4 right-[-16px] translate-y-[-50%] bg-white p-2 rounded-[100%] w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300'>
						<img className='w-3' src={arrowRight} alt='arrow right icion' />
					</button>
				</div>
				<Buttons onClickHandler={goToImgHandler} />
			</div>
		</div>
	);
};
