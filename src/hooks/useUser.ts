import {makeVar, useQuery, useReactiveVar} from '@apollo/client';
import {SetStateAction, useEffect, useState} from 'react';
import {userLoggedOut} from '../apollo';
import {isLoginVar} from '../apollo/GlobalVar';
import {LOGGED_IN_USER} from '../graphql/queries';
import {LoggedInUserQuery} from '../graphql/schemaTypes';

const useUser = () => {
	const isLoggedIn = useReactiveVar(isLoginVar);

	const {data, error, loading} = useQuery<LoggedInUserQuery>(LOGGED_IN_USER, {skip: !isLoggedIn});

	return {data, error, loading};
};

export default useUser;
