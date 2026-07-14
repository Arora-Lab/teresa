# Teresa Family Charity Website Rebuild

This implementation plan captures the finalized architectural vision and phased rollout strategy for modernizing the Teresa Family Charity platform. The goal is to move away from WordPress and build a maintainable, secure, and scalable system using a modern tech stack.

## Technology Stack

- **Frontend:** Next.js + TypeScript
- **UI:** Tailwind CSS
- **Localization:** next-intl (English & Vietnamese)
- **Content CMS:** Sanity
- **Backend:** ASP.NET Core LTS Web API
- **Database:** PostgreSQL
- **Media Storage:** Google Workspace Shared Drive (Archive), Cloudinary (Public Image Delivery), YouTube/Facebook (Video/Livestream Delivery)
- **Security:** Cloudflare Turnstile (Bot protection) & Cloudflare (Edge)
- **Authentication:** Clerk
- **Payments:** Stripe + PayPal
- **Email:** Postmark
- **Hosting:** Vercel (Next.js frontend), Azure (API & DB)
- **Monitoring:** Sentry (Frontend) + Application Insights (Backend) + OpenTelemetry

## Folder Structure

The project will follow a clean monorepo-style structure:

```text
Teresa/
├── apps/
│   ├── web/                         Next.js public site, donor portal, admin
│   └── studio/                      Sanity Studio
│
├── backend/
│   ├── Teresa.Api/
│   ├── Teresa.Application/
│   ├── Teresa.Domain/
│   ├── Teresa.Infrastructure/
│   └── Teresa.Tests/
│
├── packages/
│   ├── ui/                          Shared React components
│   ├── config/                      Shared TypeScript configuration
│   └── sanity-types/                Generated Sanity types
│
├── infrastructure/
│   ├── docker-compose.yml
│   ├── database/
│   └── deployment/
│
├── docs/
│   ├── architecture/
│   ├── security/
│   └── migration/
│
├── Teresa.sln
└── README.md
```

## Phased Rollout Plan

### Phase 0 — Preserve and Secure
- Audit and back up the existing WordPress site, media, and database.
- Secure the existing contact form and WordPress admin accounts.
- Create the content and URL migration map for legacy redirects.

### Phase 1 — Bilingual Public Website (Static First)
- Build the Next.js application to recreate the existing visual theme with responsive navigation.
- Implement English/Vietnamese routing (`/en`, `/vi`) using static content components.
- Import static content from WordPress into Next.js localized files.
- Build a minimal `.NET` API (e.g., `POST /api/contact`, `GET /api/health`) with Turnstile verification, rate limiting, and Postmark email integration.
- Set up SEO metadata, old URL redirects, and initial Vercel deployment.

### Phase 2 — Sanity Content System
- Set up Sanity Studio for managing posts, events, albums, and leadership profiles.
- Implement localized document schemas.
- Replace Next.js static content components with Sanity data queries.

### Phase 3 — Donation Foundation
- Integrate Stripe and PayPal for guest donations.
- Build robust webhook handling (signature-verified, idempotent, stored).
- Implement offline Zelle/check entry and receipt generation.

### Phase 3B — Donor Portal
- Integrate Clerk for authentication.
- Create donor profiles, display donation history, and allow receipt downloads.

### Phase 4 — Financial Administration
- Build protected routes in `Teresa.Web` (`/admin`).
- Implement administrative tools for offline donations, Zelle/check matching, account corrections, merging duplicates, and viewing the immutable audit history.

### Phase 5 — AI Assistant
- Integrate OpenAI for public FAQ answering based on Sanity content.

## Security Requirements

### Public Contact Form
- Cloudflare Turnstile with ASP.NET server-side verification.
- ASP.NET & Cloudflare edge rate limiting.
- Honeypot field and minimum submission duration.
- Input length restrictions, plain-text email rendering, and generic public error responses.

### Application Security
- HTTPS everywhere, strict CORS allowlist, Content Security Policy.
- Dependency vulnerability scanning, database backups, file-type/size validation.
- Role-based authorization in the `.NET` API, MFA for admins/treasurers, immutable audit logs.
- No sensitive information in logs or Next.js public environment variables.

### Payment Security
- Stripe and PayPal webhooks must be signature-verified, idempotent, stored before processing, retried safely, and reconciled.

## Verification Plan

### Automated Verification
- **Frontend:** TypeScript type check, ESLint, Unit tests, Next.js production build, accessibility checks, localized-route tests, broken-link checks.
- **Backend:** `dotnet restore`, `dotnet build`, Unit/Integration/Architecture tests, rate-limit tests, webhook signature tests.
- **End-to-End:** Playwright for language switch, navigation, contact form (success/bot rejection), and admin route protection.

### Manual Verification
- Verify public site on desktop/mobile, old URL redirects, spam blocking, Vietnamese character rendering, language persistence, accessibility, and Lighthouse performance.
