<script lang="ts">
  import { createSignInViewModel } from '$lib/viewModels/SignInViewModel';
  import Button, { Label } from '@smui/button';
  import Card, {
    Actions,
    Content,
  } from '@smui/card';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import { onMount } from 'svelte';

  const viewModel = createSignInViewModel()
  const {
    emailStore,
    passwordStore,
    signInResponseStore,
    handleSignIn
  } = viewModel
</script>

<div class="card-container">
  <Card>
    <div style="padding: 1rem;">
      <h1 class="mdc-typography--headline4" style="margin: 0; margin-bottom: 8pt;">
        Sign in
      </h1>
      <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">
        Sign in with your manager or superuser account to continue
      </h3>
    </div>
    <form on:submit|preventDefault={handleSignIn}>
      <Content>
        <div class="signin-form">
          <div>
            <Textfield
              style="width: 100%;"
              helperLine$style="width: 100%;"
              variant="outlined"
              bind:value={$emailStore}
              label="Email address"
            >
              <HelperText slot="helper">Your email address</HelperText>
            </Textfield>
          </div>
          <div>
            <Textfield
              style="width: 100%;"
              helperLine$style="width: 100%;"
              variant="outlined"
              bind:value={$passwordStore}
              label="Password"
            >
              <HelperText slot="helper">Your password</HelperText>
            </Textfield>
          </div>
          <div>
            Forgot your credentials? <a href="#top">Recover your account</a>
          </div>
        </div>
      </Content>
      <Actions fullBleed>
        <Button type="submit">
          <Label>Sign in</Label>
          <i class="material-icons" aria-hidden="true">arrow_forward</i>
        </Button>
      </Actions>
    </form>
  </Card>
</div>

<style>
  .signin-form {
    display: flex;
    gap: 8pt;
    flex-direction: column;
  }
</style>