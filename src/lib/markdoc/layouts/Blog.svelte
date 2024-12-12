<script>
    import "$lib/markdoc/styles/blog.css";
	import { formatDate } from "$lib/utils/date";
    
    export let title;
    export let description;
    export let author;
	export let date;
    export let timeToRead;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main>
	<section id="title">
		<h1>{title}</h1>
        <p class="description">{description}</p>
        <ul>
            <li>{author}</li>
			<li>{formatDate(new Date(date))}</li>
            <li>{timeToRead} mins</li>
        </ul>
		<hr />
	</section>
	<slot />
</main>

<style>
	main {
		width: 80%;
		min-height: 100vh;
		padding: 1.5rem 2.5rem;
		margin: 0 auto;
		justify-content: center;
		align-items: center;
	}

    #title > ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
		padding: 0;
    }
</style>