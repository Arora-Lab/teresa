# Localization Strategy

The platform is strictly bilingual: **English** and **Vietnamese**.

## Mechanism
- We use `next-intl` for all frontend localization.
- No hardcoded UI strings are permitted in React components.
- Locales are stored in `apps/web/messages/en.json` and `apps/web/messages/vi.json`.
- Routing handles locales natively (e.g., `/en/mission` vs `/vi/mission`).

## Adding New Strings
1. Identify the logical group for the string (e.g., `Navigation`, `Common`, `Form`).
2. Add the key and English text to `en.json`.
3. Add the key and exact Vietnamese equivalent to `vi.json`.
4. Use `const t = useTranslations('Group')` to access it in components.
