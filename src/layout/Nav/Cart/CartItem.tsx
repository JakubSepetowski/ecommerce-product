import productImg from '../../../assets/imgs/image-product-1-thumbnail.jpg';
import deleteIcon from '../../../assets/icons/icon-delete.svg';

export const CartItem = () => {
	return (
		<div className='flex flex-col p-2 pt-6 pb-6 xs:p-4 xs:pb-10 xs:pt-10'>
			<div className='flex items-center justify-between'>
				<img className='w-14 rounded-md xs:w-16' src={productImg} alt='product image' />
				<div className='text-neutral-300'>
					<h3>Fall limited Edition Sneakers</h3>
					<p>
						$125.00 x <span>3</span> <span className='font-bold text-black'>375.00</span>
					</p>
				</div>
				<button>
					<img className='xs:w-4' src={deleteIcon} alt='delete icon' />
				</button>
			</div>
			<button className='mt-7 w-full bg-orange-900 p-3 text-white font-bold rounded-lg'>
				Checkout
			</button>
		</div>
	);
};
