<script>
	import { page } from '$app/stores'
</script>

<h1>Dimensions</h1>
<p>Width: {$page.params.width}</p>
<p>Heihgt: {$page.params.height}</p>

<pre>
   {JSON.stringify($page, null, 2)}
</pre>
