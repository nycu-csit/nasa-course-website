# NASA Course Website

📍 **Live site: [site.nasa.cs.nycu.edu.tw](https://site.nasa.cs.nycu.edu.tw)**

This is the documentation website for **NASA** (Network And System Administration) at
NYCU CSIT — the *Computer System Administration (SA)* and *Computer Network Administration
(NA)* courses. The site collects and archives course materials including lecture notes,
course information, guest speeches, recommended books, and related links going back to 2004.

It is intended for students taking the courses, teaching assistants, and anyone who wants to
browse the archived material. The site is built with [VitePress](https://vitepress.dev/) and
is deployed automatically — you can read everything online at the live site above without
running anything locally.

## Content Structure

Course material lives under `docs/`, organized by course and year:

- `docs/sa/<year>/` — **Computer System Administration** notes, one directory per year (2004–present).
  Topics include Unix/Linux, shell, file systems, processes & scheduling, ZFS, Web/FAMP,
  driver/kernel, PKI, etc.
- `docs/na/<year>/` — **Computer Network Administration** notes, one directory per year (2004–present).
  Topics include DNS, mail servers, VPN, firewall, routing, DHCP/NAT, LDAP, SNMP, etc.
- `docs/index.md` — site home page.
- `docs/recommended-books.md`, `docs/related-links.md`, `docs/ta-information.md` — supplementary pages.
- `docs/public/` — static assets (images, slides, etc.).

Each year directory typically contains pages such as `course-info.md` and `course-content.md`.

## Prerequisites

- [Node.js](https://nodejs.org/) — the CI builds with **Node 24**, so use Node 24 or newer.

## Getting Started

To get a local copy up and running, follow these steps.

1. Clone the repo
   ```sh
   git clone https://github.com/nycu-csit/nasa-course-website.git
   cd nasa-course-website
   ```

2. Install NPM packages
   ```sh
   npm install
   ```

## Usage

To run the development server:

```sh
npm run docs:dev
```

To build the project for production:

```sh
npm run docs:build
```

To preview the production build:

```sh
npm run docs:preview
```

## Contributing

Contributions of new or updated course material are welcome.

1. Add or edit a Markdown (`.md`) file under the appropriate directory:
   `docs/sa/<year>/` for System Administration or `docs/na/<year>/` for Network Administration.
   Create the year directory if it does not exist yet.
2. Place any images or other static assets under `docs/public/`.
3. Run `npm run docs:dev` to preview your changes locally before submitting.
4. Open a pull request, or push to `main` if you have access.

CI automatically builds and deploys the site to GitHub Pages on every push to `main`
(see `.github/workflows/deploy.yml`), so merged changes go live without any manual step.

## License

This repository uses two different licenses:

- **Source code** (site configuration, build tooling, theme code) is licensed under the
  [MIT License](https://opensource.org/licenses/MIT).
- **Course content** (lecture notes and other material under `docs/`) is licensed under
  [Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).
