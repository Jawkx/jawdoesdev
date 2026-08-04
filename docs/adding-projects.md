# Adding a Project

Create a `.md` file in `src/content/project/` using these fields:

```md
---
title: My Project
order: 1
context: One short sentence about what the project does.
status: building
statusReason: The first version is still being tested.
link: https://example.com
---
```

- `title` — project name.
- `order` — optional non-negative number controlling position; lower numbers appear first. Projects without an order appear afterward, sorted by title.
- `context` — short description shown below the title.
- `status` — any concise label, such as `building`, `live`, or `archived`.
- `statusReason` — optional explanation shown when the status is hovered or focused.
- `link` — full URL opened when the project is selected.

Use `src/content/project/project-template.md` as a starting point. The Markdown file only defines the project entry; projects do not generate detail pages.
