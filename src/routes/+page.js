import { base } from "$app/paths";

export function load() {
    const blogsGlob = import.meta.glob('./blog/**/*.markdoc', {
        eager: true
    });
    
    const blogs = Object.entries(blogsGlob)
        .map(([filepath, postList]) => {
            const { frontmatter } = postList;
    
            const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
            const postName = slug.slice(slug.lastIndexOf('/') + 1);
    
            return {
                title: frontmatter.title,
                description: frontmatter.description,
                author: frontmatter.author,
                date: new Date(frontmatter.date),
                timeToRead: frontmatter.timeToRead,
                slug,
                href: `${base}/blog/${postName}`,
            };
        })
        .sort((a, b) => {
            return b.date.getTime() - a.date.getTime();
        });

    return {
        blogs
    }
}