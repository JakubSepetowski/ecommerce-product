import { Fragment } from 'react';
import cartIcon from '../../../assets/icons/icon-cart.svg';

type Props = {
	onToogleCart: () => void;
	itemCounter: number;
	addToCart: boolean;
};

export const CartButton = (props: Props) => {
	const toogleCartHandler = () => {
		props.onToogleCart();
	};

	const changeSpan = () => {
		if (props.itemCounter > 0 && props.addToCart)
			return (
				<span className='absolute top-[-2px] right-[-10px] bg-orange-900 rounded-3xl w-6 text-xs text-white'>
					{props.itemCounter}
				</span>
			);
	};

	return (
		<Fragment>
			<button
				onClick={toogleCartHandler}
				className='relative mr-8 hover:scale-110 transition-transform duration-300'>
				<img className='w-6' src={cartIcon} alt='Cart Icon ' />
				{changeSpan()}
			</button>
		</Fragment>
	);
};
