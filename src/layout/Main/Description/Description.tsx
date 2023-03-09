import cartIcon from '../../../assets/icons/icon-cart.svg';

export const Description = () => {
	return (
		<div className=' flex flex-col items-center justify-center md:h-[27rem] text-center w-full md:w-2/4 lg:ml-10'>
			<div className='text-left p-2  max-w-md'>
				<h2 className='text-orange-900 font-bold'>sneaker copmany</h2>
				<h3 className='mt-3 font-bold text-4xl'>Fall limited sneakers</h3>
				<p className='mt-5 text-neutral-300'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente incidunt ipsum pariatur
					omnis quos rem consequatur voluptatem, praesentium autem excepturi.
				</p>
				<div className='mt-5 flex items-center justify-start'>
					<h4 className='font-bold text-2xl'>$125.00</h4>
					<p className='ml-3 bg-orange-1000 p-1 text-orange-900 font-bold text-xs'>50%</p>
				</div>
				<p className='mt-1 text-neutral-200 line-through '>$250.00</p>
				<div className='flex justify-between mt-5'>
					<div className='bg-neutral-100 w-2/5 rounded-lg flex justify-between items-center'>
						<button className='p-2 text-orange-900 font-bold text-lg'>-</button>
						<span className='font-bold'>3</span>
						<button className='p-2 text-orange-900 font-bold text-lg'>+</button>
					</div>
					<button className='w-3/5 bg-orange-900 ml-5 rounded-lg flex justify-center items-center text-white'>
						<img className='' src={cartIcon} alt='cart icon' />
						<p className='ml-2'>Add to cart</p>
					</button>
				</div>
			</div>
		</div>
	);
};
