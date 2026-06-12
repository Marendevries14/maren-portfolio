# ADR 0003: Event Handler Method Visibility

## Status
Accepted

## Context
During implementation, we discovered that Blazor event handlers (@onclick, @onchange, etc.) require public methods. Private methods may work in some cases but are unreliable and break under certain conditions.

## Decision
All methods used as event handlers in Blazor components MUST be public. This ensures:
1. Reliable event binding
2. Consistent behavior across different component scenarios
3. Proper Blazor framework recognition of handler methods

## Consequences
- **Advantages:**
  - Reliable event handling
  - Clear intent that methods are part of public component API
  - Prevents hard-to-debug event binding issues

- **Disadvantages:**
  - Exposes internal logic to parent components (minor concern in practice)

## Example
```csharp
@code {
    // ✅ CORRECT: Public event handler
    public void OpenModal() => showModal = true;
    
    // ❌ WRONG: Private event handler (unreliable)
    private void OpenModal() => showModal = true;
}
```

## AI Notes
- ALWAYS use `public` for methods referenced in @onclick, @onchange, @onsubmit, etc.
- If a method is only for internal use, prefix with underscore: `_HelperMethod()` and keep it private
- When fixing event binding issues, first check if handler method is public
- Modal open/close handlers, form submission handlers, button click handlers must be public
