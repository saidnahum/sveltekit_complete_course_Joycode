<script>
	import { invalidate, invalidateAll } from '$app/navigation'

	export let data

	$: ({ posts } = data)

	function rerunLoadFuncion() {
		// a)
		invalidate('posts')

		// b)
		//invalidate('api/posts')

		// c)
		//invalidate((url) => url.href.includes('posts'))

		// d)
		//invalidateAll()
	}
</script>

<h1>Posts</h1>
<p>Showing {posts.length} posts.</p>

<button on:click={rerunLoadFuncion}>Rerun</button>

{#each posts as { slug, title }}
	<ul>
		<li>
			<a href="/posts/{slug}">{title}</a>
		</li>
	</ul>
{/each}
