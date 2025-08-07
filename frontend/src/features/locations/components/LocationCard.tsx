import { Copy, Edit, Trash } from "lucide-react";
import { Button } from "../../../components/ui/button";
import useDeleteLocation from "../hooks/useDeleteLocation";
import useSaveLocation from "../hooks/useSaveLocation";
import type { Location } from "../types/Location";
import { generateUUID } from "../../../lib/uuid";
import DrawerDialog from "../../../components/ui/drawer-dialog";
import SaveLocationForm from "./SaveLocationForm";
import { useState } from "react";

function LocationCard({ location }: { location: Location }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { mutate: deleteLocation } = useDeleteLocation();
  const { mutate: saveLocation } = useSaveLocation();

  function copyLocation() {
    const locationData: Location = {
      ...location,
      id: generateUUID(),
      name: location.name + " - copy",
    };
    saveLocation(locationData);
  }

  return (
    <>
      <DrawerDialog
        title="Edit Location"
        open={dialogOpen}
        setOpen={setDialogOpen}
        children={<SaveLocationForm location={location} />}
      />

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

            <Button variant="outline" onClick={() => setDialogOpen(true)}>
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
    </>
  );
}

export default LocationCard;
