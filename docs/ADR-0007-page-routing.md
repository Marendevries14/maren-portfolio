# ADR 0007: Page Routing and Navigation

## Status
Accepted

## Context
The application uses Blazor routing. We need clear conventions for defining routes and organizing pages.

## Decision
1. **Route Definition:** Every page in `Components/Pages/` must have `@page` directive
2. **Route Convention:** Use lowercase, hyphenated URLs (e.g., `/project-details` not `/ProjectDetails`)
3. **Root Page:** Home page at `/` in `Home.razor`
4. **Navigation:** Use Blazor `<NavLink>` for internal navigation
5. **Query Parameters:** Use `@page "/path/{id:guid}"` syntax for parameters
6. **Render Mode:** Pages MUST explicitly define `@rendermode` if they use interactivity

## Consequences
- **Advantages:**
  - Predictable, SEO-friendly URLs
  - Clear page organization
  - Consistent routing patterns
  - Type-safe route parameters

- **Disadvantages:**
  - Must explicitly declare render modes
  - Hyphenation requires discipline

## Example
```razor
@page "/"
@page "/projects/{projectId:guid}"
@using MVDesign.Components.Sections
@rendermode InteractiveServer

<ProjectDetail ProjectId="@projectId" />

@code {
    [Parameter]
    public Guid projectId { get; set; }
}
```

## AI Notes
- EVERY page needs `@rendermode InteractiveServer` if it or its children use @onclick
- Use `@page "/"` for exact matches, `@page "/path"` for literal paths
- Route parameters are case-sensitive in URLs but conventionally lowercase
- Always validate route parameters exist before using in components
- Shared layout is applied automatically via `MainLayout.razor`
- Query parameters use different syntax: `[SupplyParameterFromQuery]` attribute
