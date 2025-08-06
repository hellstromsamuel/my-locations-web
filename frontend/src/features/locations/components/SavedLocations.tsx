import type { Location } from "../types/Location";
import LoactionsList from "./LocationsList";

interface Props {
  locations: Location[] | undefined;
  isLoading: boolean;
}

function SavedLocations({ locations, isLoading }: Props) {
  if (isLoading) return <p>Loading...</p>;

  return <LoactionsList locations={locations || []} />;
}

export default SavedLocations;
