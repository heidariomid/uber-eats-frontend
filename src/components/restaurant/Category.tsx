import {useReactiveVar} from '@apollo/client';
import {Link} from 'react-router-dom';
import {isDarkVar} from '../../apollo/GlobalVar';

const Category = ({category}) => {
	const isDark = useReactiveVar(isDarkVar);

	return (
		<Link to={`/category/${category.slug}`}>
			<div key={category?.id} className='flex flex-col  items-center cursor-pointer group'>
				<div className='rounded-full w-14 h-14 bg-cover group-hover:animate-wiggle ' style={{backgroundImage: `url(${category?.iconImg})`}}></div>
				<span className='mt-2 font-medium'>{category?.name}</span>
			</div>
		</Link>
	);
};

export default Category;
