# Coding Standards

## General
- All new features must be documented in `PROJECT.md` or relevant `docs/`.
- Code must be clear, self-documenting, and properly typed.
- Avoid "magic strings"; use enums or constants.

## Frontend (Next.js / TypeScript)
- Use functional components and hooks.
- Interfaces for all props and state.
- Tailwind CSS for styling using defined design system variables in `globals.css`.
- All text visible to users must pass through `next-intl` (no hardcoded strings).

## Backend (C# / .NET)
- Follow standard C# naming conventions (PascalCase for classes/methods, camelCase for variables).
- Follow Clean Architecture: Domain must not depend on Infrastructure.
- Use asynchronous programming (`async/await`) for all I/O bound operations.
- Implement proper logging and structured exception handling.
