'use client';

import {useReactiveVar} from '@apollo/client/react';
import {usePathname} from 'next/navigation';
import {isDarkVar} from './apollo/GlobalVar';
import Header from './components/header/Header';
import Basket from './components/shopping-cart/Basket';
import {useStateValue} from './store/context/ContextManager';

const App = ({children}: {children: React.ReactNode}) => {
	const isDark = useReactiveVar(isDarkVar);
	const [state] = useStateValue();
	const pathname = usePathname();
	const checkPath =
		pathname === '/payment/pending' ||
		pathname === '/payment/verify/:reserve' ||
		pathname === '/auth/login' ||
		pathname === '/auth/signup';
	return (
		<div className={`h-full ${isDark && 'bg-black text-white'}`}>
			{!checkPath && <Header />}
			{state.basket.status && <Basket />}
			{children}
		</div>
	);
};

export default App;
