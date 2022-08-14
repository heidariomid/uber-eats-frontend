import {useReactiveVar} from '@apollo/client';
import {isDarkVar} from '../../apollo/GlobalVar';
import {Category as ICategory} from '../../graphql/schemaTypes';
import {actions} from '../../store/actions';
import {useStateValue} from '../../store/context/ContextManager';

const Category = ({category}: {category: ICategory}) => {
	const isDark = useReactiveVar(isDarkVar);
	const [state, dispatch] = useStateValue();
	const selectedCategory = (slug) => {
		dispatch({
			type: actions.ADD_CATEGORY_SLUG,
			payload: {slug},
		});
	};
	return (
		<div onClick={() => selectedCategory(category?.slug)} key={category?.id} className='flex flex-col  items-center cursor-pointer  '>
			<div className={`${state.category.slug === category.slug && '  shadow-green-500 shadow-inner'}  rounded-full w-14 h-14 bg-cover  `} style={{backgroundImage: `url(${category?.iconImg})`}}></div>
			<span className={` ${state.category.slug === category.slug && 'text-green-600 '} mt-2 text-xs md:text-sm md:px-10 md:font-medium`}>{category?.name}</span>
		</div>
	);
};

export default Category;
