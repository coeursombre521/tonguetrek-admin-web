<script lang="ts">
  import { _ } from 'svelte-i18n';

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
        {$_('sign_in_title')}
      </h1>
      <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">
        {$_('sign_in_description')}
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
              label="{$_('sign_in_email_address_field')}"
            >
              <HelperText slot="helper">{$_('sign_in_email_address_helper')}</HelperText>
            </Textfield>
          </div>
          <div>
            <Textfield
              style="width: 100%;"
              helperLine$style="width: 100%;"
              variant="outlined"
              bind:value={$passwordStore}
              label="{$_('sign_in_password_field')}"
            >
              <HelperText slot="helper">{$_('sign_in_password_helper')}</HelperText>
            </Textfield>
          </div>
          <div>
            {$_('sign_in_recover_1')} <a href="#top">{$_('sign_in_recover_2')}</a>
          </div>
        </div>
      </Content>
      <Actions fullBleed>
        <Button type="submit">
          <Label>{$_('sign_in_title')}</Label>
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