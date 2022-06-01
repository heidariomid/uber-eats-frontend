import {gql, useMutation} from '@apollo/client';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {VALIDATE_EMAIL} from '../../graphql/mutations';
import {ValidateEmailMutation, ValidateEmailMutationVariables} from '../../graphql/schemaTypes';
import useUser from '../../hooks/useUser';
import Spinner from '../../images/Spinner-s.svg';
const Confirm = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [serverMessage, setServerMessage] = useState('');

	const {user, refetch} = useUser();

	const update = (cache, result) => {
		try {
			const {ok, message} = result.data?.validateEmail;

			if (!ok) {
				setServerMessage(message);
				setIsLoading(false);
			}
			if (ok && user) {
				console.log({ok, message});
				console.log(user?.id);
				cache.modify({
					id: `User:${user?.id}`,
					fields: {
						verified() {
							return true;
						},
					},
				});
				navigate('/');
			} else {
				setServerMessage(message);
				setIsLoading(false);
				cache.modify({
					id: `User:${user?.id}`,
					fields: {
						verified() {
							return true;
						},
					},
				});
				console.log(user?.id);
				navigate('/');
			}
		} catch (err: any) {
			setIsLoading(false);
			setServerMessage(err?.message);
		}
	};

	let navigate = useNavigate();

	const [validateEmailHandler] = useMutation<ValidateEmailMutation, ValidateEmailMutationVariables>(VALIDATE_EMAIL, {update});
	useEffect(() => {
		const [_, code] = window.location.href.split('code=');
		validateEmailHandler({variables: {data: {code}}});
	}, []);

	return (
		<div className='h-screen flex flex-col items-center justify-center'>
			{isLoading && (
				<>
					<h1 className='text-3xl font-bold'>Verifiying</h1>
					<img className='m-4' src={Spinner} alt='spinner' />
					<h6 className='font-bold'>please do not close this page</h6>
				</>
			)}
			{serverMessage && <span className='bg-red-600 text-white px-4 span'>{serverMessage}</span>}
		</div>
	);
};

export default Confirm;
