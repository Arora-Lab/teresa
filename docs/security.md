# Security Policy

## Supported Versions
Security updates will be provided for the latest stable release. We do not maintain long-term support (LTS) for older versions of this application since it is centrally deployed.

## Reporting a Vulnerability
If you discover a security vulnerability within this project, please DO NOT open a public issue. Instead, send an email to `security@teresafamilycharity.org` (or the lead maintainer's email).

## Threat Model & Principles
- **Authentication**: Managed via Clerk. No passwords are in our database.
- **Payments**: PCI compliance is handled strictly by Stripe/PayPal. No raw credit card data is ever stored on our servers.
- **Bot Protection**: Cloudflare Turnstile is required for all public-facing forms (e.g., Contact).
- **Data Protection**: All sensitive donor data is encrypted at rest in PostgreSQL.
