import {useMutation} from '@apollo/client';
import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import {EditUserProfileMutation, EditUserProfileMutationVariables, UpdateUserInput} from '../../graphql/schemaTypes';
import useUser from '../../hooks/useUser';
import {EDIT_USER_PROFILE} from '../../graphql/mutations';
import ErrorSpan from '../custom/ErrorSpan';
import Header from '../header/Header';

const EditProfile = () => {
	let navigate = useNavigate();
	const {user} = useUser();
	const {
		register,
		getValues,
		formState: {errors, isValid},
		handleSubmit,
		setError,
		clearErrors,
	} = useForm<UpdateUserInput>({
		mode: 'onChange',
		defaultValues: {
			email: user?.email,
			role: user?.role,
		},
	});

	const onCompleted = (data: EditUserProfileMutation) => {
		const {ok, message} = data?.updateUser;
		if (!ok) {
			setError('email', {message});
			setError('password', {message});
		}
		if (ok) {
			navigate('/', {replace: true, state: {message}});
		}
	};
	const [loginHandler, {loading}] = useMutation<EditUserProfileMutation, EditUserProfileMutationVariables>(EDIT_USER_PROFILE, {onCompleted});

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
		<>
			<Header />
			<div className='container flex flex-col h-screen items-center justify-center '>
				<div className='w-full max-w-screen-sm flex flex-col items-center py-10 px-5 text-center '>
					<h3 className='font-bold text-lg text-gray-800 text-left w-full pl-10'>Update Your Profile</h3>
					<div className='flex flex-col mt-5 px-20 '>
						{errors.email?.type === 'validate' && <ErrorSpan message={'email must include @'} />}
						{errors?.email?.message && <ErrorSpan message={errors?.email?.message} />}
						{errors?.password?.message && <ErrorSpan message={errors?.password?.message} />}
					</div>
					<form className='flex flex-col w-full mt-5 px-10' onSubmit={handleSubmit(onValidSubmit)}>
						<input className='input mb-3' {...register('email', emailRegister)} type='text' placeholder='Email' onKeyDown={clearEmailErrors} />
						<input className='input mb-3' {...register('password', passwordRegister)} type='password' placeholder='Password' onKeyDown={clearLoginErrors} />
						<button className={!isValid ? 'bg-gray-300 btn' : 'btn'} type='submit' disabled={!isValid || loading}>
							{loading ? 'Loading...' : 'Update Profile'}
						</button>
					</form>
					<div className='mt-5'>
						<span className=' font-medium'>Go Back?</span>
						<Link className='pl-2 text-lime-600 font-medium hover:underline' to={'/'}>
							Click here
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditProfile;
