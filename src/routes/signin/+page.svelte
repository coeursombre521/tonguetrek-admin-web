<!-- src/routes/signin.svelte -->
<script>
  import { page } from '$app/stores';
  import { writable } from 'svelte/store';

  let username = '';
  let password = '';
  let error = writable('');

  const handleSignIn = async () => {
      try {
      // Dummy sign-in logic
      if (username === 'user' && password === 'pass') {
          const token = 'dummy-token'; // In real case, you'd get this from your backend
          localStorage.setItem('authToken', token);
          $error = '';
          // Redirect to home page after successful sign-in
          page.set({ url: '/' });
      } else {
          throw new Error('Invalid credentials');
      }
      } catch (e) {
      $error = e.message;
      }
  };
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