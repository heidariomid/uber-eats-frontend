import {useMutation} from '@apollo/client';
import {useForm} from 'react-hook-form';
import {Link, useLocation, useNavigate} from 'react-router-dom';

import {SIGN_UP_MUTATION} from '../graphql/mutations';
import Logo from '../images/uber-eats.svg';
import {CreateAccountInput, CreateAccountMutation, CreateAccountMutationVariables, UserRole} from '../graphql/schemaTypes';
import ErrorSpan from '../components/custom/ErrorSpan';
const Signup = () => {
	const {state}: {state: any} = useLocation();
	let navigate = useNavigate();

	const {
		register,
		getValues,
		formState: {errors, isValid},
		handleSubmit,
		setError,
		clearErrors,
	} = useForm<CreateAccountInput>({
		mode: 'onChange',
		defaultValues: {
			role: UserRole.Client,
		},
	});

	const onCompleted = (data: CreateAccountMutation) => {
		const {ok, message} = data?.createAccount;
		if (!ok) {
			setError('email', {message});
		} else {
			const {email, password} = getValues();
			navigate('/auth/login', {replace: true, state: {message, email, password}});
		}
	};
	const [signupHandler, {loading}] = useMutation<CreateAccountMutation, CreateAccountMutationVariables>(SIGN_UP_MUTATION, {onCompleted});

	const onValidSubmit = () => {
		if (loading) return;
		const {email, password, role} = getValues();

		signupHandler({variables: {data: {email, password, role}}});
	};
	const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const emailRegister = {required: {value: true, message: 'email is required'}, pattern: {value: emailPattern, message: 'email format is incorrect'}, minLength: {value: 5, message: 'email must be more than 5 charachter'}};
	const passwordRegister = {required: {value: true, message: 'password could not be empty'}, minLength: {value: 4, message: 'password should be greater than 4'}};
	const roleRegister = {required: {value: true, message: 'role could not be empty'}};
	const clearEmailErrors = () => clearErrors('email');
	const clearLoginErrors = () => clearErrors('password');
	const clearRoleErrors = () => clearErrors('role');
	return (
		<div className='container flex flex-col h-screen items-center justify-center '>
			<div className='w-full max-w-screen-sm flex flex-col items-center py-10 px-5 text-center '>
				<img src={Logo} alt='logo' className='w-48 mb-10' />
				<h3 className='font-bold text-lg text-gray-800 text-left w-full pl-10'>Welcome to Uber</h3>
				<span className=' text-gray-600 text-left w-full pl-10'>Sign up with your information.</span>
				<div className='flex flex-col mt-5 px-20 '>
					{state?.message !== undefined ? <span className='bg-green-600 span'>{state?.message}</span> : null}
					{state?.error !== undefined ? <ErrorSpan message={state?.error} /> : null}
					{errors?.email?.message && <ErrorSpan message={errors?.email?.message} />}
					{errors?.password?.message && <ErrorSpan message={errors?.password?.message} />}
				</div>
				<form className='flex flex-col w-full mt-5 px-10' onSubmit={handleSubmit(onValidSubmit)}>
					<input className='input mb-3' {...register('email', emailRegister)} type='text' placeholder='Email' onKeyDown={clearEmailErrors} />
					<input className='input mb-3' {...register('password', passwordRegister)} type='password' placeholder='Password' onKeyDown={clearLoginErrors} />
					<select className='input mb-3' {...register('role', roleRegister)} onKeyDown={clearRoleErrors}>
						{Object.keys(UserRole).map((role, key) => (
							<option key={key} value={role}>
								{role}
							</option>
						))}
					</select>
					<button className={!isValid ? 'bg-gray-300 btn mt-5' : 'btn mt-5'} type='submit' disabled={!isValid || loading}>
						{loading ? 'Loading...' : 'Sign Up'}
					</button>
				</form>
				<div className='mt-5'>
					<span className=' font-medium'>Have an account?</span>
					<Link className='pl-2 text-green-600 font-medium' to={'/auth/login'}>
						Log In
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
