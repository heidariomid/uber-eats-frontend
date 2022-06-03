const Category = ({category}) => {
	return (
		<div className='bg-red-300' key={category.id}>
			<h3>{category.name}</h3>
			<h3>{category.slug}</h3>
		</div>
	);
};

export default Category;
