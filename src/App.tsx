import {useReactiveVar} from '@apollo/client';
import {Navigate} from 'react-router-dom';
import {isDarkVar, isLoginVar} from './apollo/GlobalVar';
import Header from './components/header/Header';
import Routes from './routes';

const App = () => {
	const isDark = useReactiveVar(isDarkVar);
	const isLoggedIn = useReactiveVar(isLoginVar);

	return (
		<div className={` ${isDark && 'bg-black text-white'}`}>
			{isLoggedIn && <Header />}
			<Routes />
		</div>
	);
};

export default App;
