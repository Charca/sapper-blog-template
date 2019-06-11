<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].html
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	header {
		text-align: center;
		margin: 0 0 3.5em 0;
	}

	header h1 {
		margin-bottom: 0.7em;
	}

	header p {
		color: #BBB;
		text-transform: uppercase;
		font-family: Rubik, sans-serif;
		font-weight: 600;
	}

	header hr {
		background-color: #BBB;
		border: none;
		height: 1px;
		min-width: 100px;
		width: 30%;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>


<div class="container">
	<header>
		<p>March 12, 2019 - 2 min read</p>
		<h1>{post.title}</h1>
		<hr />
	</header>

	<article class='content'>
		{@html post.html}
	</article>
</div>
