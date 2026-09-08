import Image from "next/image";
import { ReactNode } from "react";

export interface CardIcon {
  icon: ReactNode;
  href?: string;
  onClick?: () => void;
  label: string;
}

export interface ProjectItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  monthYear: string;
  description: string;
  icons: CardIcon[];
}

export function ProjectCard({ item }: { item: ProjectItem }) {
  const { imageSrc, imageAlt, title, monthYear, description, icons } = item;

  return (
    <div className="project-card">
      <div className="project-card-image">
        <Image src={imageSrc} alt={imageAlt} fill className="project-card-image-inner" />
      </div>

      <div className="project-card-content">
        <div>
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-date">{monthYear}</p>
          <p className="project-card-description">{description}</p>
        </div>

        <div className="project-card-icons">
          {icons.map((iconItem, i) =>
            iconItem.href ? (
              <a
                key={i}
                href={iconItem.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={iconItem.label}
                className="project-card-icon"
              >
                {iconItem.icon}
              </a>
            ) : (
              <button
                key={i}
                onClick={iconItem.onClick}
                aria-label={iconItem.label}
                className="project-card-icon"
              >
                {iconItem.icon}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}