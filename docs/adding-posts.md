# Adding a Post

## Quick Start

1. Create a new `.md` file in `src/content/post/`
2. Use the filename as the URL slug (e.g., `my-post.md` becomes `/post/my-post`)
3. Copy the template from `src/content/post/template.md`
4. Fill in your content

## Post Structure

```md
---
title: Your Post Title
description: A brief description of what this post is about
date: 2024-05-12
---

Your content goes here in Markdown format.
```

## Frontmatter Fields

- `title` (required) - The post title shown everywhere
- `description` (required) - Brief summary shown in the post list
- `date` (required) - Publication date in `YYYY-MM-DD` format

## Tips

- Keep descriptions concise (under 150 characters)
- Use kebab-case for filenames: `my-great-post.md`
- Posts are sorted by date (newest first)
- Use standard Markdown syntax
