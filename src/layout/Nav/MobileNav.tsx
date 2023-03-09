import menuIcon from '../../assets/icons/icon-menu.svg';
import closeIcon from '../../assets/icons/icon-close-black.svg';
import { Fragment } from 'react';

type Props = {
	isShow: boolean;
	onCloseNav: () => void;
	onShowNav: () => void;
};

export const MobileNav = (props: Props) => {
	const overlay = (
		<div className='fixed top-0 left-0 z-20 bg-black bg-opacity-60 w-full h-screen backdrop-blur-sm  '></div>
	);

	return (
		<Fragment>
			{props.isShow && overlay}
			<div className='flex items-end md:hidden'>
				<button onClick={props.onShowNav} className='p-2'>
					<img src={menuIcon} alt='Menu icon' />
				</button>
				<h1 className=' ml-2 font-bold text-4xl '>sneakers</h1>
				<div
					className={`${
						props.isShow ? 'translate-x-0' : 'translate-x-[-100%]'
					} fixed top-0 left-0 w-3/5 h-screen bg-white z-30 transition-transform duration-500`}>
					<button onClick={props.onCloseNav} className='p-2 ml-4 mt-10'>
						<img src={closeIcon} alt='' />
					</button>
					<ul className='mt-10 font-bold text-lg'>
						<li className='cursor-pointer p-2 mt-2 ml-4 hover:text-orange-900 transition-colors duration-300'>
							Collections
						</li>
						<li className='cursor-pointer p-2 mt-2 ml-4 hover:text-orange-900 transition-colors duration-300'>
							Men
						</li>
						<li className='cursor-pointer p-2 mt-2 ml-4 hover:text-orange-900 transition-colors duration-300'>
							Women
						</li>
						<li className='cursor-pointer p-2 mt-2 ml-4 hover:text-orange-900 transition-colors duration-300'>
							About
						</li>
						<li className='cursor-pointer p-2 mt-2 ml-4 hover:text-orange-900 transition-colors duration-300'>
							Contact
						</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
};
