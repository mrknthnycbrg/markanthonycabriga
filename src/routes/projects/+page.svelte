<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<div
	class="prose max-w-none"
	transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'y' }}
>
	<h1>Projects</h1>
	<p>Take a look at some of my works and see what I've been up to.</p>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h2 class="card-title">DLL College Research and Development Services</h2>
				<p>
					A research management system built with Laravel, Livewire, and FilamentPHP for the College
					Research and Development Services office of Dalubhasaan ng Lungsod ng Lucena.
				</p>
				<div class="card-actions">
					<div class="not-prose">
						<a class="btn btn-primary text-base" href="https://dll-crds.com">Visit Website</a>
					</div>
				</div>
			</div>
		</div>
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h2 class="card-title">dll-crds-test</h2>
				<p>
					A research management system built with Laravel, Livewire, and FilamentPHP, this capstone
					project serves as the foundation for the official system used by the College Research and
					Development Services office of Dalubhasaan ng Lungsod ng Lucena.
				</p>
				<div class="card-actions">
					<div class="not-prose">
						<a
							class="btn btn-primary text-base"
							href="https://github.com/mrknthnycbrg/dll-crds-test">View on GitHub</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
