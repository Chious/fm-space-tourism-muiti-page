import { useStore } from "@nanostores/react";
import {
  selectedTechnology,
  setSelectedTechnology,
} from "@/atoms/technologyStore";
import { cn } from "@/lib/utils";

interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

interface TechnologyTabProps {
  technologies: Technology[];
}

export default function TechnologyTab({ technologies }: TechnologyTabProps) {
  const currentTechnology = useStore(selectedTechnology);
  const selectedTechData = technologies.find(
    (t: Technology) => t.name === currentTechnology
  );

  const handleTechClick = (techName: string) => {
    setSelectedTechnology(techName);
  };

  return (
    <>
      {/* Buttons */}
      <div className="col-span-1 lg:col-span-1 order-2 lg:order-2 flex gap-4 flex-row lg:flex-col justify-center items-center w-full h-min">
        {technologies.map((tech, index) => (
          <button
            key={tech.name}
            type="button"
            onClick={() => handleTechClick(tech.name)}
            className={cn(
              "circle w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full transition-all flex items-center justify-center text-white text-preset-5 uppercase border-2 shrink-0",
              currentTechnology === tech.name
                ? "bg-white text-black border-white"
                : "bg-transparent text-white border-white/30 hover:border-white/60"
            )}
            aria-label={tech.name}
            aria-pressed={currentTechnology === tech.name}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="col-span-1 lg:col-span-3 order-3 lg:order-2 flex flex-col justify-start gap-4">
        <h2 className="text-white/50 text-preset-5 uppercase mb-4 text-center lg:text-start">
          The terminology...
        </h2>
        <h3
          className="text-white text-preset-3 uppercase mb-4 text-center lg:text-start"
          style={{ lineHeight: "1.2" }}
        >
          {selectedTechData?.name}
        </h3>
        <p className="text-white/70 text-preset-9 leading-6 text-center lg:text-start w-full min-h-32">
          {selectedTechData?.description}
        </p>
      </div>
    </>
  );
}
