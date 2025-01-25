<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<div
	class="prose max-w-none"
	transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'y' }}
>
	<div class="hero">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<img
				src="/images/profile.jpg"
				class="aspect-square max-h-80 max-w-full rounded-sm object-cover"
				alt="Mark Anthony Cabriga"
			/>
			<div>
				<h1>Hi! I'm Mark Anthony Cabriga, a web developer.</h1>
				<p>Creating efficient and innovative web solutions.</p>
			</div>
		</div>
	</div>
</div>
