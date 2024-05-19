<script>
	import { Routes } from '$lib/config';
	import Greet from '$lib/components/Greet.svelte';
	import Devtool_welcome from '$lib/components/devtool_welcome.svelte';
</script>


<div class="spacer"></div>
<a href={Routes.IDE}>See devtools</a>
<Devtool_welcome />
<!-- <div class="spacer"></div> -->
<a href={Routes.IDE}>Go to IDE</a>
<Greet />

<style>
	/* Style the spacer div to create artificial whitespace */
	.spacer {
		height: 50px; /* Adjust this value to control the amount of whitespace */
		/* background-color: lightgray;  */
	}
</style>