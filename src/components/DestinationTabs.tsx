import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { setSelectedDesination } from "@/atoms/destinationStore";

interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

interface DestinationTabsProps {
  data: Destination[];
  loading?: boolean;
  error?: string | null;
  onDataChange?: () => {};
}

export default function DestinationTabs({
  data,
  loading = false,
  error = null,
}: DestinationTabsProps) {
  const [value, setValue] = useState("moon");

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    setSelectedDesination(newValue);
  };

  if (loading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          <p className="text-white text-lg font-medium">
            Loading destinations...
          </p>
          <p className="text-white/50 text-sm">Please wait</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center px-6">
          <div className="text-red-400 text-5xl mb-2">⚠️</div>
          <h3 className="text-red-400 text-xl font-bold">
            Error Loading Destinations
          </h3>
          <p className="text-red-300 text-sm">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center px-6">
          <div className="text-white/30 text-5xl mb-2">🌍</div>
          <h3 className="text-white text-xl font-bold">
            No Destinations Available
          </h3>
          <p className="text-white/50 text-sm">
            Check back later for destination information
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Tabs value={value} onValueChange={handleValueChange}>
        <TabsList className="grid w-full grid-cols-4 bg-transparent gap-4 pl-0 lg:pr-20">
          {data.map((destination) => (
            <TabsTrigger
              key={destination.name}
              value={destination.name.toLowerCase()}
              className="border-b-2 data-[state=active]:border-b-white! data-[state=active]:text-white! hover:text-white! text-sm text-white/50 transition-colors bg-transparent! rounded-none"
            >
              {destination.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {data.map((destination) => (
          <TabsContent
            key={destination.name}
            value={destination.name.toLowerCase()}
            className="my-8"
          >
            <div className="space-y-2">
              <h2 className="text-preset-2 text-white uppercase text-center lg:text-start">
                {destination.name}
              </h2>
              <p className="text-preset-9 text-white/70 min-h-[120px] text-center lg:text-start leading-4">
                {destination.description}
              </p>

              <div className="flex gap-12 pt-8 border-t border-white/20 flex-col lg:flex-row">
                <div>
                  <h3 className="text-white/50 mb-6 text-preset-7 text-center lg:text-start">
                    AVG. DISTANCE
                  </h3>
                  <span className="text-white uppercase text-preset-6 text-center lg:text-start">
                    {destination.distance}
                  </span>
                </div>
                <div>
                  <h3 className="text-white/50 mb-6 text-preset-7 text-center lg:text-start">
                    EST. TRAVEL TIME
                  </h3>
                  <span className="text-white uppercase text-preset-6 text-center lg:text-start">
                    {destination.travel}
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
