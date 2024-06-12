<!-- src/routes/signin.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import type { AuthResult, LoginData } from '$lib/interfaces/api/login';
  import { login } from '$lib/services/authService';
  import { authAccessToken, authRefreshToken } from '$lib/services/authStoreService';
  import { writable } from 'svelte/store';

  let username = '';
  let password = '';
  let error = writable('');

  const handleSignIn = async () => {
    try {
      const data: LoginData = { username, password }
      const response: AuthResult = await login(data);

      authAccessToken.set(response.accessToken);
      authRefreshToken.set(response.refreshToken);

      $error = '';

      goto('/');
    }
    catch (e: any) {
      $error = e.message;
    }
  }

</script>
  
<main>
  <h1>Sign In</h1>
  {#if $error}
    <p style="color: red;">{$error}</p>
  {/if}
  <form on:submit|preventDefault={handleSignIn}>
    <label>
      Username:
      <input type="text" bind:value={username} />
    </label>
    <br />
    <label>
      Password:
      <input type="password" bind:value={password} />
    </label>
    <br />
    <button type="submit">Sign In</button>
  </form>
</main>

<style>
  /* Add your styles here */
</style>