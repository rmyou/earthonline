import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

type OgFonts = {
  regularData: ArrayBuffer;
  boldData: ArrayBuffer;
};

let fontsPromise: Promise<OgFonts> | undefined;

async function readFont(filename: string): Promise<ArrayBuffer> {
  const file = await readFile(
    resolve(process.cwd(), "src/assets/og-fonts", filename)
  );
  return file.buffer.slice(
    file.byteOffset,
    file.byteOffset + file.byteLength
  ) as ArrayBuffer;
}

export function getOgFonts(): Promise<OgFonts> {
  fontsPromise ??= Promise.all([
    readFont("NotoSansSC-Regular.woff"),
    readFont("NotoSansSC-Bold.woff"),
  ]).then(([regularData, boldData]) => ({ regularData, boldData }));

  return fontsPromise;
}
