<script>
    import { formatDate } from "$lib/utils/date.js";

    export let data; // Accepts props for blog data
</script>

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
    /* General reset for consistent styles */
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        background-color: #f8f9fa;
        color: #343a40;
    }

    /* Container for the page content */
    .container {
        max-width: 800px;
        margin: 50px auto;
        padding: 20px;
        background-color: #ffffff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    /* Blog header styling */
    h1 {
        font-size: 2.5em;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
        color: #007bff;
    }

    /* Blog list styles */
    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin: 10px 0;
        font-size: 1.2em;
    }

    /* Link styles */
    a {
        text-decoration: none;
        color: #007bff;
        transition: color 0.3s;
    }

    a:hover {
        color: #0056b3;
        text-decoration: underline;
    }

    /* Date styling */
    .date {
        font-size: 0.9em;
        color: #6c757d;
    }

    /* Responsive design */
    @media (max-width: 768px) {
        .container {
            margin: 20px;
            padding: 15px;
        }

        h1 {
            font-size: 2em;
        }

        li {
            font-size: 1em;
        }
    }
</style>
