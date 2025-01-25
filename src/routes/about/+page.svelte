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
		I'm a web developer dedicated to creating efficient and innovative web solutions. I specialize
		in different languages, leveraging various frameworks, databases, and development tools to
		deliver high-quality results.
	</p>
	<h2>Experience</h2>
	<div class="card card-bordered w-full bg-base-100">
		<div class="card-body">
			<ul class="timeline timeline-vertical timeline-compact timeline-snap-icon">
				<li>
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="size-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end">
						<time>September 2024 - Present</time>
						<h3>Associate Web Developer</h3>
						<p>OpeniT Asia, Inc. - Philippine Branch</p>
					</div>
					<hr />
				</li>
			</ul>
		</div>
	</div>
	<h2>Skills</h2>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h3 class="card-title">Languages</h3>
				<p>CSS, HTML, PHP, SQL</p>
			</div>
		</div>
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h3 class="card-title">Frameworks</h3>
				<p>FilamentPHP, Laravel, Livewire, Tailwind CSS</p>
			</div>
		</div>
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h3 class="card-title">Databases</h3>
				<p>MySQL, SQLite</p>
			</div>
		</div>
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h3 class="card-title">Development Tools</h3>
				<p>Git, GitHub</p>
			</div>
		</div>
	</div>
</div>
