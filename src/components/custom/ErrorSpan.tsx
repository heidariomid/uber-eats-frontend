interface IErrorSpan {
	message?: string;
}
const ErrorSpan: React.FC<IErrorSpan> = ({message}) => {
	if (message) {
		return <span className='bg-red-600 text-white px-4 span'>{message}</span>;
	}
	return <span className='bg-red-600 text-white px-4 span'>Something went wrong</span>;
};
export default ErrorSpan;
