import { useStore } from "@nanostores/react";
import { selectedCrew, setSelectedCrew } from "@/atoms/crewStore";
import { cn } from "@/lib/utils";

interface Crew {
  name: string;
  role: string;
  bio: string;
  images: {
    png: string;
    webp: string;
  };
}

interface CrewTabProps {
  crew: Crew[];
  className?: string;
}

export default function CrewTab({ crew, className }: CrewTabProps) {
  const currentCrew = useStore(selectedCrew);
  const selectedCrewData = crew.find((c: Crew) => c.name === currentCrew);

  const handleCrewClick = (crewName: string) => {
    setSelectedCrew(crewName);
  };

  return (
    <div
      className={cn(
        `order-1 flex border-b lg:border-b-0 border-transparent items-start justify-center lg:pr-12 pb-8 lg:pb-0 w-full h-full flex-col gap-4`,
        className
      )}
    >
      <h2 className="text-white/50 text-preset-4 uppercase mb-2 text-center lg:text-start w-full">
        {selectedCrewData?.role}
      </h2>
      <h3
        className="text-white text-preset-3 uppercase mb-4 text-center lg:text-start w-full min-h-[72px] flex items-center justify-center lg:justify-start"
        style={{ lineHeight: "1.2" }}
      >
        {selectedCrewData?.name}
      </h3>
      <p className="flex-1 text-white/70 text-preset-9 leading-6 max-w-[450px] mx-auto lg:mx-0 text-center lg:text-start w-full">
        {selectedCrewData?.bio}
      </p>

      <div
        id="crew-tab"
        className="flex gap-4 mt-8 lg:mt-12 w-full justify-center lg:justify-start"
      >
        {crew.map((c: Crew) => (
          <button
            key={c.name}
            type="button"
            onClick={() => handleCrewClick(c.name)}
            className={`circle w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
              currentCrew === c.name
                ? "bg-white"
                : "bg-white/20 hover:bg-white/30"
            }`}
            aria-label={c.name}
            aria-pressed={currentCrew === c.name}
          ></button>
        ))}
      </div>
    </div>
  );
}
