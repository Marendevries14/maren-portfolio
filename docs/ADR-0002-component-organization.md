# ADR 0002: Component Organization Structure

## Status
Accepted

## Context
The project has growing number of components. We needed a clear structure for organizing Blazor components to maintain scalability and clarity.

## Decision
Organize components into the following folder structure:
```
Components/
├── Pages/          (routable page components with @page directive)
├── Layout/         (layout components used across pages)
├── Sections/       (reusable section components for content blocks)
├── UI/             (small, reusable UI components: Button, Container, etc.)
└── Shared/         (other shared components)
```

## Consequences
- **Advantages:**
  - Clear separation of concerns
  - Easy to locate and organize components
  - Scales well as project grows
  - Consistent file organization across team

- **Disadvantages:**
  - More folders to manage
  - May feel over-engineered for small projects

## AI Notes
- Pages go in `Components/Pages/` with @page directive
- Section components (HeroSection, ProjectsSection, etc.) go in `Components/Sections/`
- Reusable UI primitives go in `Components/UI/`
- Layout/wrapper components go in `Components/Layout/`
- Don't mix concerns; follow this hierarchy strictly
