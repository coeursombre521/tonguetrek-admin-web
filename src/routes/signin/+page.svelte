<script>
  import SignInCard from "$lib/components/SignInCard.svelte";
</script>

<main>
  <div class="signin-container">
    <SignInCard />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  .signin-container {
    width: 60%;
  }
</style>