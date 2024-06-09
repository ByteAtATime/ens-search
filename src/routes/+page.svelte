<script lang="ts">
	import firefox01 from '$lib/assets/firefox-01.png';
	import firefox02 from '$lib/assets/firefox-02.png';

	import brave01 from '$lib/assets/brave-01.png';
	import brave02 from '$lib/assets/brave-02.png';
</script>

<main class="max-w-screen-sm mx-auto prose">
	<h1 class="mb-0">ENS Search</h1>

	<p class="mt-0">Search any ENS domain using your browser!</p>

	<p>
		To get started, you need to add a custom search engine to your browser. Below are instructions for Firefox and Brave.
	</p>

	<details>
		<summary class="font-bold text-2xl">Firefox</summary>

		<p>
			To get started, simply right click on the address bar and select <strong>Add "Search"</strong>.
		</p>

		<img alt="Address bar right-click menu" class="mx-auto" src={firefox01} />

		<p>
			Optionally, you can assign a keyword to the search engine. For example, you can use <strong>ens</strong> as a
			keyword.
		</p>

		<p>
			To do this, navigate to <a href="about:preferences#search"><strong>about:preferences#search</strong></a> and scroll down to <strong>Search
			Shortcuts</strong>. Here, you should be able to find the search engine you just added. When you double-click on
			it, you can assign a keyword.
		</p>

		<img alt="Firefox" class="mx-auto" src={firefox02} />

		<p>
			This way, when you want to search, simply type your keyword followed by the domain you want to search.
		</p>
	</details>

	<details>
		<summary class="font-bold text-2xl">Brave</summary>

		<p>
			Navigate to <a href="brave://settings/searchEngines"><strong>brave://settings/searchEngines</strong></a> and scroll down to <strong>Site search</strong>. You should see a list of search engines, similar to the following:
		</p>

		<img alt="Brave" class="mx-auto" src={brave01} />

		<p>
			Click on <strong>Add</strong> and fill in the form with the following details:
		</p>

		<ul>
			<li><strong>Search engine:</strong> ENS (suggested)</li>
			<li><strong>Keyword:</strong> :ens (suggested)</li>
			<li><strong>URL:</strong> https://ens.byteatatime.dev/search?q=%s</li>
		</ul>

		<p>
			The keyword is optional, but it makes it easier to search. This way, when you want to search, simply type your keyword followed by the domain you want to search. Your final form should look like this:
		</p>

		<img alt="Brave" class="mx-auto" src={brave02} />

		<p>
			Then click <strong>Add</strong>, and that's it! You can now search any ENS domain using your browser.
		</p>
	</details>

	<h2 class="mt-6">Usage</h2>

	<p>
		The most basic usage is to type the domain you want to search in the address bar. For example, if you type "<strong>vitalik.eth</strong>", you will be redirected to Vitalik Buterin's website.
	</p>

	<p>
		If you'd prefer, you can view the domain on the website (instead of getting redirected) by typing a "minus" after the domain. For example, "<strong>vitalik.eth-</strong>" doesn't redirect you to his website. This applies by default to domains that don't have a URL associated with them, although adding the minus suffix skips the test for a URL.
	</p>

	<p>
		To look up multiple domains at once, you can separate them with a space. For example, "<strong>vitalik.eth austingriffith.eth</strong>" will show the results for both domains.
	</p>
</main>
