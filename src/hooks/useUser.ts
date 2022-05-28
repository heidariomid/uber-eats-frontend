import {useQuery} from '@apollo/client';
import {LOGGED_IN_USER} from '../graphql/queries';
import {LoggedInUserQuery} from '../graphql/schemaTypes';

const useUser = () => {
	const {data, error, loading} = useQuery<LoggedInUserQuery>(LOGGED_IN_USER);
	if (!data || loading || error) return {data, loading, error};

	return {user: data.loggedInUser, error, loading};
};

export default useUser;
