import { Copy, Edit, Trash } from "lucide-react";
import { Button } from "../../../components/ui/button";
import useDeleteLocation from "../hooks/useDeleteLocation";
import type { Location } from "../types/Location";
import useAddLocation from "../hooks/useAddLocation";
import type { LocationDto } from "../types/LocationDto";

function LocationCard({ location }: { location: Location }) {
  const { mutate: deleteLocation } = useDeleteLocation();
  const { mutate: addLocation } = useAddLocation();

  const copyLocation = () => {
    const locationData: LocationDto = {
      name: location.name + " - copy",
      description: location.description,
      coordinates: location.coordinates,
    };
    addLocation(locationData);
  };

  return (
    <div className="@container">
      <div className="flex flex-col gap-4 items-start border p-4 rounded-md @lg:flex-row @lg:items-center @lg:justify-between">
        <div>
          <h3 className="font-semibold">{location.name}</h3>
          <p>{location.description}</p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={copyLocation}>
            <Copy />
          </Button>
          <Button variant="outline">
            <Edit />
          </Button>
          <Button
            variant="destructive"
            onClick={() => deleteLocation(location.id)}
          >
            <Trash />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
