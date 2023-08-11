<script>
	import { page } from '$app/stores'
</script>

<h1>{$page.error?.message} Error: {$page.status}</h1>
<p>Something went wrong with this route</p>

<pre>
	{JSON.stringify($page, null, 2)}
</pre>
