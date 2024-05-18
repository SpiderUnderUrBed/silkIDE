<script>
    import { onMount } from 'svelte';
  
    function navigateToIDE() {
    //   window.location.href = "/test.html";
    }
  </script>
  
  <main class="container">
    <h1>Welcome to Tauri!</h1>
  
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
      <button on:click={navigateToIDE}>
        <img src="/Icon.png" class="logo my IDE" alt="Logo"> 
      </button>
    </div> 
  
    <p>
      Click on the Tauri, Vite, and Svelte logos to learn more.
    </p>
    $lib/components
    <div class="row">
      <!-- Any other components or elements you want to include -->
    </div>
  </main>
  
  <style>
    .logo.vite:hover {
      filter: drop-shadow(0 0 2em #747bff);
    }
  
    .logo.svelte:hover {
      filter: drop-shadow(0 0 2em #ff3e00);
    }
  </style>