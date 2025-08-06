import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLocation } from "../api/locationsApi";
import { queryKeyLocations } from "./useLocations";
import type { LocationDto } from "../types/LocationDto";

function useAddLocation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newLocation: LocationDto) => addLocation(newLocation),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeyLocations });
    },
  });
}

export default useAddLocation;
