<script lang="ts">
	import { getEnsUrl } from '$lib/url';
	import Fa from 'svelte-fa';
	import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

	export let domain: string;

	const urlPromise = getEnsUrl(domain);

	let url: string | null | undefined = undefined;

	urlPromise.then((value) => {
		url = value;
	});

	const ensUrl = `https://app.ens.domains/${domain}`;
</script>

<a href={url === null ? ensUrl : url} target="_blank">
	<div class="bg-blue-50 flex items-center px-6 py-4 rounded-2xl">
		<div class="flex-grow">
			<h2 class="font-bold text-xl">{domain}</h2>

			<p class="truncate max-w-xs text-gray-500">
				{#if url === undefined}
					Loading...
				{:else if url === null}
					Website not found (view on ENS)
				{:else}
					{url}
				{/if}
			</p>
		</div>

		<div>
			{#if url !== undefined}
				<Fa icon={faExternalLinkAlt} />
			{/if}
		</div>
	</div>
</a>
