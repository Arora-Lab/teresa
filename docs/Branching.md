# Branching Strategy

We follow a structured branching model to maintain stability and facilitate parallel development.

## Branches
- `main`: Represents the current production-ready state.
- `develop`: The active development branch. All feature branches merge here.
- `feature/*`: Branches for new features (e.g., `feature/sanity-cms`).
- `bugfix/*`: Branches for non-critical bug fixes.
- `hotfix/*`: Urgent fixes that go directly into `main` and `develop`.

## Workflow
1. Create a `feature/name` branch from `develop`.
2. Commit frequently with descriptive messages.
3. Open a Pull Request targeting `develop`.
4. After review and CI passing, squash and merge into `develop`.
5. Releases are tagged on `main` (e.g., `v0.1.0`).
