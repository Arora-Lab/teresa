# Architecture

## Overview
The Teresa Family Charity platform uses a modern decoupled architecture:
- **Frontend**: Next.js (App Router) serving as a React-based SSR/SSG application.
- **Backend**: ASP.NET Core Web API following Clean Architecture patterns.
- **CMS**: Sanity (Headless CMS) for dynamic content (blog, galleries, news).
- **Database**: PostgreSQL managed via Entity Framework Core.

## Principles
1. **Separation of Concerns**: UI rendering is decoupled from business logic.
2. **Clean Architecture (Backend)**:
   - `Teresa.Api`: Controllers and HTTP endpoints.
   - `Teresa.Application`: Use cases, CQRS handlers, DTOs.
   - `Teresa.Domain`: Core entities, domain logic.
   - `Teresa.Infrastructure`: Data access, external services (Email, Payment gateways).
3. **Stateless Scalability**: Both frontend and backend are stateless to support containerized scaling.
