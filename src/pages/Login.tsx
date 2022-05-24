import {useMutation} from '@apollo/client';
import {useForm} from 'react-hook-form';
import {useLocation, useNavigate} from 'react-router-dom';
import {isLoginVar} from '../apollo';
import ErrorSpan from '../components/user/errors/ErrorSpan';
import {LOGIN_MUTATION} from '../graphql/mutations';
import {LoginMutation, LoginMutationVariables} from '../graphql/schemaTypes';
interface ILoginForm {
	email: string;
	password: string;
}
const Login = () => {
	const {state}: {state: any} = useLocation();
	let navigate = useNavigate();

	const {
		register,
		getValues,
		formState: {errors, isValid},
		handleSubmit,
		setError,
		clearErrors,
	} = useForm<ILoginForm>({
		mode: 'onChange',
		defaultValues: {
			email: state?.email || '',
			password: state?.password || '',
		},
	});

	const onCompleted = (data: LoginMutation) => {
		const {ok, message, token} = data?.login;
		if (!ok) {
			setError('email', {message});
		}
		if (token) {
			localStorage.setItem('token', token);
			isLoginVar(true);
			navigate('/', {replace: true, state: {message}});
		}
	};
	const [loginHandler, {loading}] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION, {onCompleted});

	const onValidSubmit = () => {
		if (loading) return;
		const {email, password} = getValues();
		loginHandler({variables: {data: {email, password}}});
	};

	const emailRegister = {required: {value: true, message: 'email is required'}, minLength: {value: 5, message: 'email must be more than 5 charachter'}, validate: (current: any) => current.includes('@')};
	const passwordRegister = {required: {value: true, message: 'password could not be empty'}, minLength: {value: 4, message: 'password should be greater than 4'}};
	const clearEmailErrors = () => clearErrors('email');
	const clearLoginErrors = () => clearErrors('password');
	return (
		<div className='container flex flex-col h-screen items-center justify-center bg-gray-500'>
			<div className='w-full max-w-lg py-10 rounded-lg bg-white  text-center shadow-lg '>
				<h3 className=' font-bold text-lg text-gray-800'>Login</h3>
				<div className='flex flex-col mt-5 px-20 '>
					{state?.message !== undefined ? <span className='bg-green-600 span'>{state?.message}</span> : null}
					{state?.error !== undefined ? <ErrorSpan message={state?.error} /> : null}
					{errors.email?.type === 'validate' && <ErrorSpan message={'email must include @'} />}
					{errors?.email?.message && <ErrorSpan message={errors?.email?.message} />}
					{errors?.password?.message && <ErrorSpan message={errors?.password?.message} />}
				</div>
				<form className='flex flex-col mt-5 px-10' onSubmit={handleSubmit(onValidSubmit)}>
					<input className='input mb-3 p-1' {...register('email', emailRegister)} type='text' placeholder='email' onKeyDown={clearEmailErrors} />
					<input className='input mb-3 p-1' {...register('password', passwordRegister)} type='password' placeholder='password' onKeyDown={clearLoginErrors} />
					<button className={!isValid ? 'bg-gray-500 btn' : ' bg-black btn'} type='submit' disabled={!isValid || loading}>
						{loading ? 'Loading...' : 'Login'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
