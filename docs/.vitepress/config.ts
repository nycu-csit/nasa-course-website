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
