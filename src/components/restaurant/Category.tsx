const Category = ({category}) => {
	return (
		<div key={category?.id} className='flex flex-col  items-center cursor-pointer group'>
			<div className='rounded-full w-14 h-14 bg-cover group-hover:bg-gray-200 ' style={{backgroundImage: `url(${category?.iconImg})`}}></div>
			<span className='mt-2 font-medium'>{category?.name}</span>
		</div>
	);
};

export default Category;