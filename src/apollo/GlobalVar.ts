import {makeVar} from '@apollo/client';
const token = localStorage.getItem('token');
export const isLoginVar = makeVar(Boolean(token));

export const authToken = makeVar(token);
export const isDarkVar = makeVar(Boolean(localStorage.getItem('dark')));
