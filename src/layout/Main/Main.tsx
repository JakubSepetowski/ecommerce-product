import { Cart } from '../Nav/Cart/Cart';
import { Carousel } from './Carousel/Carousel';
import { Description } from './Description/Description';
import { ItemPreview } from './ItemPreview/ItemPreview';

type Props = {
	onShowModal: (type: number) => void;
	openCart: boolean;
};

export const Main = (props: Props) => {
	return (
		<main className='relative w-full max-w-[1200px] mx-auto'>
			{props.openCart && <Cart />}
			<Carousel />
			<section className=' relative md:flex flex-col items-center justify-center  p-4 md:mt-14 lg:items-start lg:flex-row '>
				<ItemPreview onShowModal={props.onShowModal} />
				<Description />
			</section>
		</main>
	);
};
