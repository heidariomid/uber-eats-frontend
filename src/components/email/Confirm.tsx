import {gql, useApolloClient, useMutation} from '@apollo/client';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {VALIDATE_EMAIL} from '../../graphql/mutations';
import {ValidateEmailMutation, ValidateEmailMutationVariables} from '../../graphql/schemaTypes';
import useUser from '../../hooks/useUser';
import Spinner from '../../images/Spinner-s.svg';
const Confirm = () => {
	const [isMessage, setIsMessage] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const {user} = useUser();
	const client = useApolloClient();
	let navigate = useNavigate();
	const onCompleted = (data: ValidateEmailMutation) => {
		const {ok, message} = data?.validateEmail;

		if (ok) {
			setIsLoading(true);
			client.writeFragment({
				id: `User:${user?.id}`,
				fragment: gql`
					fragment BSName on User {
						verified
					}
				`,
				data: {verified: true},
			});
			navigate('/');
		} else {
			if (message) {
				setIsMessage(message);
				setIsLoading(false);
			}
		}
	};
	const [validateEmailHandler, {loading}] = useMutation<ValidateEmailMutation, ValidateEmailMutationVariables>(VALIDATE_EMAIL, {onCompleted});
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
			{isMessage && <h6 className='font-bold bg-red-600 text-white p-4'>{isMessage}</h6>}
		</div>
	);
};

export default Confirm;
