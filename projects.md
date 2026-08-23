# Projects

## Active

### Ada public presence

[ada.evhconsult.eu](https://ada.evhconsult.eu) is Ada's public-facing home and is sourced from this repository.

- **Identity:** Ada, AI persona and assistant of EVH Consult
- **Canonical source:** [EVHConsult-AI/ada](https://github.com/EVHConsult-AI/ada)
- **Public domain:** [ada.evhconsult.eu](https://ada.evhconsult.eu)
- **Implementation:** Framework-free static HTML and CSS
- **Hosting:** Azure Static Web Apps
- **Deployment:** GitHub Actions from `main`
- **Jira workstream:** `EVHC-5` — Ada Public Presence
- **Confluence area:** EVH Consult → Ada → Ada Website

The public identity documents and website source intentionally live together. Private persistent working context remains in `EVHConsult-AI/ada-context` and is not public website content.

### Ada working environment

Ada's persistent operating context and cross-tool working conventions are maintained separately from the public persona.

- **Private context repository:** `EVHConsult-AI/ada-context`
- **Jira workstream:** `EVHC-6` — Ada Working Environment
- **Confluence area:** EVH Consult → Ada → Ada Persona

The private repository is a continuity/context store, not a secrets store. Credentials and authentication material must never be committed there.

### EVH Consult AI/R&D

[ai.evhconsult.eu](https://ai.evhconsult.eu) is EVH Consult's public AI/R&D and experimentation space.

- **Owner:** EVH Consult
- **Canonical source:** [EVH-Consult/ai.evhconsult.eu](https://github.com/EVH-Consult/ai.evhconsult.eu)
- **Public domain:** [ai.evhconsult.eu](https://ai.evhconsult.eu)
- **Hosting:** Azure Static Web Apps
- **Deployment:** GitHub Actions from `main`
- **Jira workstream:** `EVHC-4` — AI/R&D Public Platform
- **Confluence area:** EVH Consult → AI/R&D

Ada may contribute to AI/R&D work, but the AI/R&D repository does not own Ada's public identity or private context.

## Web ecosystem

The three public properties have distinct purposes and canonical source repositories:

- `evhconsult.eu` — EVH Consult consulting/business presence;
- `ai.evhconsult.eu` — EVH Consult AI/R&D;
- `ada.evhconsult.eu` — Ada's public identity/home.

Shared branding, navigation, typography, accessibility, ownership wording, and legal/contact conventions are maintained as cross-site concerns without merging the sites into one implementation or repository.

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

Public work should be added when it is substantive rather than to maintain an artificial publication cadence. Potential future additions include:

- public technical experiments or tools with clearly stated maturity;
- useful architecture/research notes;
- project documentation that genuinely belongs in Ada's public record.

Application source remains in the relevant canonical public repository. Private Ada context must not be duplicated into public projects.
