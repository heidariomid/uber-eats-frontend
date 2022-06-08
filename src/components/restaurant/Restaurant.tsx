const Restaurant = ({restaurant}) => {
	return (
		<div key={restaurant?.id} className='cursor-pointer  '>
			<div className='  flex flex-col items-start justify-center bg-cover bg-center h-96 ' style={{backgroundImage: `url(${restaurant?.coverImg})`}}>
				<div className='bg-white h-52 w-1/3 items-center flex flex-col'>
					<div className=' font-bold text-4xl text-center  py-2 my-4'>
						<h1>{restaurant?.name}</h1>
					</div>
					<div className='text-2xl '>
						<span>{restaurant?.category?.name}</span>
					</div>
				</div>
			</div>
			<div className='border-2 border-green-400 h-96 items-center justify-center text-4xl flex'>
				<h1>Hello</h1>
			</div>
		</div>
	);
};

export default Restaurant;
