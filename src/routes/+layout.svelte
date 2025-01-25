<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>{page.data.seo.title || 'Mark Anthony Cabriga'}</title>
	<meta
		name="description"
		content={page.data.seo.content ||
			'A web developer creating efficient and innovative web solutions.'}
	/>
</svelte:head>

<div class="flex min-h-screen flex-col bg-base-100 font-sans antialiased">
	<Navbar />
	<div class="mx-auto w-full max-w-7xl flex-1 p-6">
		{@render children()}
	</div>
	<Footer />
</div>
