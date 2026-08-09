import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the GameVille landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="nb">/i);
  assert.match(html, /<title>GameVille \| Spill sammen\. Hør til\.<\/title>/i);
  assert.match(html, /SPILL/);
  assert.match(html, /SAMMEN\./);
  assert.match(html, /HØR TIL\./);
  assert.match(html, /LAN-Hubben/);
  assert.match(html, /KOBLING KOMMER SNART/);
  assert.match(html, /SE KOMMENDE EVENTER/);
  assert.match(html, /Møt samarbeidspartnerne/);
  assert.match(html, /MER ENN/);
  assert.match(html, /LAN-KVELD \/ FELLESSKAP/);
  assert.match(html, /Forandringshuset/);
  assert.match(html, /Unge Vil/);
  assert.match(html, /LANkultur/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("keeps essential accessibility and motion preferences", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="skip-link"/);
  assert.match(page, /aria-label="Hovedmeny"/);
  assert.match(page, /aria-expanded=\{menuOpen\}/);
  assert.match(page, /menuOpen \? "Lukk meny" : "Åpne meny"/);
  assert.match(page, /className="manifesto" id="om"/);
  assert.match(page, /target="_blank" rel="noreferrer"/);
  assert.match(layout, /@fontsource\/barlow-condensed\/900\.css/);
  assert.doesNotMatch(css, /Impact|Arial Black/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /animation-play-state:paused/);
  assert.match(css, /position:fixed/);
  assert.match(css, /focus-visible/);
});
