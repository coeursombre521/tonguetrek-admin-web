import { writable, type Writable } from 'svelte/store';

import type { IViewModel } from './IViewModel';
import { SignInModel, type SignInResponse } from '$lib/models/SignInModel';
import type { ApiExceptionResponse } from '$lib/models/ApiExceptionResponse';
import { ESuccess, type EndpointResult } from '$lib/models/EndpointResult';

export function createSignInViewModel() {
  const emailStore = writable('')
  const passwordStore = writable('')
  const signInResponseStore: Writable<EndpointResult<SignInResponse> | null> = writable(null);

  const handleSignIn = async () => {
    let emailValue: string = "";
    let passwordValue: string = "";

    emailStore.subscribe((value) => (emailValue = value));
    passwordStore.subscribe((value) => (passwordValue = value));
    
    const response = await SignInModel.signIn(emailValue, passwordValue)
    signInResponseStore.set(response)
  
    console.log(response.body)
  }

  return {
    emailStore,
    passwordStore,
    signInResponseStore,

    handleSignIn
  }
}