import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const AUTH_ACCESS_TOKEN_KEY = 'authAccessToken';
export const AUTH_REFRESH_TOKEN_KEY = 'authRefreshToken';

let authAccessTokenStored: string | null = null
let authRefreshTokenStored: string | null = null

if (browser) {
  authAccessTokenStored = localStorage[AUTH_ACCESS_TOKEN_KEY]
  authRefreshTokenStored = localStorage[AUTH_REFRESH_TOKEN_KEY]
}

export const authAccessToken = writable(authAccessTokenStored);
export const authRefreshToken = writable(authRefreshTokenStored);

authAccessToken.subscribe((value) => {
  if (value) {
    if (browser) {
      localStorage[AUTH_ACCESS_TOKEN_KEY] = value;
    }
  } else {
    if (browser) {
      localStorage.removeItem(AUTH_ACCESS_TOKEN_KEY);
    }
  }
});

authRefreshToken.subscribe((value) => {
  if (value) {
    if (browser) {
      localStorage[AUTH_REFRESH_TOKEN_KEY] = value;
    }
  } else {
    if (browser) {
      localStorage.removeItem(AUTH_REFRESH_TOKEN_KEY);
    }
  }
});

export const signOut = () => {
  authAccessToken.set(null);
  authRefreshToken.set(null);
};