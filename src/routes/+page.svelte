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
				src="/images/Cabriga, MA.jpg"
				class="aspect-square max-h-80 max-w-full rounded-md object-cover"
				alt="Mark Anthony Cabriga"
			/>
			<div>
				<h1>Hi! I'm Mark Anthony Cabriga, a Laravel developer.</h1>
				<p>Creating efficient and innovative web solutions with Laravel.</p>
				<a href="/files/Cabriga, MA - CV.pdf" class="btn btn-primary text-base" download>
					Download CV
				</a>
			</div>
		</div>
	</div>
</div>
