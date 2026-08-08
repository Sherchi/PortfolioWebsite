# Portfolio component reference

The page files contain content and component arguments. Reusable layout code
lives in `Portfolio.tsx`, while the CSS is divided by responsibility under
`components/styles`.

## Page shell and hero

```tsx
<PortfolioPage>
  <PageHero
    eyebrow="Selected projects"
    title="Systems I've designed and built."
    aside="A short page description."
    actions={[{ href: "/projects", label: "View projects" }]}
  />
</PortfolioPage>
```

## Standard section

```tsx
<Section alternate>
  <SectionHeader
    eyebrow="Publications"
    title="Published research"
    meta="Peer-reviewed work"
  />
  <YourContent />
</Section>
```

Use `alternate` for the slightly lighter section background. `Section` adds the
standard border, width and vertical spacing.

## Numbered rows

```tsx
<NumberedSection
  eyebrow="Areas of work"
  title="What I focus on."
  items={[
    {
      title: "Full-stack development",
      description: "Frontend, backend and API work.",
      accent: "lime",
    },
  ]}
/>
```

Available accent names are `lime`, `violet`, `amber` and `blue`.

## Home technology chips

Edit the `technologies` array in `app/page.tsx` to add or remove the compact
tool chips. Each item takes a `label` and a short `mark` displayed inside its
small icon circle.

## Project case study

```tsx
<ProjectCaseStudy
  number="01"
  category="Cybersecurity / Machine Learning"
  overline="Master's thesis project"
  title="OTA-Sentinel"
  description="Short project description."
  details={[
    { label: "Problem", value: "What the project addresses" },
    { label: "Approach", value: "How it works" },
  ]}
  technologies="Python / TensorFlow"
  accent="lime"
  action={{ href: "/research", label: "Read the research" }}
  visual={{
    variant: "pipeline",
    title: "OTA-Sentinel",
    meta: "System overview",
    footer: "Replace with project image",
  }}
/>
```

Visual variants are `pipeline`, `bars` and `leaderboard`. Use `reverse` to put
the project description before the visual on desktop, and `alternate` to use the
alternate section background.

The Projects page uses `ProjectCardGrid`, which places these case studies into a
responsive three-, two- or one-column card grid. A standalone
`ProjectCaseStudy` remains wider for the featured home and research sections.

## Experience timeline

Add another object to the `experiences` array in
`app/experience/page.tsx`. `ExperienceTimeline` handles numbering, colours,
layout and contribution lists automatically.

## Publications and conferences

Add objects to the `publications` or `conferences` arrays in
`app/research/page.tsx`. `PublicationList` and `ConferenceList` render them.

## Call to action

```tsx
<SplitCta
  eyebrow="Contact"
  title="Interested in working together?"
  action={{ href: "mailto:you@example.com", label: "Send an email" }}
/>
```

## Styling

The styles are organized as follows:

- `PortfolioShared.module.css`: page shell, heroes, sections, links, numbered
  rows, detail lists and calls to action.
- `HomePage.module.css`: home-page preview panels.
- `ProjectsPage.module.css`: project case studies and project visuals.
- `ExperiencePage.module.css`: professional-experience timeline.
- `ResearchPage.module.css`: publications, conferences and research areas.
- `SiteNavigation.module.css`: top navigation and theme toggle.

Site-wide theme variables, base element rules and light/dark palettes remain in
`app/globals.css`.
