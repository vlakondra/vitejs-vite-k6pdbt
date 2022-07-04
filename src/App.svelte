<script>
  import viteLogo from "/vite.svg";
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main class="kv-container ">
  <div>
    <a href="https://vitejs.dev" target="_blank"
      ><img src={viteLogo} class="logo" alt="Vite Logo" /></a
    ><a href="https://svelte.dev" target="_blank"
      ><img src={svelteLogo} class="logo svelte" alt="Svelte Logo" /></a
    >
  </div>
  <h1>Vite+Svelte</h1>
  <div class="card"><Counter /></div>
  <button class='button is-info'>Клавиша</button>
  <p class="testic">
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank"
      >SvelteKit</a
    >, the official Svelte app framework powered by Vite !
  </p>
  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style lang="scss">
  .testic{
    color:darker($yellow,50);
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .read-the-docs {
    color: $black;
    background-color: $colora;
  }

  .kv-container {
    max-width: 960px !important;
    background-color: #dedede;
    height: 100vh;
  }
</style>
