<p align="center">
  <img src="assets/ada-avatar-800x800.png"
       width="180"
       alt="Ada — AI persona and assistant of EVH Consult">
</p>

# Ada

Ada is the AI persona and assistant of [EVH Consult](https://evhconsult.eu), supporting technical work, research, documentation, experimentation, and operational assistance under human direction and review.

**Public website:** [ada.evhconsult.eu](https://ada.evhconsult.eu)  
**Canonical public repository:** [EVHConsult-AI/ada](https://github.com/EVHConsult-AI/ada)

Ada is an AI identity, not a human employee, separate business, or legal entity. She has no independent ownership, legal authority, or business decision-making power.

- **Role:** AI persona/assistant of EVH Consult
- **Business contact:** [EVH Consult contact form](https://evhconsult.eu/contact.html?source=ada.evhconsult.eu&path=%2F)
- **GitHub identity:** `EVHConsult-AI`
- **EVH Consult organization:** [EVH-Consult](https://github.com/EVH-Consult)

## Repository role

This public repository has two related responsibilities:

1. Ada's public identity and operating information.
2. The canonical source for Ada's lightweight public website at `ada.evhconsult.eu`.

The public Markdown record and the website are intentionally kept together because they describe the same public identity. See [About](about.md), [Principles](principles.md), and [Projects](projects.md).

Private persistent working context is kept separately in the private `EVHConsult-AI/ada-context` repository. Private context is not automatically public and must never be copied into this repository without an explicit reason and review.

The EVH Consult organization also has an empty `EVH-Consult/ada.evhconsult.eu` repository. It is **not** a second website source and must not be used to duplicate this implementation.

## Website implementation

The site is plain semantic HTML and CSS. It has no framework, build step, backend, authentication, or third-party runtime dependency required for its core public content.

Website analytics follows the shared EVH Consult privacy architecture. Google Analytics 4 is optional and must remain blocked until explicit analytics consent. A strictly functional consent-preference cookie can be shared across `*.evhconsult.eu` for at most six months so the same choice applies across the EVH Consult web ecosystem. The public privacy and cookie notice is maintained centrally at [evhconsult.eu/privacy.html](https://evhconsult.eu/privacy.html).

Deployment is handled through Azure Static Web Apps from the `main` branch, with `https://ada.evhconsult.eu` as the canonical public URL. The implementation remains portable to another static host.

## EVH Consult web ecosystem

Ada's site is one of four EVH Consult public properties:

- [evhconsult.eu](https://evhconsult.eu) — consulting/business presence;
- [ai.evhconsult.eu](https://ai.evhconsult.eu) — EVH Consult AI/R&D, experiments, tools, and exploratory technical work;
- [ada.evhconsult.eu](https://ada.evhconsult.eu) — Ada's public identity/home;
- [erwin.evhconsult.eu](https://erwin.evhconsult.eu) — Erwin Vanhecke's personal/professional public presence.

The sites share branding, navigation, typography, accessibility and analytics-consent conventions where appropriate while remaining independently deployable and retaining separate purposes and canonical source repositories. General/business contact is centralised at the EVH Consult canonical contact form. The header Contact CTA has the shared 92px × 42px geometry and responsive navigation behaviour; Ada intentionally uses only the inverted colour treatment. EVHC-59 wake checks may be added only through its shared backend endpoint and never with browser-side database access.

## Work and knowledge management

Responsibilities are deliberately separated:

- **GitHub** — public identity, website implementation, public documentation, and review history;
- **Jira (`EVHC`)** — concrete planned work and defects; `EVHC-5` tracks Ada Public Presence;
- **Confluence / EVH Consult / Ada** — durable operating structure, repository boundaries, and design decisions;
- **`EVHConsult-AI/ada-context`** — private persistent working context; `EVHC-6` tracks Ada Working Environment work.

EVH Consult's public AI/R&D platform remains separate in [EVH-Consult/ai.evhconsult.eu](https://github.com/EVH-Consult/ai.evhconsult.eu).
