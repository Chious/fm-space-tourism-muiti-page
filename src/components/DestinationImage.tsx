import { useStore } from "@nanostores/react";
import { selectedDestination } from "@/atoms/destinationStore";
import { useEffect, useState } from "react";

// Import as URLs - Vite will process these
import moonImg from "@/assets/destination/image-moon.png";
import marsImg from "@/assets/destination/image-mars.png";
import europaImg from "@/assets/destination/image-europa.png";
import titanImg from "@/assets/destination/image-titan.png";

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
        className="w-full max-w-md"
      />
    );
  }

  return (
    <div className="w-full max-w-md relative">
      {Object.entries(destinationImages).map(([name, img]) => {
        const imgSrc = typeof img === "string" ? img : img.src;
        return (
          <img
            key={name}
            src={imgSrc}
            alt={`${name} destination`}
            className={`w-full transition-opacity duration-500 ${
              destination === name
                ? "opacity-100 relative"
                : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
            loading={name === "moon" ? "eager" : "lazy"}
          />
        );
      })}
    </div>
  );
}
