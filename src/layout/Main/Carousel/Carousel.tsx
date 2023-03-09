import { useState } from 'react';
import img1 from '../../../assets/imgs/image-product-1.jpg';
import img2 from '../../../assets/imgs/image-product-2.jpg';
import img3 from '../../../assets/imgs/image-product-3.jpg';
import img4 from '../../../assets/imgs/image-product-4.jpg';
import { CarouselButtons } from '../Carousel/CarouselButtons';

export const Carousel = () => {
	const [currSlide, setCurrSlide] = useState(0);

	const currSlideHandler = (curr: number) => {
		setCurrSlide(curr);
	};

	const changeImg = () => {
		switch (currSlide) {
			case 0: {
				return <img className='w-full  object-cover' src={img1} alt='sneaker image' />;
			}
			case 1: {
				return <img className='w-full  object-cover' src={img2} alt='sneaker image' />;
			}
			case 2: {
				return <img className='w-full  object-cover' src={img3} alt='sneaker image' />;
			}
			case 3: {
				return <img className='w-full  object-cover' src={img4} alt='sneaker image' />;
			}
			default:
				return <img className='w-full  object-cover' src={img1} alt='sneaker image' />;
		}
	};

	return (
		<div className='w-full  bg-slate-400 relative md:hidden'>
			<div>{changeImg()}</div>
			<CarouselButtons onButtonClick={currSlideHandler} />
			
		</div>
	);
};
