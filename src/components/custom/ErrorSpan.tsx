interface IErrorSpan {
	message: string;
}
const ErrorSpan: React.FC<IErrorSpan> = ({message}) => {
	return <span className='bg-red-600 span'>{message}</span>;
};
export default ErrorSpan;
