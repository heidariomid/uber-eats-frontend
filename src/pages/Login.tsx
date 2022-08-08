import {useMutation} from '@apollo/client';
import {useForm} from 'react-hook-form';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {authToken, isLoginVar} from '../apollo/GlobalVar';
import ErrorSpan from '../components/custom/ErrorSpan';
import {LOGIN_MUTATION} from '../graphql/mutations';
import Logo from '../images/uber-eats.svg';
import {LoginInput, LoginMutation, LoginMutationVariables} from '../graphql/schemaTypes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

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
	} = useForm<LoginInput>({
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
		if (ok && token) {
			localStorage.setItem('token', token);
			isLoginVar(true);
			authToken(token);
			navigate('/', {replace: true, state: {message}});
		}
	};
	const [loginHandler, {loading}] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION, {onCompleted});

	const onValidSubmit = () => {
		if (loading) return;
		const {email, password} = getValues();
		loginHandler({variables: {data: {email, password}}});
	};
	const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const emailRegister = {required: {value: true, message: 'email is required'}, pattern: {value: emailPattern, message: 'email format is incorrect'}, minLength: {value: 5, message: 'email must be more than 5 charachter'}, validate: (current: any) => current.includes('@')};
	const passwordRegister = {required: {value: true, message: 'password could not be empty'}, minLength: {value: 4, message: 'password should be greater than 4'}};
	const clearEmailErrors = () => clearErrors('email');
	const clearLoginErrors = () => clearErrors('password');
	return (
		<div className='container flex flex-col h-screen items-center justify-center '>
			<div className='w-full max-w-screen-sm flex flex-col items-center py-10 px-5 text-center '>
				<span className='flex mb-20 relative'>
					<img src={Logo} alt='logo' className='w-48 mr-4 mb-10 z-10 ' />
				</span>
				<h3 className='font-bold text-lg text-gray-800 text-left w-full pl-10 '>Welcome Back</h3>
				<span className=' text-gray-600 text-left w-full pl-10'>Sign in with your email address and password.</span>
				<div className='flex flex-col mt-5 px-20 '>
					{state?.message !== undefined ? <span className='bg-green-600 span'>{state?.message}</span> : null}
					{state?.error !== undefined ? <ErrorSpan message={state?.error} /> : null}
					{errors.email?.type === 'validate' && <ErrorSpan message={'email must include @'} />}
					{errors?.email?.message && <ErrorSpan message={errors?.email?.message} />}
					{errors?.password?.message && <ErrorSpan message={errors?.password?.message} />}
				</div>
				<form className='flex flex-col w-full mt-5 px-10' onSubmit={handleSubmit(onValidSubmit)}>
					<input className='input mb-3 focus:ring-0 focus:border-gray-400' {...register('email', emailRegister)} type='text' placeholder='Email' onKeyDown={clearEmailErrors} />
					<input className='input mb-3 focus:ring-0 focus:border-gray-400' {...register('password', passwordRegister)} type='password' placeholder='Password' onKeyDown={clearLoginErrors} />

					<button className={!isValid ? 'bg-gray-300 btn py-2 mt-5 flex text-center justify-center items-center' : 'mt-5 py-2 btn'} type='submit' disabled={!isValid || loading}>
						{!loading && 'Login'}
						{loading && (
							<div className='flex flex-row space-x-16 items-center justify-center'>
								<span className='text-white'>Loading</span>
								<svg className=' animate-spin  w-5 h-5 absolute  text-green-400'>
									<FontAwesomeIcon icon={faSpinner} />
								</svg>
							</div>
						)}
					</button>
				</form>
				<div className='mt-5'>
					<span className=' font-medium'>New to Uber?</span>
					<Link className='pl-2 text-lime-600 font-medium hover:underline' to={'/auth/signup'}>
						Create an account
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
