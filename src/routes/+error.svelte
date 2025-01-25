<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="prose max-w-none">
	<h1>{page.status}: {page.error?.message}</h1>
</div>
