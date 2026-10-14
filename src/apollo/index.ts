import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from '@apollo/client';
import {SetContextLink} from '@apollo/client/link/context';
import {GraphQLWsLink} from '@apollo/client/link/subscriptions';
import {getMainDefinition} from '@apollo/client/utilities';
import {createClient} from 'graphql-ws';
import {authToken, isDarkVar, isLoginVar} from './GlobalVar';

const url = process.env.NEXT_PUBLIC_GRAPHQL_WS_URL || 'ws://localhost:4000/graphql';
const wsLink = new GraphQLWsLink(
	createClient({
		url,
		connectionParams: () => ({
			authToken: authToken(),
		}),
	}),
);
const uri = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:4000/graphql';
const httpLink = new HttpLink({
	uri,
});
const cleanTypeName = new ApolloLink((operation, forward) => {
	if (operation.variables) {
		const omitTypename = (key, value) => (key === '__typename' ? undefined : value);
		operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
	}
	return forward(operation);
});
const httpLinkWithErrorHandling = ApolloLink.from([cleanTypeName, httpLink]);
const authLink = new SetContextLink((prevContext) => {
	const token = typeof window === 'undefined' ? null : localStorage.getItem('token');
	return {
		headers: {
			...prevContext.headers,
			authorization: token ? token : '',
		},
	};
});
const splitLink = ApolloLink.split(
	({query}) => {
		const definition = getMainDefinition(query);
		return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
	},
	wsLink,
	authLink.concat(httpLinkWithErrorHandling),
);
export const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache({
		typePolicies: {
			User: {
				keyFields: (obj) => `User:${obj.id}`,
			},
		},
	}),
});

export const userLoggedOut = () => {
	localStorage.removeItem('token');
	sessionStorage.removeItem('basket');
	window.location.replace('/auth/login');
	isLoginVar(false);
};
export const themeHandler = (currentTheme: boolean) => {
	if (!currentTheme) {
		localStorage.setItem('dark', 'true');
	}
	if (currentTheme) {
		localStorage.removeItem('dark');
	}

	return isDarkVar(!currentTheme);
};
