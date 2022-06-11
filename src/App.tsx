import {useReactiveVar} from '@apollo/client';
import {isDarkVar} from './apollo/GlobalVar';
import Routes from './routes';

const App = () => {
	const isDark = useReactiveVar(isDarkVar);
	return (
		<div className={` ${isDark && 'bg-black text-white'}`}>
			<Routes />
		</div>
	);
};

export default App;
