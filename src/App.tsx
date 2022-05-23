import {ApolloProvider} from '@apollo/client';
import {client} from './apollo';
import Router from './routes';

const App = () => {
	return (
		<>
			<ApolloProvider client={client}>
				<Router />
			</ApolloProvider>
		</>
	);
};

export default App;
