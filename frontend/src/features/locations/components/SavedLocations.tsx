import { Skeleton } from "../../../components/ui/skeleton";
import type { Location } from "../types/Location";
import LoactionsList from "./LocationsList";

interface Props {
  locations: Location[] | undefined;
  isLoading: boolean;
}

function SavedLocations({ locations, isLoading }: Props) {
  if (isLoading)
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-12" />
        ))}
      </div>
    );

  return <LoactionsList locations={locations || []} />;
}

export default SavedLocations;
