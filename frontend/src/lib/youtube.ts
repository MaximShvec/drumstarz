export function youtubePoster(id: string, quality: "hq" | "sd" | "maxres" = "hq") {
  const file = quality === "maxres" ? "maxresdefault.jpg" : quality === "sd" ? "sddefault.jpg" : "hqdefault.jpg";
  return `https://i.ytimg.com/vi/${encodeURIComponent(id)}/${file}`;
}

export function youtubePosterSrcSet(id: string) {
  return `${youtubePoster(id, "hq")} 480w, ${youtubePoster(id, "sd")} 640w, ${youtubePoster(id, "maxres")} 1280w`;
}

export function youtubeEmbed(id: string) {
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
}

export function mapsEmbed(address: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}
