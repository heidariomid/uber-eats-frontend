'use client';

import {ApolloProvider} from '@apollo/client/react';
import {useSyncExternalStore} from 'react';
import {client} from '../apollo';
import {hydrateBrowserState} from '../apollo/GlobalVar';
import {StateProvider} from '../store/context/ContextManager';

function subscribe() {
	return () => {};
}

let hydrated = false;

function clientReady() {
	if (!hydrated) {
		hydrated = true;
		hydrateBrowserState();
	}
	return true;
}

function serverReady() {
	return false;
}

export default function Providers({children}: {children: React.ReactNode}) {
	const ready = useSyncExternalStore(subscribe, clientReady, serverReady);

	return (
		<ApolloProvider client={client}>
			<StateProvider>{ready ? children : null}</StateProvider>
		</ApolloProvider>
	);
}
