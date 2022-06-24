import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {ApolloProvider} from '@apollo/client';
import {client} from './apollo';
import {StateProvider} from './store/context/ContextManager';
import store from './store/redux';
import {Provider} from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>
		<ApolloProvider client={client}>
			<Router>
				{/* <Provider store={store}> */}
				<StateProvider>
					<App />
				</StateProvider>
				{/* </Provider> */}
			</Router>
		</ApolloProvider>
	</>,
);

reportWebVitals();
