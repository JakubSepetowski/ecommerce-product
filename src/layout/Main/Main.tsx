import { Cart } from '../Nav/Cart/Cart';
import { Carousel } from './Carousel/Carousel';
import { Description } from './Description/Description';
import { ItemPreview } from './ItemPreview/ItemPreview';

type Props = {
	openCart: boolean;
	itemCounter: number;
	addToCart: boolean;
	onShowModal: (type: number) => void;
	onAddProduct: () => void;
	onRemoveProduct: () => void;
	onAddToCart: () => void;
	removeFromCart: () => void;
};

export const Main = (props: Props) => {
	return (
		<main className='relative w-full max-w-[1200px] mx-auto'>
			{props.openCart && (
				<Cart
					itemCounter={props.itemCounter}
					addToCart={props.addToCart}
					removeFromCart={props.removeFromCart}
				/>
			)}
			<Carousel />
			<section className=' relative md:flex flex-col items-center justify-center  p-4 md:mt-14 lg:items-start lg:flex-row '>
				<ItemPreview onShowModal={props.onShowModal} />
				<Description
					itemCounter={props.itemCounter}
					onAddProduct={props.onAddProduct}
					onRemoveProduct={props.onRemoveProduct}
					onAddToCart={props.onAddToCart}
				/>
			</section>
		</main>
	);
};
