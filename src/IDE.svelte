<script>
    import { onMount } from 'svelte';
  
    function navigateToIDE() {
      window.location.href = "./App.svelte";
    }
  </script>

<main class="container">
    <h1>Hello</h1>
    <button on:click={navigateToIDE}>
      <img src="/Icon.png" class="logo my IDE" alt="Logo"> 
    </button>
</main>


  