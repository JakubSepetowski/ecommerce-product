import { CartItem } from './CartItem';

export const Cart = () => {
	return (
		<div className=' absolute top-5 right-2/4 translate-x-2/4  bg-white media w-11/12 max-w-sm z-50 rounded-md shadow-2xl text-sm xs:text-base md:right-[12rem] md:top-[-4rem]'>
			<h2 className='border-b p-2 pb-4 pt-4 font-bold xs:p-4 xs:pb-6 xs:pt-6'>Cart</h2>
			<CartItem />
		</div>
	);
};
