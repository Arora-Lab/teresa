# Deployment Architecture

## Environments
- **Local**: Run via Docker Compose (`docker-compose.yml`) or bare-metal CLI tools.
- **Staging**: Ephemeral preview environments automatically generated for PRs.
- **Production**: Live application serving real traffic.

## Hosting Strategy
- **Frontend**: Deployed to Vercel (or equivalent Node.js environment) for optimal Next.js SSR performance.
- **Backend API**: Containerized ASP.NET Core application deployed to Azure App Service / AWS ECS / or self-hosted Docker Swarm.
- **Database**: Managed PostgreSQL instance.
- **DNS & CDN**: Cloudflare.

## CI/CD Pipeline
- GitHub Actions automatically builds and tests code on every PR.
- Merges to `main` trigger a production deployment workflow.
