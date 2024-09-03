<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<div
	class="prose max-w-none"
	transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'y' }}
>
	<h1>About</h1>
	<p>
		I'm a fresh BSIT graduate passionate about developing web applications with Laravel. I focus on
		creating efficient and scalable solutions using my skills in PHP, CSS, HTML, and SQL. My
		expertise extends to working with various frameworks, databases, and development tools to
		deliver high-quality results.
	</p>
	<h2>Skills</h2>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
		<div class="card w-full border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Languages</h2>
				<p>PHP, CSS, HTML, SQL</p>
			</div>
		</div>
		<div class="card w-full border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Frameworks</h2>
				<p>Laravel, Livewire, FilamentPHP, Tailwind CSS</p>
			</div>
		</div>
		<div class="card w-full border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Databases</h2>
				<p>SQLite, MySQL</p>
			</div>
		</div>
		<div class="card w-full border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Development Tools</h2>
				<p>Github, Git</p>
			</div>
		</div>
	</div>
</div>
