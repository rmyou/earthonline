// 用途：按语言加载界面文案并提供翻译函数。
// 编辑：新增语言时修改；普通中文文案请编辑 zh-CN.ts。
import type { UIStrings } from "./types";

export { tplStr } from "./format";

const modules = import.meta.glob<{ default: UIStrings }>("./lang/*.ts", {
  eager: true,
});

const translations: Record<string, UIStrings> = {};
for (const [path, mod] of Object.entries(modules)) {
  const locale = path.slice("./lang/".length, -".ts".length);
  translations[locale] = mod.default;
}

/** Returns UI strings for the given locale, falling back to English. */
export function useTranslations(locale: string = "en"): UIStrings {
  return translations[locale] ?? translations["en"];
}
