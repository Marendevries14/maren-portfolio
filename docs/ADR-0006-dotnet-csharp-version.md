# ADR 0006: .NET 9.0 and C# Language Features

## Status
Accepted

## Context
This project targets .NET 9.0 with nullable reference types enabled. We need clear guidance on modern C# features and patterns to use.

## Decision
1. **Target:** .NET 9.0 with all language features enabled
2. **Nullable:** Enable nullable reference types (`<Nullable>enable</Nullable>`)
3. **Implicit Usings:** Use implicit global usings (`<ImplicitUsings>enable</ImplicitUsings>`)
4. **Modern C#:** Use records, nullable annotations, pattern matching, and other C# 13 features
5. **Arrow Functions:** Prefer for simple methods: `public void Method() => DoSomething();`

## Consequences
- **Advantages:**
  - Modern, safe C# code with null-safety
  - Cleaner, more concise code
  - Better IDE support and compiler errors
  - Future-proof with latest .NET features

- **Disadvantages:**
  - Requires discipline with null annotations
  - May have compatibility issues with older libraries

## Example
```csharp
public record ProjectData(string Title, string Description);

public void OpenModal() => showModal = true;

private bool? GetOptionalValue() => null;
```

## AI Notes
- Always annotate nullable types: `string?` for nullable, `string` for non-nullable
- Use arrow functions for simple one-liners
- Enable #nullable directives if needed in legacy code blocks
- Leverage implicit usings to keep using statements clean
- Use pattern matching and record types for data models
- Compiler warnings about nullability are ERRORS; fix them
