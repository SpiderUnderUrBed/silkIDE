<script>
	import { Routes } from '$lib/config';
	import Greet from '$lib/components/Greet.svelte';
	import Devtool_welcome from "$lib/components/devtool_welcome.svelte"
</script>

<a href={Routes.Test}>See devtools</a>
<Devtool_welcome />
<a href={Routes.IDE}>Go to IDE</a>
<Greet />
