# Architecture Decision Records (ADRs)

This directory contains architecture decision records for the MVDesign project. Each ADR documents a significant architectural or technical decision.

## Active ADRs

| ID | Title | Status | Key Decision |
|---|---|---|---|
| [0001](./ADR-0001-blazor-web-interactive-server.md) | Blazor Web with Interactive Server Rendering | Accepted | Use InteractiveServer for interactive pages; static components only for content |
| [0002](./ADR-0002-component-organization.md) | Component Organization Structure | Accepted | Organize into Pages, Layout, Sections, UI, Shared folders |
| [0003](./ADR-0003-event-handler-visibility.md) | Event Handler Method Visibility | Accepted | All @onclick/@onchange handlers must be public methods |
| [0004](./ADR-0004-modal-pattern.md) | Modal Implementation Pattern | Accepted | Consistent pattern with boolean state, @onclick:stopPropagation |
| [0005](./ADR-0005-tailwind-styling.md) | Styling with Tailwind CSS | Accepted | Primary: Tailwind utilities; Secondary: scoped `<style>` blocks |
| [0006](./ADR-0006-dotnet-csharp-version.md) | .NET 9.0 and C# Language Features | Accepted | .NET 9.0, nullable enabled, modern C# features |
| [0007](./ADR-0007-page-routing.md) | Page Routing and Navigation | Accepted | Lowercase-hyphenated URLs, explicit @rendermode on pages |
| [0008](./ADR-0008-adr-process.md) | Architecture Decision Record (ADR) Process | Accepted | Create ADRs for all significant architectural/technical decisions |

## Quick Reference for AI Assistants

### Critical Rules
1. **Interactive Components:** Pages with @onclick MUST have `@rendermode InteractiveServer`
2. **Event Handlers:** All @onclick/@onchange handlers must be `public` methods
3. **Modal Closing:** Always use `@onclick:stopPropagation` on modal content to prevent closing on inner clicks
4. **Styling:** Use Tailwind classes first; scoped `<style>` for complex CSS only
5. **Nullable Types:** Enable nullable reference types; use `string?` for nullable, `string` for non-null

### Common Mistakes to Avoid
- ❌ Private event handlers (use public instead)
- ❌ Missing `@rendermode InteractiveServer` on interactive pages
- ❌ Missing `@onclick:stopPropagation` on modal content divs
- ❌ Global CSS instead of component-scoped styles
- ❌ Not annotating nullable types in code

### Folder Structure Reference
```
Components/
├── Pages/           → Routable page components with @page
├── Layout/          → Layout and wrapper components
├── Sections/        → Content section components
├── UI/              → Reusable UI primitives
└── Shared/          → Other shared components
```

## How to Use These ADRs

- Read the relevant ADR when implementing features
- Refer to "AI Notes" sections for implementation guidance
- If you discover a new architectural pattern, consider creating a new ADR
- ADRs can be superseded; update Status if decision changes

---
Last updated: 2026-06-12
