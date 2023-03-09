import { Carousel } from './Carousel/Carousel';
import { Description } from './Description/Description';
import { ItemPreview } from './ItemPreview/ItemPreview';

type Props = {
	onShowModal: (type:string) => void;
};

export const Main = (props: Props) => {
	return (
		<main>
			<Carousel />
			<section className=' md:flex flex-col items-center justify-center mx-auto  w-full max-w-[1200px] p-4 md:mt-14 lg:items-start lg:flex-row '>
				<ItemPreview onShowModal={props.onShowModal} />
				<Description />
			</section>
		</main>
	);
};
