# Project Brain (Teresa Family Charity)

## Vision
To build a modern, scalable, and bilingual platform that facilitates charitable donations, volunteer engagement, and transparent administration for the Teresa Family Charity in Houston, Texas, focusing on supporting elderly individuals in Vietnam.

## Architecture
- **Frontend (Teresa.Web)**: Next.js (App Router), Tailwind CSS, next-intl for localization.
- **Backend (Teresa.Api)**: ASP.NET Core 9, adhering to Clean Architecture principles (API, Application, Domain, Infrastructure).
- **CMS (Teresa.Admin)**: Sanity CMS for blog and content management.
- **Database**: PostgreSQL (Entity Framework Core).
- **Payments**: Stripe & PayPal integrations.
- **Infrastructure**: Dockerized, Cloudflare for DNS/CDN/Security.

## Phases & Milestones
- **[x] Phase 1 (v0.1.0)**: Static Website (UI overhaul, bilingual setup, foundational layout).
- **[ ] Phase 2 (v0.2.0)**: Sanity CMS integration (Blog, News, Galleries).
- **[ ] Phase 3 (v0.3.0)**: Donations (Stripe/PayPal integration).
- **[ ] Phase 4 (v0.4.0)**: Donor Portal (Authentication, Receipt management).
- **[ ] Phase 5 (v0.5.0)**: Admin Dashboard.
- **[ ] Phase 6 (v1.0.0)**: Production Launch.
- **[ ] Future**: AI Assistant, Mobile App.

## Design Principles
- **Aesthetics**: Traditional, premium, respectful. Core colors: Emerald (Primary), Gold (Accent), Ivory (Background). Typography: Times New Roman.
- **Localization**: English and Vietnamese must be fully supported across all interfaces and data models.
- **Security**: Cloudflare Turnstile for forms, strict input validation, secure payment processing.

## Current Priorities
- Initialize repository governance (GitHub Projects, Milestones, Docs).
- Proceed to Phase 2: Set up Clerk Authentication and Sanity CMS.
