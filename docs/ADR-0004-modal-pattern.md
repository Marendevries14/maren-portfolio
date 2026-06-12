# ADR 0004: Modal Implementation Pattern

## Status
Accepted

## Context
The application needs modals for displaying detailed content (images, forms, etc.). We needed a consistent pattern for implementing modals across components.

## Decision
Implement modals following this pattern:

1. **State Management:** Use a boolean field in `@code` block (e.g., `showModal`)
2. **Render Conditional:** Wrap modal markup in `@if (showModal) { ... }`
3. **Backdrop:** Outer div with full-screen overlay, click to close
4. **Inner Container:** Div with `@onclick:stopPropagation="true"` to prevent closing on inner clicks
5. **Close Handlers:** Public methods for opening/closing (e.g., `OpenModal()`, `CloseModal()`)
6. **Event Binding:** Use `@onclick:stopPropagation` on all interactive elements in modal

## Example Implementation
```razor
@if (showModal)
{
    <div class="fixed inset-0 z-50 bg-black/60" @onclick="CloseModal">
        <div class="max-w-2xl" @onclick:stopPropagation="true">
            <!-- Modal content -->
            <button @onclick="CloseModal" @onclick:stopPropagation>×</button>
        </div>
    </div>
}

@code {
    private bool showModal = false;
    
    public void OpenModal() => showModal = true;
    public void CloseModal() => showModal = false;
}
```

## Consequences
- **Advantages:**
  - Consistent modal behavior across the app
  - Predictable click/close handling
  - Easy to understand and maintain
  - Prevents event propagation issues

- **Disadvantages:**
  - Requires discipline to follow pattern
  - Modal markup clutters component HTML

## AI Notes
- ALL modals must use this pattern for consistency
- Always initialize boolean to `false`
- Use `@onclick:stopPropagation` on interactive elements (buttons, inputs)
- Use `@onclick:stopPropagation="true"` on the content container div
- Consider extracting modal content to separate component if it grows complex
- Test click behavior: clicking outside should close, clicking inside should not
