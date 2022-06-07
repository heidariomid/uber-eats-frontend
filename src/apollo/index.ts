import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {isDarkVar, isLoginVar} from './GlobalVar';

// const uri=process.env.NODE_ENV==='development'?'http://localhost:4000/graphql':'https://apollo-server-graphql.herokuapp.com/graphql';
const httpLink = createHttpLink({
	// uri: 'https://aqueous-reef-59013.herokuapp.com/graphql',
	uri: 'http://localhost:4000/graphql',
});
const authLink = setContext((_, {headers}) => {
	const token = localStorage.getItem('token');
	return {
		headers: {
			...headers,
			authorization: token ? token : '',
		},
	};
});

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
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

	window.location.reload();
	return isLoginVar(false);
};
export const themeHandler = (currentTheme: any) => {
	console.log(currentTheme);
	if (!currentTheme) {
		localStorage.setItem('dark', 'true');
	}
	if (currentTheme) {
		localStorage.removeItem('dark');
	}

	return isDarkVar(!currentTheme);
};
