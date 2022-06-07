import {ApolloProvider, useReactiveVar} from '@apollo/client';
import {client} from './apollo';
import {isDarkVar} from './apollo/GlobalVar';
import Router from './routes';

const App = () => {
	const isDark = useReactiveVar(isDarkVar);
	return (
		<div className={` ${isDark && 'bg-black text-white'}`}>
			<ApolloProvider client={client}>
				<Router />
			</ApolloProvider>
		</div>
	);
};

export default App;
