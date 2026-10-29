# TrustMart — a clearer electronics marketplace

**[Try the live TrustMart demo](https://trustmart.sohaibijaz.dev/)** · [Case study](https://sohaibijaz.dev/projects/trustmart/) · [Portfolio](https://sohaibijaz.dev)

![Modern TrustMart interface](https://raw.githubusercontent.com/sohaibijaz940/sohaib-engineering-portfolio/main/public/previews/trustmart.webp)

A market companion for in-person electronics shopping in Pakistan. It helps people inspect comparable component offers, current supplier records and seller disclosures. **It does not take payments or certify manufacturer authenticity.**

## Two editions, one project history

This repository retains the original React/Vite coursework. The original MIT App Inventor scanner prototype and SRS are retained in the owner's local archive. The modern React/TypeScript + Flask/SQLite edition now lives in the shared portfolio source linked below; the coursework files and Git history here have not been replaced.

## Modern demonstration

- Consumer, supplier and administrator flows with server-side role checks; consumer Google OAuth is separately configured.
- Camera QR lookup on localhost/HTTPS, manual Shop ID and image fallback. A decoded code resolves to the current backend record, including unknown/revoked outcomes.
- Comparable sample pricing: only approved, verified, in-stock, fresh offers; 20% trimming per tail for at least five eligible offers, otherwise an untrimmed mean with low confidence.
- Product condition, origin/grade explanations, repair-history disclosures, shop details, directions and reporting.
- Optional app-scoped Gemini assistant with catalogue context; it needs its own private key.

All shops and prices are fictional demo data. Supplier verification is not proof that every product is authentic. Demo login fixtures are public teaching data and must be reviewed before production use.

## Source and setup

- [Complete modern source](https://github.com/sohaibijaz940/sohaib-engineering-portfolio)
- [This project's modern page source](https://github.com/sohaibijaz940/sohaib-engineering-portfolio/tree/main/trustmart-app/)
- [Local setup, providers and verification](https://github.com/sohaibijaz940/sohaib-engineering-portfolio#run-locally)
- [Engineering article source](https://github.com/sohaibijaz940/sohaib-engineering-portfolio/blob/main/src/content/writing/trustmart.mdx)
- [Original README, preserved for historical context](docs/ORIGINAL_README.md)

The public demo and portfolio are linked above. Original coursework and commit history remain preserved; source/setup links remain available for inspection.
