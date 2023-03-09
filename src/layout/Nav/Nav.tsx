import avatar from '../../assets/imgs/image-avatar.png';
import { useState } from 'react';
import { CartButton } from './Cart/CartButton';
import { MobileNav } from './MobileNav';
import { MainNav } from './MainNav';

type Props = {
	onToogleCart: () => void;
};

export const Nav = (props: Props) => {
	const [showNav, setShowNav] = useState(false);

	const showNavHandler = () => {
		setShowNav(true);
	};
	const closeNavHandler = () => {
		setShowNav(false);
	};

	return (
		<nav className='w-full '>
			<div className='mx-auto max-w-[1200px] w-full flex items-center justify-between p-4 md:border-b-2 pb-6 pt-6 lg:pb-8 lg:pt-8 '>
				<MainNav />
				<MobileNav isShow={showNav} onShowNav={showNavHandler} onCloseNav={closeNavHandler} />
				<div className='flex'>
					<CartButton onToogleCart={props.onToogleCart} />
					<img className='w-10 mr-2' src={avatar} alt='Profile picture' />
				</div>
			</div>
		</nav>
	);
};
