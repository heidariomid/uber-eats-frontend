'use client';

import {usePathname, useRouter} from 'next/navigation';

export type RouteState = {
	message?: string;
	error?: string;
	email?: string;
	password?: string;
	path?: string;
	orderId?: number;
};

type GoOptions = {
	replace?: boolean;
	state?: RouteState;
};

const routeState = new Map<string, RouteState>();

function pathnameOf(href: string) {
	const path = href.split('?')[0].split('#')[0];
	return path.length > 0 ? path : '/';
}

export function useGo() {
	const router = useRouter();
	return (href: string, options?: GoOptions) => {
		if (options && Object.prototype.hasOwnProperty.call(options, 'state')) {
			routeState.set(pathnameOf(href), options.state ?? {});
		}
		if (options?.replace) {
			router.replace(href);
			return;
		}
		router.push(href);
	};
}

export function useRouteState(): RouteState {
	const pathname = usePathname();
	return routeState.get(pathname) as RouteState;
}
