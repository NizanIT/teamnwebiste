// Exports the website's built-in text (src/data/content) as JSON for the CRM seed.
//   npm run export:cms-seed            → prints JSON
//   npm run export:cms-seed -- out.json → writes the file
// The CRM script nizan_crm_backend/scripts/seedWebsiteContent.js loads it as DRAFTS.
import { writeFileSync } from "node:fs";
import { contentDefaults } from "../src/data/content/index.js";

const sections = structuredClone(contentDefaults);

// Comparison cells are keyed by the fallback package ids ("platinum"…), which
// mean nothing in the CRM. Keep the rows, empty the cells: staff fill them per
// CRM package in Team N Website.
for (const row of sections.packagesPage?.comparison ?? []) row.values = {};

const json = JSON.stringify(
  { exportedAt: new Date().toISOString(), source: "TeamNMakeovers/src/data/content", sections },
  null,
  2,
);

const out = process.argv[2];
if (out) {
  writeFileSync(out, `${json}\n`);
  console.log(`Wrote ${Object.keys(sections).length} sections to ${out}`);
} else {
  console.log(json);
}
