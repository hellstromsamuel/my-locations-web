import type { Location } from "../types/Location";
import LocationCard from "./LocationCard";

interface Props {
  locations: Location[];
}

function LoactionsList({ locations }: Props) {
  return (
    <div className="space-y-4">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
}

export default LoactionsList;
