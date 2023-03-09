import img1 from '../../assets/imgs/image-product-1.jpg';
import img2 from '../../assets/imgs/image-product-2.jpg';
import img3 from '../../assets/imgs/image-product-3.jpg';
import img4 from '../../assets/imgs/image-product-4.jpg';
import thumbnail1 from '../../assets/imgs/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/imgs/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/imgs/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/imgs/image-product-4-thumbnail.jpg';
import arrowRight from '../../assets/icons/icon-next.svg';
import arrowLeft from '../../assets/icons/icon-previous.svg';
import { ModalImg } from './ModalImg';


type Props = {
	onClsoeModal: () => void;
	type: string;
};

export const Modal = (props: Props) => {
	const closeModalHandler = () => {
		props.onClsoeModal();
	};

	return (
		<div className='hidden md:flex fixed top-0 left-0 h-full w-full bg-black bg-opacity-70   justify-center items-center'>
			<div className=' relative w-2/4 max-w-xl'>
				<button
					onClick={closeModalHandler}
					className=' text-white text-xl p-4 absolute top-[-60px] right-0 z-40'>
					X
				</button>
				<div className='relative'>
					<ModalImg img={props.type} />
					<button className='absolute top-2/4 left-[-16px] translate-y-[-50%] bg-white p-2 rounded-[100%] w-10 h-10 flex items-center justify-center'>
						<img className='w-3' src={arrowLeft} alt='arrow left icon' />
					</button>
					<button className='absolute top-2/4 right-[-16px] translate-y-[-50%] bg-white p-2 rounded-[100%] w-10 h-10 flex items-center justify-center'>
						<img className='w-3' src={arrowRight} alt='arrow right icion' />
					</button>
				</div>
				<div className='w-full flex justify-around mt-4'>
					<button className='w-20'>
						<img className='rounded-md' src={thumbnail1} alt='' />
					</button>
					<button className='w-20'>
						<img className='rounded-md' src={thumbnail2} alt='' />
					</button>
					<button className='w-20'>
						<img className='rounded-md' src={thumbnail3} alt='' />
					</button>
					<button className='w-20'>
						<img className='rounded-md' src={thumbnail4} alt='' />
					</button>
				</div>
			</div>
		</div>
	);
};
