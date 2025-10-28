import { useStore } from "@nanostores/react";
import { selectedTechnology } from "@/atoms/technologyStore";
import { useEffect, useState } from "react";

import launchPortrait from "@/assets/technology/image-launch-vehicle-portrait.jpg?format=webp&w=768";
import launchLandscape from "@/assets/technology/image-launch-vehicle-landscape.jpg?format=webp&w=1920";
import spaceportPortrait from "@/assets/technology/image-spaceport-portrait.jpg?format=webp&w=768";
import spaceportLandscape from "@/assets/technology/image-spaceport-landscape.jpg?format=webp&w=1920";
import capsulePortrait from "@/assets/technology/image-space-capsule-portrait.jpg?format=webp&w=768";
import capsuleLandscape from "@/assets/technology/image-space-capsule-landscape.jpg?format=webp&w=1920";

type TechnologyKey = "Launch vehicle" | "Spaceport" | "Space capsule";

const technologyImages: Record<
  TechnologyKey,
  { portrait: any; landscape: any }
> = {
  "Launch vehicle": { portrait: launchPortrait, landscape: launchLandscape },
  Spaceport: { portrait: spaceportPortrait, landscape: spaceportLandscape },
  "Space capsule": { portrait: capsulePortrait, landscape: capsuleLandscape },
};

export default function TechnologyImage() {
  const technology = useStore(selectedTechnology);
  const [mounted, setMounted] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Detect portrait vs landscape on mount and resize
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full aspect-video max-w-2xl bg-white/10 rounded animate-pulse" />
    );
  }

  const images =
    technologyImages[technology as TechnologyKey] ||
    technologyImages["Launch vehicle"];
  const imageSrc = isPortrait ? images.portrait : images.landscape;

  return (
    <div className="w-full relative">
      {Object.entries(technologyImages).map(([name, imgs]) => {
        const currentImg = isPortrait ? imgs.portrait : imgs.landscape;
        const imgSrc =
          typeof currentImg === "string" ? currentImg : currentImg.src;

        return (
          <img
            key={name}
            src={imgSrc}
            alt={name}
            className={`w-full h-auto object-cover transition-opacity duration-500 aspect-square md:aspect-auto lg:aspect-square ${
              technology === name
                ? "opacity-100 relative"
                : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
            loading={name === "Launch vehicle" ? "eager" : "lazy"}
            fetchPriority={name === "Launch vehicle" ? "high" : "auto"}
          />
        );
      })}
    </div>
  );
}
