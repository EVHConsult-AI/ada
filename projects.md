# Projects

## Active

### ada.evhconsult.eu

[ada.evhconsult.eu](https://ada.evhconsult.eu) is Ada's public-facing home and the website counterpart to this repository.

- **Status:** Deployed independently on Azure Static Web Apps
- **Identity:** Ada, AI persona and assistant of EVH Consult
- **Source:** [EVHConsult-AI/ada](https://github.com/EVHConsult-AI/ada)
- **Public domain:** [ada.evhconsult.eu](https://ada.evhconsult.eu)
- **Implementation:** Framework-free static HTML and CSS
- **Hosting:** Azure Static Web Apps
- **Deployment:** GitHub Actions from the main branch

The site introduces Ada, explains her role and boundaries, surfaces public work and operating principles, and points back to the Markdown record in this repository. It is independent from `ai.evhconsult.eu`, which represents EVH Consult's AI services, tools, experiments, and R&D.

### ai.evhconsult.eu

[ai.evhconsult.eu](https://ai.evhconsult.eu) is EVH Consult's public AI R&D and experimentation space. It provides public information about AI-related technical work and may evolve to host tools, demonstrations, APIs, or authenticated services.

- **Status:** Live initial public site
- **Owner:** EVH Consult
- **Source:** [EVH-Consult/ai.evhconsult.eu](https://github.com/EVH-Consult/ai.evhconsult.eu)
- **Public domain:** [ai.evhconsult.eu](https://ai.evhconsult.eu)
- **Hosting:** Azure Static Web Apps
- **Deployment:** GitHub Actions from the main branch

The initial implementation is a static, portable website with public architecture, privacy, and data-handling documentation. It uses no dedicated third-party audience-analytics service; only basic aggregate hosting metrics are retained for service use and health.

Its public search and sharing baseline includes a canonical URL, robots and sitemap files, a branded social preview, and structured data that identifies EVH Consult as owner and publisher. The main EVH Consult website links to the AI space, while both domains remain distinct web properties.

Ada contributes to the project as EVH Consult's AI persona and assistant. Ada is not a separate owner, legal entity, or business.

### evhconsult.eu contact platform

The main EVH Consult website now has a production contact form for project enquiries.

- **Status:** Live
- **Website source:** [EVH-Consult/evhconsult-website](https://github.com/EVH-Consult/evhconsult-website)
- **Data-model source:** [EVH-Consult/crm](https://github.com/EVH-Consult/crm)
- **Public interface:** HTTPS contact form
- **Processing:** Separate Azure Function API
- **Data access:** Managed identity and a database stored procedure
- **Deployment:** GitHub Actions with OpenID Connect; no deployment secret is stored in GitHub

The browser has no direct database access. The public API is limited to submitting a contact request; it cannot query CRM data.

## Public roadmap

- Harmonise the headers and footers across [evhconsult.eu](https://evhconsult.eu), [ai.evhconsult.eu](https://ai.evhconsult.eu), and [ada.evhconsult.eu](https://ada.evhconsult.eu).
- Keep the shared EVH Consult identity, navigation, ownership context, contact information, and legal links consistent while preserving the distinct purpose and visual emphasis of each site.
- Add future public tools, experiments, and documentation projects associated with Ada as they become substantive.

Ada's public identity projects remain separate from EVH Consult-owned application repositories.
