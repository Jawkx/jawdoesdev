# Adding a Project

Create a `.md` file in `src/content/project/` using four fields:

```md
---
title: My Project
context: One short sentence about what the project does.
status: building
link: https://example.com
---
```

- `title` — project name.
- `context` — short description shown below the title.
- `status` — any concise label, such as `building`, `live`, or `archived`.
- `link` — full URL opened when the project is selected.

Use `src/content/project/project-template.md` as a starting point. The Markdown file only defines the project entry; projects do not generate detail pages.
