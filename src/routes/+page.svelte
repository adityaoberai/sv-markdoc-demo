<script>
    import { formatDate } from "$lib/utils/date.js";

    export let data; // Accepts props for blog data
</script>

<svelte:head>
    <title>Blog Demo</title>
    <meta name="description" content="A test blog site built with SvelteKit and Markdoc" />
</svelte:head>

<div class="container">
    <h1>Aditya Oberai's Blog</h1>
    <ul>
        {#each data.blogs as blog}
            <li>
                <a href={blog.href}>{blog.title}</a>
                <span class="date"> | {formatDate(blog.date)}</span>
            </li>
        {/each}
    </ul>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 50px auto;
        padding: 20px;
        background-color: #ffffff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2.5rem;
        text-align: center;
        color: #007bff;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin: 1.25rem 0;
        font-size: 1.2rem;
    }

    a {
        text-decoration: none;
        color: #007bff;
        transition: color 0.3s;
    }

    a:hover {
        color: #0056b3;
        text-decoration: underline;
    }

    .date {
        font-size: 0.9rem;
        color: #6c757d;
    }

    @media (max-width: 768px) {
        .container {
            margin: 2.5rem;
            padding: 1.5rem;
        }

        h1 {
            font-size: 2rem;
        }

        li {
            font-size: 1rem;
        }
    }
</style>
