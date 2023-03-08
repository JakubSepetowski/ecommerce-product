import { Fragment } from 'react';
import cartIcon from '../../../assets/icons/icon-cart.svg';

export const Cart = () => {
	return (
		<Fragment>
			<button className='relative mr-8'>
				<img className='w-6' src={cartIcon} alt='Cart Icon ' />
				<span className='absolute top-[-2px] right-[-10px] bg-orange-900 rounded-3xl w-6 text-xs text-white'>
					5
				</span>
			</button>
		</Fragment>
	);
};
