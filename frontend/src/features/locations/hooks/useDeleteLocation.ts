import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLocation } from "../api/locationsApi";
import { queryKeyLocations } from "./useLocations";
import type { Location } from "../types/Location";

function useDeleteLocation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: Location["id"]) => deleteLocation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeyLocations });
    },
  });
}

export default useDeleteLocation;
