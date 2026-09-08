// components/gallery.tsx
import fs from "fs";
import path from "path";
import GalleryGrid, { ArtworkItem } from "./gallerygrid";

function getArtworks(): ArtworkItem[] {
  const dir = path.join(process.cwd(), "public", "visarts");
  const files = fs.readdirSync(dir);

  const imageFiles = files
    .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b));

  return imageFiles.map((file) => ({
    src: `/visarts/${file}`,
    alt: file.replace(/\.[^/.]+$/, ""),
  }));
}

export default function Gallery() {
  const artworks = getArtworks();
  return <GalleryGrid artworks={artworks} />;
}