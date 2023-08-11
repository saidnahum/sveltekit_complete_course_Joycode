<script>
	export let data

	function formatDate(date) {
		return new Intl.DateTimeFormat('es-MX', { dateStyle: 'long' }).format(date)
	}
</script>

<hgroup>
	<h1>{data.post.title}</h1>
	<h2>{formatDate(data.post.createdAt)}</h2>
</hgroup>

<div class="content">
	{@html data.post.content}
</div>

<div class="posts">
	<h4>Featured Posts</h4>

	<ul>
		{#each data.posts as post}
			<li>
				<a href="/posts/{post.slug}">{post.title}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.posts {
		margin-top: 2rem;
	}
</style>
