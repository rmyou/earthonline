const regularFontUrl =
  "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-sc@5.3.0/files/noto-sans-sc-chinese-simplified-400-normal.woff";
const boldFontUrl =
  "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-sc@5.3.0/files/noto-sans-sc-chinese-simplified-700-normal.woff";

type OgFonts = {
  regularData: ArrayBuffer;
  boldData: ArrayBuffer;
};

let fontsPromise: Promise<OgFonts> | undefined;

async function fetchFont(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download OG font: ${response.status} ${url}`);
  }
  return response.arrayBuffer();
}

export function getOgFonts(): Promise<OgFonts> {
  fontsPromise ??= Promise.all([
    fetchFont(regularFontUrl),
    fetchFont(boldFontUrl),
  ]).then(([regularData, boldData]) => ({ regularData, boldData }));

  return fontsPromise;
}
