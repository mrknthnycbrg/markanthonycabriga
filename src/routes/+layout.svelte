<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>{$page.data?.seo?.title || 'Mark Anthony Cabriga'}</title>
	<meta
		name="description"
		content={$page.data?.seo?.content ||
			'A Laravel developer creating efficient and innovative web solutions with Laravel.'}
	/>
</svelte:head>

<div class="flex min-h-screen flex-col bg-base-100 font-sans antialiased">
	<Navbar />
	<div class="mx-auto w-full max-w-7xl flex-1 p-6">
		<slot />
	</div>
	<Footer />
</div>
