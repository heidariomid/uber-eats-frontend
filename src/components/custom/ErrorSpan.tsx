interface IErrorSpan {
	message?: unknown;
}
const ErrorSpan: React.FC<IErrorSpan> = ({message}) => {
	const text = typeof message === 'string' ? message : undefined;
	if (text) {
		return (
			<span role={'alert'} className='bg-red-600 text-white px-4 span rounded-md absolute '>
				{text}
			</span>
		);
	}
	return <span className='bg-red-600 text-white px-4 span absolute '>Something went wrong</span>;
};
export default ErrorSpan;
