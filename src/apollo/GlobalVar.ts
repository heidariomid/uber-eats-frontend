import {makeVar} from '@apollo/client';

export const isLoginVar = makeVar(false);
export const authToken = makeVar<string | null>(null);
export const basketItemVar = makeVar<unknown>(null);
export const isBasketItemVar = makeVar(false);
export const isDarkVar = makeVar(false);

export function hydrateBrowserState() {
	const token = localStorage.getItem('token');
	authToken(token);
	isLoginVar(Boolean(token));
	isDarkVar(Boolean(localStorage.getItem('dark')));
	const basket = JSON.parse(sessionStorage.getItem('basket') || 'null');
	basketItemVar(basket);
	isBasketItemVar(Boolean(basket));
}
