import { useStore } from "@nanostores/react";
import { selectedDestination } from "@/atoms/destinationStore";
import { useEffect, useState } from "react";

import moonImg from "@/assets/destination/image-moon.png?format=webp&w=364";
import marsImg from "@/assets/destination/image-mars.png?format=webp&w=364";
import europaImg from "@/assets/destination/image-europa.png?format=webp&w=364";
import titanImg from "@/assets/destination/image-titan.png?format=webp&w=364";

const destinationImages: Record<string, any> = {
  moon: moonImg,
  mars: marsImg,
  europa: europaImg,
  titan: titanImg,
};

export default function DestinationImage() {
  const destination = useStore(selectedDestination);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Show initial image during hydration
    const initialImg = destinationImages["moon"];
    return (
      <img
        src={initialImg.src || initialImg}
        alt="Moon destination"
        className="w-full max-w-[364px] h-auto"
        fetchPriority="high"
        loading="eager"
        width={364}
        height={364}
      />
    );
  }

  return (
    <div className="w-full max-w-[364px] relative">
      {Object.entries(destinationImages).map(([name, img]) => {
        const imgSrc = typeof img === "string" ? img : img.src;
        return (
          <img
            key={name}
            src={imgSrc}
            alt={`${name} destination`}
            className={`w-full h-auto transition-opacity duration-500 ${
              destination === name
                ? "opacity-100 relative"
                : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
            loading={name === "moon" ? "eager" : "lazy"}
            fetchPriority={name === "moon" ? "high" : "auto"}
            width={364}
            height={364}
          />
        );
      })}
    </div>
  );
}
