import {useReactiveVar} from '@apollo/client';
import {isDarkVar, isLoginVar} from './apollo/GlobalVar';
import Header from './components/header/Header';
import Basket from './components/restaurant/Basket';
import Routes from './routes';
import {useStateValue} from './store/context/ContextManager';

const App = () => {
	const isDark = useReactiveVar(isDarkVar);
	const isLoggedIn = useReactiveVar(isLoginVar);
	const [state] = useStateValue();
	return (
		<div className={`h-full ${isDark && 'bg-black text-white'}`}>
			{isLoggedIn && <Header />}
			{isLoggedIn && state.basket.status && <Basket />}
			<Routes />
		</div>
	);
};

export default App;
