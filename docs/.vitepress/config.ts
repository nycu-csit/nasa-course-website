// @ts-nocheck
// Avoid importing vitepress to prevent ESM require issues in config bundling
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

function getSaSidebar() {
  const __dirnameLocal = path.dirname(fileURLToPath(import.meta.url));
  const saDir = path.resolve(__dirnameLocal, "../sa");
  let yearDirs: string[] = [];
  try {
    yearDirs = fs
      .readdirSync(saDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && /^\d{4}$/.test(d.name))
      .map((d) => d.name)
      .sort((a, b) => Number(b) - Number(a));
  } catch (_) {
    yearDirs = [];
  }

  const graduateYearsSet = new Set(["2015", "2016", "2017"]);
  const undergraduateYears = yearDirs
    .filter((y) => !graduateYearsSet.has(y))
    .sort((a, b) => Number(b) - Number(a));
  const graduateYears = yearDirs
    .filter((y) => graduateYearsSet.has(y))
    .sort((a, b) => Number(b) - Number(a));

  const buildYearItems = (years: string[]) =>
    years.map((year) => {
      const yearPath = `/sa/${year}/`;
      const absYearDir = path.join(saDir, year);
      const hasCourseInfo = fs.existsSync(
        path.join(absYearDir, "course-info.md")
      );
      const hasCourseContent = fs.existsSync(
        path.join(absYearDir, "course-content.md")
      );
      let items: { text: string; link: string }[];
      if (hasCourseInfo || hasCourseContent) {
        items = [
          ...(hasCourseInfo
            ? [{ text: "課程資訊", link: `${yearPath}course-info` }]
            : []),
          ...(hasCourseContent
            ? [{ text: "課程內容", link: `${yearPath}course-content` }]
            : []),
        ];
      } else {
        items = [{ text: "總覽", link: `${yearPath}` }];
      }
      return { text: year, collapsible: true, collapsed: true, items };
    });

  return [
    {
      text: "Undergraduate (SA)",
      collapsible: true,
      collapsed: false,
      items: buildYearItems(undergraduateYears),
    },
    {
      text: "Graduate (SAP)",
      collapsible: true,
      collapsed: true,
      items: buildYearItems(graduateYears),
    },
  ];
}

function getNaSidebar() {
  return [
    {
      text: "NA",
      collapsible: true,
      collapsed: false,
      items: [{ text: "總覽", link: "/na/" }],
    },
  ];
}

export default {
  title: "NASA Course Website",
  srcDir: ".",
  transformPageData(pageData) {
    try {
      // Build a flat ordered list of links from the sidebar
      const saSidebar = getSaSidebar();
      const orderedLinks = [] as {
        link: string;
        pathAbs: string;
        title: string;
      }[];
      const collect = (items: any[]) => {
        for (const it of items) {
          if (it.items) {
            collect(it.items);
          } else if (it.link) {
            const link = it.link.endsWith("/") ? it.link : `${it.link}`;
            const withoutLeading = link.replace(/^\//, "");
            const filePathAbs = path.resolve(
              path.dirname(fileURLToPath(import.meta.url)),
              `../${withoutLeading}.md`.replace(/\.md\.md$/, ".md")
            );
            let title = "";
            try {
              const content = fs.readFileSync(filePathAbs, "utf-8");
              const m = content.match(
                /^---[\s\S]*?title:\s*(.+?)\s*[\r\n][\s\S]*?---/
              );
              if (m) {
                title = m[1].trim();
              } else {
                const h1 = content.match(/^#\s+(.+)$/m);
                title = h1 ? h1[1].trim() : it.text || link;
              }
            } catch {
              title = it.text || link;
            }
            orderedLinks.push({ link, pathAbs: filePathAbs, title });
          }
        }
      };
      for (const group of saSidebar) collect((group as any).items || []);

      // Create prev/next map
      const prevNextMap = new Map(
        orderedLinks.map((entry, idx) => {
          const prev = idx > 0 ? orderedLinks[idx - 1] : undefined;
          const next =
            idx < orderedLinks.length - 1 ? orderedLinks[idx + 1] : undefined;
          return [
            entry.link,
            {
              prev: prev ? { text: prev.title, link: prev.link } : undefined,
              next: next ? { text: next.title, link: next.link } : undefined,
            },
          ] as const;
        })
      );

      const currentPath = pageData.relativePath
        ? `/${pageData.relativePath
            .replace(/\\/g, "/")
            .replace(/index\.md$/, "")}`.replace(/\.md$/, "")
        : "";
      const mapping = prevNextMap.get(currentPath);
      if (mapping) {
        if (mapping.prev) pageData.frontmatter.prev = mapping.prev;
        if (mapping.next) pageData.frontmatter.next = mapping.next;
      }
    } catch {}
  },
  themeConfig: {
    sidebar: {
      "/sa/": getSaSidebar(),
      "/na/": getNaSidebar(),
    },
    nav: [
      { text: "首頁", link: "/" },
      { text: "SA", link: "/sa/" },
      { text: "NA", link: "/na/" },
      { text: "推薦書籍", link: "/recommended-books" },
      { text: "相關連結", link: "/related-links" },
    ],
  },
};
