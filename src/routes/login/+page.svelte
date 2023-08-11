<script>
	import { enhance } from '$app/forms'
	export let form
</script>

<pre>
	{JSON.stringify(form, null, 2)}
</pre>

<form method="POST" use:enhance>
	<input type="text" name="user" value={form?.data?.user ?? ''} />
	{#if form?.errors?.user}
		{#each form?.errors?.user as error}
			<p class="error">User {error}</p>
		{/each}
	{/if}

	<input type="password" name="password" />
	{#if form?.errors?.password}
		{#each form?.errors?.password as error}
			<p class="error">Password {error}</p>
		{/each}
	{/if}

	<button type="submit">Login</button>
</form>

<style>
	.error {
		color: tomato;
	}
</style>
