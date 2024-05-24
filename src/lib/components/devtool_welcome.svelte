<script>
  import { onMount } from 'svelte';
  import { Routes } from '$lib/config';
  
  let countdown = 20;

  // Function to handle the countdown and redirect
  onMount(() => {
    const interval = setInterval(() => {
      countdown -= 1;
      if (countdown === 0) {
        clearInterval(interval);
        navigateToIDE();
      }
    }, 1000);
  });

  function navigateToIDE() {
    window.location.href = Routes.IDE;
  }
</script>

<main class="container">
  <h1>Welcome to Tauri!</h1>
  <div class="timer">Redirecting in {countdown} seconds...</div>
  <div class="row">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo vite" alt="Vite Logo" />
    </a>
    <a href="https://tauri.app" target="_blank">
      <img src="/tauri.svg" class="logo tauri" alt="Tauri Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src="/svelte.svg" class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href={Routes.IDE}> 
      <img src="/Icon.png" class="logo myIDE" alt="Logo"> 
    </a>
  </div> 

  <p>
    Click on the Tauri, Vite, and Svelte logos to learn more.
  </p>
  
  <div class="row">
    <!-- Any other components or elements you want to include -->
  </div>
</main>

<style>
  .container {
    position: relative;
    padding: 20px;
  }

  .timer {
    position: fixed;
    top: 10px;
    left: 10px;
    background-color: #333;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    z-index: 1000;
  }

  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .logo {
    max-width: 150px;
    margin: 10px;
  }

  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00);
  }
</style>
