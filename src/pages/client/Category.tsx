import Spinner from '../../images/Spinner-s.svg';
const Category = ({category}) => {
	console.log(category);
	return (
		<>
			{!category?.iconImg && <img className='w-14 h-14 rounded-full' src={Spinner} alt='spinner' key={category.id} />}
			{category?.iconImg && <img className='w-14 h-14 rounded-full' src={category?.iconImg} alt='spinner' key={category.id} />}
		</>
	);
};

export default Category;
