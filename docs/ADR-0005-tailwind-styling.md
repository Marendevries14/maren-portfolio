# ADR 0005: Styling with Tailwind CSS

## Status
Accepted

## Context
The project uses Tailwind CSS for styling. We need clear rules about how to use Tailwind, custom CSS, and scoped styles.

## Decision
1. **Primary:** Use Tailwind utility classes for styling
2. **Custom CSS:** Use scoped `<style>` blocks in components for hover states, transitions, or complex selectors that Tailwind doesn't easily support
3. **Global CSS:** Avoid global CSS; use component-scoped styles instead
4. **Naming:** Use semantic Tailwind class names; avoid arbitrary values unless necessary
5. **Custom Colors:** Define in Tailwind config, not inline

## Consequences
- **Advantages:**
  - Consistent design system
  - Small component bundle sizes with scoped styles
  - Easy to maintain styles with components
  - Utility-first approach reduces CSS size

- **Disadvantages:**
  - Requires Tailwind knowledge
  - Scoped styles can become scattered if overused
  - May need CSS fallbacks for complex animations

## Example
```razor
<style>
    .project-image-trigger:hover img {
        transform: scale(1.03);
    }
</style>

<button class="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/80 transition duration-300">
    Click me
</button>
```

## AI Notes
- Use Tailwind classes like `hover:`, `transition`, `duration-` for standard effects
- Use scoped `<style>` for complex selectors or advanced transforms
- Avoid inline `style=""` attributes; use Tailwind classes
- Check Tailwind config for project color palette (primary, cocoa, cream, sage, paper, etc.)
- Initialize color palette understanding: primary, cocoa (dark brown), cream, sage (muted green), paper
- Use responsive classes (sm:, lg:, etc.) for layout changes
