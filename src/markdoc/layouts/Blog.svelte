<script>
    import "../styles/blog.css";
	import { formatDate } from "$lib/utils/date";
    
    let { title, description, author, date, timeToRead, children } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main>
	<section id="title">
        <a href="/"><em>&larr; Back to blog</em></a>
		<h1>{title}</h1>
        <p class="description">{description}</p>
        <ul>
            <li>{author}</li>
			<li>{formatDate(new Date(date))}</li>
            <li>{timeToRead} mins</li>
        </ul>
		<hr />
	</section>

	{@render children()}
</main>

<style>
	main {
		width: 80%;
		padding: 1.5rem 2.5rem;
		margin: 1.5rem auto;
		justify-content: center;
		align-items: center;
        background-color: #ffffff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
	}

    #title > ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
		padding: 0;
    }
</style>