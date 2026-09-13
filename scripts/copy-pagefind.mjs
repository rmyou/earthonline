/* eslint-disable no-console */
import { cpSync, existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const source = resolve("dist/pagefind");
const target = resolve("public/pagefind");

if (!existsSync(source)) {
  throw new Error(`Pagefind output was not found at ${source}`);
}

rmSync(target, { recursive: true, force: true });
cpSync(source, target, { recursive: true });
console.log("Copied Pagefind index to public/pagefind");
