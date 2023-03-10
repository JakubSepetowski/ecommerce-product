export const MainNav = () => {
	return (
		<div className=' hidden md:flex items-end '>
			<h1 className='font-bold text-2xl lg:text-3xl'>sneakers</h1>
			<ul className='flex ml-12 text-l lg:text-xl'>
				<li className='cursor-pointer pl-2 pr-2 hover:text-orange-900 transition-colors duration-300'>
					Collections
				</li>
				<li className='cursor-pointer pl-2 pr-2 ml-2 hover:text-orange-900 transition-colors duration-300'>
					Men
				</li>
				<li className='cursor-pointer pl-2 pr-2 ml-2 hover:text-orange-900 transition-colors duration-300'>
					Women
				</li>
				<li className='cursor-pointer pl-2 pr-2 ml-2 hover:text-orange-900 transition-colors duration-300'>
					About
				</li>
				<li className='cursor-pointer pl-2 pr-2 ml-2 hover:text-orange-900 transition-colors duration-300'>
					Contact
				</li>
			</ul>
		</div>
	);
};
