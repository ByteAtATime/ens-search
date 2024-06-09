<script lang="ts">
	import DomainCard from './_components/DomainCard.svelte';

	export let data;

	const {domains} = data;
</script>

<main class="flex items-center justify-center min-h-screen">
<div class="flex flex-col gap-y-8 max-w-lg w-full">
	{#each domains as domain}
		<DomainCard {domain} />
	{/each}
</div>
</main>