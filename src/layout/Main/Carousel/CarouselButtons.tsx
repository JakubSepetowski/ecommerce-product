import { Fragment, useEffect, useState } from 'react';
import arrowRight from '../../../assets/icons/icon-next.svg';
import arrowLeft from '../../../assets/icons/icon-previous.svg';

type Props = {
	onButtonClick: (curr: number) => void;
};
export const CarouselButtons = (props: Props) => {
	const [counter, setCounter] = useState(0);
	const leftAarrowHandler = () => {
		if (counter >= 0) setCounter((prev) => prev - 1);
		if (counter <=0) setCounter(3);
	};
	const rightAarrowHandler = () => {
		if (counter >= 0) setCounter((prev) => prev + 1);
		if (counter >= 3) setCounter(0);
	};
	useEffect(() => {
		props.onButtonClick(counter);
	}, [counter]);

	return (
		<Fragment>
			<button
				onClick={leftAarrowHandler}
				className='absolute top-2/4 left-5 translate-y-[-50%] bg-white rounded-[100%] p-2 w-8 h-8 flex justify-center items-center'>
				<img className='w-3 rounded-[100%]' src={arrowLeft} alt='' />
			</button>
			<button
				onClick={rightAarrowHandler}
				className='absolute top-2/4 right-5 translate-y-[-50%] bg-white rounded-[100%] p-2 w-8 h-8 flex justify-center items-center '>
				<img className='w-3 rounded-[100%]' src={arrowRight} alt='' />
			</button>
		</Fragment>
	);
};
