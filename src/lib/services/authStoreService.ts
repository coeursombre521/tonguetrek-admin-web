import { writable } from 'svelte/store';

export const AUTH_ACCESS_TOKEN_KEY = 'authAccessToken';
export const AUTH_REFRESH_TOKEN_KEY = 'authRefreshToken';

export const authAccessToken = writable(localStorage.getItem(AUTH_ACCESS_TOKEN_KEY));
export const authRefreshToken = writable(localStorage.getItem(AUTH_REFRESH_TOKEN_KEY));

authAccessToken.subscribe((value) => {
  if (value) {
    localStorage.setItem(AUTH_ACCESS_TOKEN_KEY, value);
  } else {
    localStorage.removeItem(AUTH_ACCESS_TOKEN_KEY);
  }
});

authRefreshToken.subscribe((value) => {
  if (value) {
    localStorage.setItem(AUTH_REFRESH_TOKEN_KEY, value);
  } else {
    localStorage.removeItem(AUTH_REFRESH_TOKEN_KEY);
  }
});

export const signOut = () => {
  authAccessToken.set(null);
  authRefreshToken.set(null);
};