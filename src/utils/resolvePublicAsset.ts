// 用途：把 public 目录下的媒体路径解析为带 base 前缀的可访问路径。
// 编辑：通常无需修改；Pages CMS 写入的路径通常已包含 /earthonline 前缀。
import { getAssetPath } from "./withBase";

/**
 * Normalise a media path stored in JSON data.
 * - Absolute and data: URLs are returned unchanged.
 * - Paths that already include the configured base (e.g. "/earthonline/music/a.mp3") are kept as-is.
 * - Bare public paths (e.g. "music/a.mp3" or "/music/a.mp3") get the base prefix.
 */
export function resolvePublicAsset(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) return "";
  const src = value.trim();
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;

  const base = import.meta.env.BASE_URL;
  if (base && src.startsWith(base)) return src;

  return getAssetPath(src);
}
