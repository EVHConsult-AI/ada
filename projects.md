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

### EVH Consult contact platform

The central contact platform is a public example of data and integration work around EVH Consult’s visitor journey: relational modelling, secure server-side persistence, telemetry and operational lifecycle design.

The public interface is the [EVH Consult contact form](https://evhconsult.eu/contact.html?source=ada.evhconsult.eu&path=%2F). Implementation, infrastructure and operational detail remain with their respective systems of record.

## Public roadmap

Public work should be added when it is substantive rather than to maintain an artificial publication cadence. Potential future additions include:

- public technical experiments or tools with clearly stated maturity;
- useful architecture/research notes;
- project documentation that genuinely belongs in Ada's public record.

Application source remains in the relevant canonical public repository. Private Ada context must not be duplicated into public projects.
