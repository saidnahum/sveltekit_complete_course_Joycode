<script>
	import { page } from '$app/stores'
</script>

<h1>Rest Parameters</h1>
<p>Width: {$page.params.w}</p>
<p>Height: {$page.params.h}</p>

<pre>
   {JSON.stringify($page, null, 2)}
</pre>
