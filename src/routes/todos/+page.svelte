<script>
	import { enhance } from '$app/forms'

	export let data
	export let form

	let loading = false

	const addTodo = () => {
		// Do something before the form submits
		loading = true

		return async ({ update }) => {
			// do something after the form submits
			loading = false
			await update()
		}
	}
</script>

<pre>
	{JSON.stringify(form, null, 2)}
</pre>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form method="POST" action="?/removeTodo" use:enhance>
				<input type="hidden" name="id" value={todo.id} />
				<button type="submit" class="delete"> ❌ </button>
			</form>
		</li>
	{/each}
</ul>

<form method="POST" action="?/addTodo" use:enhance={addTodo}>
	<input type="text" name="todo" />

	{#if form?.missing}
		<p class="error">This field is required</p>
	{/if}

	<button type="submit" aria-busy={loading} class:secondary={loading}>
		{#if !loading}
			+ Add Todo
		{/if}
	</button>
	<button type="submit" class="secondary" formaction="?/clearTodos"> Clear All Todos</button>
</form>

{#if form?.success}
	<p>Todo Added! 🎉</p>
{/if}

<style>
	ul {
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	span {
		text-transform: capitalize;
	}

	.delete {
		margin: 0;
		background: none;
		border: none;
	}

	.error {
		color: tomato;
	}
</style>
