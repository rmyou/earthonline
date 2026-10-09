/* eslint-disable no-console */
import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
} from "node:fs";
import { resolve } from "node:path";

const source = resolve("dist/pagefind");
const target = resolve("public/pagefind");

if (!existsSync(source)) {
  throw new Error(`Pagefind output was not found at ${source}`);
}

/**
 * Recursive file-by-file copy.
 * Used on Windows because fs.cpSync can crash the process (STATUS_STACK_BUFFER_OVERRUN)
 * in some Windows/Node environments; copyFileSync is stable and the index is small.
 */
function copyRecursive(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const srcPath = resolve(src, entry.name);
    const destPath = resolve(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else if (entry.isFile()) {
      copyFileSync(srcPath, destPath);
    }
  }
}

rmSync(target, { recursive: true, force: true });

if (process.platform === "win32") {
  copyRecursive(source, target);
} else {
  cpSync(source, target, { recursive: true });
}

console.log("Copied Pagefind index to public/pagefind");
