import {useMutation} from '@apollo/client';
import {useForm} from 'react-hook-form';
import {useLocation, useNavigate} from 'react-router-dom';
import {isLoginVar} from '../apollo';
import {LOGIN_MUTATION} from '../graphql/mutations';

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
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			email: state?.email || '',
			password: state?.password || '',
		},
	});

	const onCompleted = (data: any) => {
		const {ok, message, token} = data.login;
		if (!ok) {
			setError('email', {message});
		}
		if (token) {
			localStorage.setItem('token', token);
			isLoginVar(true);
			navigate('/', {replace: true, state: {message}});
		}
	};
	const [loginHandler, {loading}] = useMutation(LOGIN_MUTATION, {onCompleted});

	const onValidSubmit = () => {
		if (loading) return;
		const {email, password} = getValues();
		loginHandler({
			variables: {
				data: {
					email,
					password,
				},
			},
		});
	};

	const emailRegister = {required: {value: true, message: '* email is required'}, minLength: {value: 5, message: '* email must be more than 5 charachter'}, validate: (current: any) => current.includes('@')};
	const passwordRegister = {required: {value: true, message: '* password could not be empty'}, minLength: {value: 4, message: '* password should be greater than 4'}};
	const clearLoginErrors = () => clearErrors('email');
	return (
		<div className='container flex flex-col'>
			<div className='max-w'>
				<div className='flex flex-col justify-center items-center'>
					{state?.message !== undefined ? <span className='bg-green-600 text-white'>{state?.message}</span> : null}
					{state?.error !== undefined ? <span className='bg-red-600 text-white'>{state?.error}</span> : null}
					<form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onValidSubmit)}>
						{/* -------------------errors----------------- */}
						<div className='flex flex-col'>
							{errors.email?.type === 'validate' && <span className='bg-red-600 text-white'>* email must include @</span>}
							{errors?.email?.message && <span className='bg-red-600 text-white'>{errors?.email?.message}</span>}
						</div>
						<div className='flex flex-col'>{errors?.password?.message && <span className='bg-red-600 text-white'>{errors?.password?.message}</span>}</div>

						{/* -------------------input----------------- */}
						<input {...register('email', emailRegister)} type='text' placeholder='email' onKeyDown={clearLoginErrors} />
						<input {...register('password', passwordRegister)} type='password' placeholder='password' onKeyDown={clearLoginErrors} />

						<button className={!isValid ? 'bg-gray-500 text-white px-4' : 'bg-blue-600 text-white px-4'} type='submit' disabled={!isValid || loading}>
							Log in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
