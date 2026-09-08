"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export interface ArtworkItem {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  artworks: ArtworkItem[];
}

function getColumnCount(width: number): number {
  if (width < 640) return 1;   // mobile
  if (width < 1024) return 2;  // tablet
  return 3;                    // desktop
}

export default function GalleryGrid({ artworks }: GalleryGridProps) {
  const [selected, setSelected] = useState<ArtworkItem | null>(null);
  const [columnCount, setColumnCount] = useState(3);

  useEffect(() => {
    function handleResize() {
      setColumnCount(getColumnCount(window.innerWidth));
    }

    handleResize(); // set initial value on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // distribute artworks into columns using modulo
  const columns: ArtworkItem[][] = Array.from({ length: columnCount }, () => []);
  artworks.forEach((art, i) => {
    columns[i % columnCount].push(art);
  });

  return (
    <>
      <div className="gallery" style={{ display: "flex", gap: "1rem" }}>
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            style={{ display: "flex", flexDirection: "column", flex: 1, gap: "1rem" }}
          >
            {column.map((art, i) => (
              <div
                key={i}
                className="artwork"
                style={{ position: "relative", cursor: "pointer" }}
                onClick={() => setSelected(art)}
              >
                <Image
                  src={art.src}
                  alt={art.alt}
                  width={0}
                  height={0}
                  sizes="280px"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {selected && (
        <div className="lightbox-overlay" onClick={() => setSelected(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selected.src}
              alt={selected.alt}
              width={0}
              height={0}
              sizes="70vw"
              style={{ width: "auto", height: "auto", maxWidth: "70vw", maxHeight: "70vh" }}
            />
            <button className="lightbox-close" onClick={() => setSelected(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}