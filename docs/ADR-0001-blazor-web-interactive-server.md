# ADR 0001: Blazor Web with Interactive Server Rendering

## Status
Accepted

## Context
This project is a portfolio/marketing website built with Blazor. We needed to decide between static SSR, interactive WebAssembly, or interactive Server-side rendering for interactivity (modals, form handling, etc.).

## Decision
Use Blazor Web with InteractiveServer render mode for all interactive pages and components. Static components are only used for content-only sections.

## Consequences
- **Advantages:**
  - Enables real-time interactivity with C# event handlers (@onclick, form binding)
  - Full access to server-side logic and databases
  - Smaller initial payload than WebAssembly
  - Better for real-time applications

- **Disadvantages:**
  - Requires persistent WebSocket connection between client and server
  - Higher server resource usage compared to static SSR
  - Not suitable for offline-first applications

## AI Notes
- All pages that use @onclick, @onchange, or two-way binding MUST have `@rendermode InteractiveServer` or inherit it from parent
- Modals, forms, and any interactive UI MUST be on interactive components
- Use static components when possible for content-only sections to reduce server load
- Verify with `@rendermode InteractiveServer` on pages or sections that handle user events
