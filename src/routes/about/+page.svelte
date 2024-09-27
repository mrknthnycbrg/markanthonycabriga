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
		I'm a Laravel developer dedicated to creating efficient and innovative web solutions. I
		specialize in different languages, leveraging various frameworks, databases, and development
		tools to deliver high-quality results. Currently, I'm working as an Associate Web Developer at
		OpeniT Asia, Inc. - Philippine Branch.
	</p>
	<h2>Skills</h2>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Languages</h2>
				<p>PHP, CSS, HTML, SQL</p>
			</div>
		</div>
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Frameworks</h2>
				<p>Laravel, Livewire, FilamentPHP, Tailwind CSS</p>
			</div>
		</div>
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Databases</h2>
				<p>SQLite, MySQL</p>
			</div>
		</div>
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Development Tools</h2>
				<p>Github, Git</p>
			</div>
		</div>
	</div>
</div>
