import { useStore } from "@nanostores/react";
import { selectedCrew } from "@/atoms/crewStore";
import { useEffect, useState } from "react";

import douglasImg from "@/assets/crew/image-douglas-hurley.png?format=webp&w=445";
import markImg from "@/assets/crew/image-mark-shuttleworth.png?format=webp&w=445";
import victorImg from "@/assets/crew/image-victor-glover.png?format=webp&w=445";
import anoushehImg from "@/assets/crew/image-anousheh-ansari.png?format=webp&w=445";

const crewImages: Record<string, any> = {
  "Douglas Hurley": douglasImg,
  "Mark Shuttleworth": markImg,
  "Victor Glover": victorImg,
  "Anousheh Ansari": anoushehImg,
};

export default function CrewImage() {
  const crew = useStore(selectedCrew);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Show initial image during hydration
    const initialImg = crewImages["Douglas Hurley"];
    return (
      <img
        src={initialImg}
        alt="Douglas Hurley"
        className="max-h-[364px] object-contain transition-opacity duration-500 mask-[linear-gradient(to_bottom,black_70%,transparent)]"
        loading="eager"
        fetchPriority="high"
        width={364}
        height={364}
      />
    );
  }

  return (
    <>
      {Object.entries(crewImages).map(([name, img]) => {
        const imgSrc = typeof img === "string" ? img : img.src;
        return (
          <img
            key={name}
            src={imgSrc}
            alt={name}
            className={`absolute max-h-[364px] object-contain transition-opacity duration-500 mask-[linear-gradient(to_bottom,black_70%,transparent)] ${
              crew === name ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            loading={name === "Douglas Hurley" ? "eager" : "lazy"}
            fetchPriority={name === "Douglas Hurley" ? "high" : "auto"}
            width={364}
            height={364}
          />
        );
      })}
    </>
  );
}
