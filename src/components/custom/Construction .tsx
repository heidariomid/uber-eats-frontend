import construction from '../../images/construction.svg';
import logo from '../../images/uber-eats.svg';

const Construction = () => {
	return (
		<section className='flex flex-col justify-center items-center h-screen w-full px-2 pt-32 md:px-0'>
			<div className='container items-center max-w-6xl px-5 mx-auto text-center space-y-20'>
				<div className='flex text-center items-center justify-center'>
					<img className='w-96 py-10' src={logo} alt='logo' />
				</div>
				<h1 className='text-4xl font-bold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center'>
					<span className='block'>
						Site is Under <span className='block mt-1 text-green-500 lg:inline lg:mt-0 '>Consteruction</span>
					</span>
				</h1>
				<p className='bg-black mx-auto text-white py-2 md:max-w-md sm:text-lg lg:text-2xl lg:max-w-xl md:text-center'>sorry for inconvinence we are working on this site </p>
			</div>
			<div className='container items-center max-w-screen-2xl  mx-auto mt-16 text-center '>
				<img src={construction} alt='working' />
			</div>
		</section>
	);
};

export default Construction;
