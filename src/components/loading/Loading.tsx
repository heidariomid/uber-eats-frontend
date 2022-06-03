import Spinner from '../../images/Spinner-s.svg';

const Loading = () => {
	return (
		<div className='h-screen flex flex-col justify-center items-center'>
			<img className='m-4' src={Spinner} alt='spinner' />
		</div>
	);
};

export default Loading;
