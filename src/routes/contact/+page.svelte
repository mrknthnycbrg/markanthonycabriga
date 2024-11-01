<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<div
	class="prose max-w-none"
	transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'y' }}
>
	<h1>Contact</h1>
	<p>Feel free to get in touch for any questions, collaborations, or just to say hi!</p>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Email</h2>
				<div class="card-actions">
					<div class="not-prose">
						<a class="btn btn-primary text-base" href="mailto:macabriga@gmail.com"
							>macabriga@gmail.com</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h2 class="card-title">LinkedIn</h2>
				<div class="card-actions">
					<div class="not-prose">
						<a class="btn btn-primary text-base" href="https://www.linkedin.com/in/macabriga"
							>macabriga</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h2 class="card-title">GitHub</h2>
				<div class="card-actions">
					<div class="not-prose">
						<a class="btn btn-primary text-base" href="https://github.com/mrknthnycbrg"
							>mrknthnycbrg</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="card card-bordered w-full bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Facebook</h2>
				<div class="card-actions">
					<div class="not-prose">
						<a class="btn btn-primary text-base" href="https://www.facebook.com/mrknthnycbrg"
							>Mark Anthony Cabriga</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
