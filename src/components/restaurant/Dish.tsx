import {useReactiveVar} from '@apollo/client';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {isDarkVar} from '../../apollo/GlobalVar';
import {Dish as IDish} from '../../graphql/schemaTypes';
import {actions} from '../../store/actions';
import {useStateValue} from '../../store/context/ContextManager';

const Dish = ({dish, strarted}: {dish: IDish; strarted: any}) => {
	let isDark = useReactiveVar(isDarkVar);
	const [state, dispatch] = useStateValue();
	const [isOrderSelected, setIsOrderSelected] = useState<Boolean>(false);
	const orderHandler = () => {
		dispatch({
			type: actions.ADD_TO_BASKET,
			items: dish,
		});
		setIsOrderSelected((current) => !current);
		strarted(!isOrderSelected);
	};
	const addOrderHandler = () => {};
	return (
		<>
			<div key={dish?.id} className={`cursor-pointer  ${isOrderSelected && 'shadow-lg'}  text-center group p-4  `}>
				<div onClick={orderHandler}>
					<div className={`py-24   bg-cover bg-center mb-2`} style={{backgroundImage: `url(${dish?.photo})`}}></div>
					<div>
						<span className='font-bold pr-4 text-2xl'>{dish?.name}</span>
					</div>
					<div className={` transition-all mx-auto ${isDark ? 'bg-green-500' : 'bg-black'} ${!isDark && 'group-hover:bg-green-500'} ${isOrderSelected && 'bg-green-500 w-32'} h-0.5 w-20 text-center justify-center items-center bg-center `}></div>

					<span className='text-lg'>{dish?.price}$</span>
					<div className='flex flex-row items-center justify-center bg-gray-200'></div>
				</div>
				{isOrderSelected && (
					<div>
						{dish?.options && <h2 className='bg-gray-200 mt-4'> Description</h2>}
						<span className='text-lg'>{dish?.description}</span>
						{dish?.options && <h2 className='bg-gray-200 mt-4'> Options</h2>}
						{dish?.options &&
							dish?.options.map((item, i) => (
								<div key={i} className='grid mt-2 md:grid-cols-3 items-center justify-center '>
									<div className='font-medium'>{item.name}</div>
									<div>{item.extra}$</div>
									<div>
										<input type={'checkbox'} />
									</div>
								</div>
							))}
					</div>
				)}
				{isOrderSelected && (
					<div className='btn mt-10 w-full'>
						<Link to={'/basket'}>Add to Basket</Link>
					</div>
				)}
			</div>
		</>
	);
};

export default Dish;
